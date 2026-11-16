-- Add an enrolment count per workshop. Include workshops with zero enrolments.
-- Hint: which table needs every row preserved? Which joined column can be NULL?
SELECT w.id, w.title
FROM workshops w
ORDER BY w.id;
