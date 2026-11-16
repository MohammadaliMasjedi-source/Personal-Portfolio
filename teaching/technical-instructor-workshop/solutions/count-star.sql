-- Deliberate teaching bug: the un-enrolled workshop incorrectly gets a count of 1.
SELECT w.id, w.title, COUNT(*) AS enrolments
FROM workshops w
LEFT JOIN enrolments e ON e.workshop_id = w.id
GROUP BY w.id, w.title
ORDER BY w.id;
