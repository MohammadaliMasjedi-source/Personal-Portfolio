-- Deliberate teaching limitation: this omits workshops with no enrolments.
SELECT w.id, w.title, COUNT(e.id) AS enrolments
FROM workshops w
JOIN enrolments e ON e.workshop_id = w.id
GROUP BY w.id, w.title
ORDER BY w.id;
