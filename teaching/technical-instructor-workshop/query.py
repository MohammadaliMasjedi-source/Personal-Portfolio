"""Run one learner SELECT statement against the lab database in read-only mode."""
import argparse
import json
import sqlite3
from contextlib import closing
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("sql", type=Path)
parser.add_argument("--db", type=Path, default=Path(__file__).resolve().parent / "workshop.sqlite3")
args = parser.parse_args()
with closing(sqlite3.connect(args.db.resolve().as_uri() + "?mode=ro", uri=True)) as db:
    db.row_factory = sqlite3.Row
    rows = db.execute(args.sql.read_text(encoding="utf-8")).fetchall()
    print(json.dumps([dict(row) for row in rows], indent=2))
