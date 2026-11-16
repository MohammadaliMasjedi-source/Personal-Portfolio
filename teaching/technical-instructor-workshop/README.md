# From browser to database

A 60-minute instructor-led lab for people who use enterprise software and want to understand how a browser, an API and a database fit together.

**Portfolio teaching sample · November 2026 · prepared for Mohammadali Masjedi.** This is a newly prepared exercise, not a record of a previously delivered client workshop. It contains fictional workshops and learners. Candidate rehearsal and explanation are essential before using it in an interview.

## Start in five minutes

Requirements: Python 3.10 or newer, a browser, and optionally Postman and Git. There are **no pip packages, accounts, API keys or cloud services** to set up. Run commands from this folder. The same commands work in PowerShell and most terminal shells; if Windows uses `py` instead of `python`, substitute `py -3`.

```text
python --version
python server.py
```

Open **http://127.0.0.1:8000**. Keep that terminal running; use a second terminal for the commands below. If port 8000 is busy, run `python server.py --port 8001` and change the browser/Postman base URL. Stop the server with Ctrl+C.

The first launch creates a local `workshop.sqlite3` with three workshops and three fictional enrolments. Repeated launches preserve your exercises. For a clean practice run without deleting anything, use a new database filename, for example `python server.py --db rehearsal-2.sqlite3`. Add the same `--db rehearsal-2.sqlite3` to the query command if using that database.

## What to inspect

| Layer | Files | A question the learner can answer |
|---|---|---|
| Single-page browser interface | `web/` | How does a result change without a full page navigation? |
| JSON API | `server.py`, `postman_collection.json` | What do method, URL, status and response body each tell us? |
| Relational data | `schema.sql`, `exercise.sql`, `solutions/` | Why does a left join preserve workshops with no enrolments? |
| Shared materials | [Git exercise](docs/git-exercise.md) | How do we inspect and commit a small, explainable change? |

```text
python query.py exercise.sql
python query.py solutions/report.sql
python -m unittest discover -s tests -v
```

Read the [learner guide](docs/learner-guide.md), [instructor plan](docs/instructor-plan.md) and [answer key](docs/answer-key.md). For an interview, start with the [10-minute teach-back](docs/teach-back.md).

## API reference

| Request | Meaning | Expected status |
|---|---|---|
| `GET /api/workshops` | List all workshops | 200 |
| `GET /api/workshops?q=SQL` | Filter workshop titles | 200 |
| `GET /api/report` | Enrolment count per workshop, including zero | 200 |
| `POST /api/enrolments` | Create a fictional enrolment | 201 and a Location header |
| `GET /api/enrolments/{id}` | Read an existing enrolment | 200, or 404 |

POST body: `{"workshop_id": 3, "learner_name": "Taylor Demo"}` with `Content-Type: application/json`. Duplicate name/workshop pairs return 409; invalid fields or JSON return 400; unknown workshop IDs return 404; wrong content type returns 415; bodies over 16 KiB return 413. These are the conventions chosen for this exercise, not universal rules for every API.

## Boundaries

This is a **localhost teaching tool**, not a production service. It deliberately has no authentication, permissions model, production monitoring, migration system or deployment recipe. It binds to `127.0.0.1`; do not expose it to the internet or enter real learner/customer information. Its small JavaScript interface illustrates the single-page interaction pattern; it does not claim experience with a particular SPA framework. The SQL helper opens the database read-only. No employer code, research results or private documents are included.

Authoring support: this sample was prepared with an AI assistant. It has automated checks and a separate validation record; that does not establish that Mohammadali has yet delivered or personally rehearsed it. See [validation](VALIDATION.txt).
