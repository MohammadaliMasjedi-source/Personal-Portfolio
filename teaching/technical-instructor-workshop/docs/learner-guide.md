# Learner guide

## Your goal

By the end, explain the browser → API → database path, inspect a JSON request, distinguish a validation error from a duplicate, and count enrolments without dropping empty workshops.

You do not need to be a Python developer. Work with a fictional learner name, such as `Taylor Demo`; never enter real customer information. If installation fails, pair with the instructor or use the included response examples. You can answer the reasoning questions without running the server.

## 1. Predict before clicking

Start the app using the README. Search for **SQL**. Predict whether the browser will reload the entire page. Open browser developer tools → Network, then repeat the search. Find `/api/workshops?q=SQL` and identify its method, status and JSON body. The browser asks for data, then JavaScript updates part of the existing page.

Without changing the browser app, open http://127.0.0.1:8000/api/workshops in a new tab. What is different about the presentation of the same underlying data?

## 2. Inspect with Postman

Import `postman_collection.json`. Set the collection variable `base_url` to `http://127.0.0.1:8000` (or your chosen port). Run **List workshops**, then **Create demo enrolment**. The create request uses a fresh fictional name each time; its checks save the created ID and name as collection variables. Run **Read created enrolment**, then **Duplicate created enrolment**.

Before sending each request, predict the status. Explain why a second request using the same name and workshop returns 409 rather than creating another row. Run **Invalid workshop ID** and explain why it returns 400: its ID has the wrong type. Run **Unknown workshop** to see a valid integer referring to a workshop that does not exist (404).

Record: request name, expected status, actual status, and one sentence explaining any difference. Included Postman checks are aids, not proof that every API behavior is correct.

## 3. Answer a customer question with SQL

A training coordinator asks: **“Which workshops have enrolments, and which have none?”**

Open `schema.sql`. One workshop can have many enrolments. The `workshop_id` foreign key links the tables. `UNIQUE(workshop_id, learner_name)` prevents duplicate pairs.

Run `python query.py exercise.sql`. Add a join and an enrolment count to `exercise.sql`. Keep every workshop, even if there is no matching enrolment. Your counts depend on requests already sent: use a fresh database if you need the initial counts **2, 1, 0**.

Predict the results of `python query.py solutions/inner-join.sql` and `python query.py solutions/count-star.sql`, then run them. Which omits a workshop? Which counts an empty workshop as one? Explain the difference before opening the answer key.

## 4. Debug a real response

In the browser form, create an enrolment with the same fictional name and workshop twice. Read the displayed response. Decide which layer rejected it. Compare this with the Postman invalid-ID request. A useful support explanation describes the user's action, the observable response and a next step, without blaming the user.

## 5. Make a shared change

Follow the [Git exercise](git-exercise.md). Change a practice note, inspect the diff and make one local commit. Keep the database and any personal details out of version control.

## Exit check

1. Explain the three application layers to a non-developer in 30 seconds.
2. Show a successful POST and a deliberate failed request. Explain the status and body.
3. Show a SQL report that includes workshops with zero enrolments.
4. Explain why the program passes SQL values as parameters.
5. Show the exact change included in your Git commit.
