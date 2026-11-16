SELECT w.id, w.title, COUNT(e.id) AS enrolments
FROM workshops w
LEFT JOIN enrolments e ON e.workshop_id = w.id
GROUP BY w.id, w.title
ORDER BY w.id;
