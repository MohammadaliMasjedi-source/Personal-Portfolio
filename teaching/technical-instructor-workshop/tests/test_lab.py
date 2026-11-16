import json
import sqlite3
import tempfile
import threading
import unittest
from http.client import HTTPConnection
from pathlib import Path
import sys
from contextlib import closing

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from server import create_server


class LabTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.db = Path(self.temp.name) / "test.sqlite3"
        self.server = create_server(self.db, 0)
        self.thread = threading.Thread(target=self.server.serve_forever, daemon=True)
        self.thread.start()

    def tearDown(self):
        self.server.shutdown()
        self.server.server_close()
        self.thread.join()
        self.temp.cleanup()

    def request(self, method, path, body=None, headers=None):
        conn = HTTPConnection("127.0.0.1", self.server.server_port, timeout=5)
        conn.request(method, path, body, headers or {})
        response = conn.getresponse()
        raw = response.read()
        status, hdr = response.status, dict(response.getheaders())
        conn.close()
        return status, hdr, raw

    def post(self, data):
        status, headers, raw = self.request("POST", "/api/enrolments", json.dumps(data),
                                            {"Content-Type": "application/json"})
        return status, headers, json.loads(raw)

    def test_assets_load(self):
        for path in ["/", "/app.js", "/style.css"]:
            with self.subTest(path=path):
                status, headers, body = self.request("GET", path)
                self.assertEqual(status, 200)
                self.assertGreater(len(body), 50)
                self.assertEqual(int(headers["Content-Length"]), len(body))

    def test_filter_and_parameterisation(self):
        status, _, body = self.request("GET", "/api/workshops?q=SQL")
        self.assertEqual(status, 200)
        self.assertEqual([x["id"] for x in json.loads(body)["workshops"]], [2])
        _, _, body = self.request("GET", "/api/workshops?q=%27%20OR%201%3D1--")
        self.assertEqual(json.loads(body)["workshops"], [])

    def test_left_join_includes_zero_and_correct_counts(self):
        _, _, body = self.request("GET", "/api/report")
        self.assertEqual([r["enrolments"] for r in json.loads(body)["report"]], [2, 1, 0])

    def test_create_location_readback_and_report(self):
        status, headers, data = self.post({"workshop_id": 3, "learner_name": "  Taylor Demo  "})
        self.assertEqual(status, 201)
        self.assertEqual(data["learner_name"], "Taylor Demo")
        status, _, raw = self.request("GET", headers["Location"])
        self.assertEqual(status, 200)
        self.assertEqual(json.loads(raw), data)
        _, _, raw = self.request("GET", "/api/report")
        self.assertEqual(json.loads(raw)["report"][2]["enrolments"], 1)

    def test_duplicate_is_conflict(self):
        status, _, _ = self.post({"workshop_id": 1, "learner_name": "Alex Demo"})
        self.assertEqual(status, 409)

    def test_unknown_workshop_is_not_found(self):
        self.assertEqual(self.post({"workshop_id": 999, "learner_name": "Taylor Demo"})[0], 404)

    def test_bad_fields(self):
        for value in [{}, [], {"workshop_id": True, "learner_name": "A"},
                      {"workshop_id": "1", "learner_name": "A"},
                      {"workshop_id": -1, "learner_name": "A"},
                      {"workshop_id": 1, "learner_name": "  "},
                      {"workshop_id": 1, "learner_name": "A" * 61}]:
            with self.subTest(value=value):
                self.assertEqual(self.post(value)[0], 400)

    def test_bad_json(self):
        self.assertEqual(self.request("POST", "/api/enrolments", '{"broken":',
                                     {"Content-Type": "application/json"})[0], 400)

    def test_wrong_media_type_and_empty_body(self):
        self.assertEqual(self.request("POST", "/api/enrolments", "{}")[0], 415)
        self.assertEqual(self.request("POST", "/api/enrolments", "",
                                     {"Content-Type": "application/json"})[0], 400)

    def test_oversized_body(self):
        self.assertEqual(self.request("POST", "/api/enrolments", "x" * 16385,
                                     {"Content-Type": "application/json"})[0], 413)

    def test_unknown_route_and_no_arbitrary_file_access(self):
        for path in ["/api/missing", "/api/enrolments/nope", "/api/enrolments/999", "/../server.py", "/schema.sql"]:
            with self.subTest(path=path):
                self.assertEqual(self.request("GET", path)[0], 404)

    def test_quoted_name_is_data_not_sql(self):
        self.assertEqual(self.post({"workshop_id": 1, "learner_name": "Demo'); DROP TABLE workshops;--"})[0], 201)
        with closing(sqlite3.connect(self.db)) as db:
            self.assertEqual(db.execute("SELECT COUNT(*) FROM workshops").fetchone()[0], 3)


if __name__ == "__main__":
    unittest.main()
