PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS workshops (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    duration_minutes INTEGER NOT NULL CHECK(duration_minutes > 0)
);
CREATE TABLE IF NOT EXISTS enrolments (
    id INTEGER PRIMARY KEY,
    workshop_id INTEGER NOT NULL REFERENCES workshops(id),
    learner_name TEXT NOT NULL,
    UNIQUE(workshop_id, learner_name)
);
