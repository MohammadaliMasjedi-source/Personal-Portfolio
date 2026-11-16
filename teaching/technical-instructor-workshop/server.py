"""A local-only teaching lab: browser -> JSON API -> SQLite. Python 3.10+."""
import argparse
import json
import sqlite3
from contextlib import contextmanager
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

ROOT = Path(__file__).resolve().parent
MAX_BODY = 16_384


@contextmanager
def connect(path):
    db = sqlite3.connect(path)
    db.row_factory = sqlite3.Row
    db.execute("PRAGMA foreign_keys = ON")
    try:
        with db:
            yield db
    finally:
        db.close()


def initialise(path):
    with connect(path) as db:
        db.executescript((ROOT / "schema.sql").read_text(encoding="utf-8"))
        if not db.execute("SELECT COUNT(*) FROM workshops").fetchone()[0]:
            db.executemany(
                "INSERT INTO workshops(id, title, duration_minutes) VALUES (?, ?, ?)",
                [(1, "Web and API basics", 60), (2, "SQL for customer questions", 45),
                 (3, "Git for shared training materials", 30)],
            )
            db.executemany(
                "INSERT INTO enrolments(workshop_id, learner_name) VALUES (?, ?)",
                [(1, "Alex Demo"), (1, "Riley Demo"), (2, "Sam Demo")],
            )


def make_handler(db_path):
    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *_):
            pass  # The lab does not log request bodies or learner names.

        def send_bytes(self, status, body, content_type, location=None):
            self.send_response(status)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.send_header("X-Content-Type-Options", "nosniff")
            if location:
                self.send_header("Location", location)
            self.end_headers()
            self.wfile.write(body)

        def reply(self, status, value, location=None):
            self.send_bytes(status, json.dumps(value).encode("utf-8"),
                            "application/json; charset=utf-8", location)

        def error(self, status, message):
            self.reply(status, {"error": message})

        def do_GET(self):
            url = urlsplit(self.path)
            assets = {"/": ("index.html", "text/html"),
                      "/app.js": ("app.js", "text/javascript"),
                      "/style.css": ("style.css", "text/css")}
            if url.path in assets:
                name, mime = assets[url.path]
                self.send_bytes(200, (ROOT / "web" / name).read_bytes(), mime + "; charset=utf-8")
                return
            with connect(db_path) as db:
                if url.path == "/api/workshops":
                    query = parse_qs(url.query).get("q", [""])[0]
                    rows = db.execute(
                        "SELECT id, title, duration_minutes FROM workshops "
                        "WHERE title LIKE ? ORDER BY id", ("%" + query + "%",)
                    ).fetchall()
                    self.reply(200, {"workshops": [dict(row) for row in rows]})
                elif url.path == "/api/report":
                    rows = db.execute(
                        "SELECT w.id, w.title, COUNT(e.id) AS enrolments "
                        "FROM workshops w LEFT JOIN enrolments e ON e.workshop_id = w.id "
                        "GROUP BY w.id, w.title ORDER BY w.id"
                    ).fetchall()
                    self.reply(200, {"report": [dict(row) for row in rows]})
                elif url.path.startswith("/api/enrolments/"):
                    raw_id = url.path.removeprefix("/api/enrolments/")
                    if (not raw_id.isascii() or not raw_id.isdigit() or len(raw_id) > 19
                            or int(raw_id) > 2**63 - 1):
                        self.error(404, "Enrolment not found")
                        return
                    row = db.execute("SELECT id, workshop_id, learner_name FROM enrolments WHERE id = ?",
                                     (int(raw_id),)).fetchone()
                    if row:
                        self.reply(200, dict(row))
                    else:
                        self.error(404, "Enrolment not found")
                else:
                    self.error(404, "Route not found")

        def do_POST(self):
            if urlsplit(self.path).path != "/api/enrolments":
                self.error(404, "Route not found")
                return
            media_type = self.headers.get("Content-Type", "").split(";", 1)[0].strip().lower()
            if media_type != "application/json":
                self.error(415, "Use Content-Type: application/json")
                return
            try:
                length = int(self.headers.get("Content-Length", "0"))
            except ValueError:
                self.error(400, "Invalid Content-Length")
                return
            if length <= 0 or length > MAX_BODY:
                self.error(413 if length > MAX_BODY else 400, "Body must contain a small JSON object")
                return
            try:
                data = json.loads(self.rfile.read(length))
            except (ValueError, UnicodeDecodeError):
                self.error(400, "Invalid JSON")
                return
            if not isinstance(data, dict):
                self.error(400, "Expected a JSON object")
                return
            workshop_id = data.get("workshop_id")
            name = data.get("learner_name")
            if type(workshop_id) is not int or not 1 <= workshop_id <= 2**63 - 1:
                self.error(400, "workshop_id must be a positive integer")
                return
            if not isinstance(name, str) or not 1 <= len(name.strip()) <= 60:
                self.error(400, "learner_name must contain 1 to 60 characters")
                return
            name = name.strip()
            with connect(db_path) as db:
                if not db.execute("SELECT 1 FROM workshops WHERE id = ?", (workshop_id,)).fetchone():
                    self.error(404, "Workshop not found")
                    return
                try:
                    result = db.execute(
                        "INSERT INTO enrolments(workshop_id, learner_name) VALUES (?, ?)",
                        (workshop_id, name),
                    )
                except sqlite3.IntegrityError:
                    self.error(409, "That demo learner is already enrolled in this workshop")
                    return
                new_id = result.lastrowid
                db.commit()
            self.reply(201, {"id": new_id, "workshop_id": workshop_id, "learner_name": name},
                       f"/api/enrolments/{new_id}")

    return Handler


def create_server(db_path, port=8000):
    initialise(db_path)
    return ThreadingHTTPServer(("127.0.0.1", port), make_handler(db_path))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=8000)
    parser.add_argument("--db", type=Path, default=ROOT / "workshop.sqlite3")
    args = parser.parse_args()
    server = create_server(args.db, args.port)
    print(f"Local teaching lab: http://127.0.0.1:{server.server_port}", flush=True)
    print("Synthetic data only. Ctrl+C to stop. No production deployment.", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
