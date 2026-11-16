# Instructor plan · 60 minutes

## Audience and preparation

Mixed business users and junior technical colleagues; comfortable with a browser, new to APIs and relational data. This is a proposed delivery plan, not evidence of past online delivery or measured learner outcomes.

Before the session: ask what the learners need to do after training, check Python availability and accessibility needs, send the README and objective list, and run the lab on a fresh database. Prepare a browser window, Postman, a text editor and a terminal with readable font sizes. Keep the answer key and a screenshot/response fallback available.

| Time | Activity | Observable check |
|---|---|---|
| 0–5 min | Establish the customer question; check starting knowledge | Learner describes one current difficulty |
| 5–12 | Draw browser → API → database, then search in the app | Learner predicts whether the whole page reloads |
| 12–25 | Demonstrate one GET; learners send POST, readback and duplicate requests | Learner explains 201 versus 409 using observed responses |
| 25–38 | Inspect the two-table schema; solve the zero-enrolment report | Learner explains left join and nullable joined IDs |
| 38–48 | Pair diagnosis: invalid ID versus unknown workshop versus duplicate | Pair reports evidence and a practical next step |
| 48–55 | Edit a short practice note, inspect diff, make one local Git commit | Learner identifies what changed and what stayed out of Git |
| 55–60 | Individual exit check, recap and next step | Learner demonstrates one complete browser/API/data explanation |

## Facilitation choices

Use **predict → demonstrate → practise → explain**. Ask one learner to narrate what they see before explaining it yourself. Distinguish an application decision from a database rule. Avoid assuming everyone knows the terms “endpoint”, “schema” or “foreign key”: define each using this example first.

For virtual delivery: screen-share one readable application at a time, offer chat as an alternative to speaking, paste commands and expected outputs into chat, and pause after each step. In pairs, alternate driver and explainer. If breakout rooms or installations are unavailable, use a shared demonstration and individual predictions. Do not record people without the appropriate permission. For in-person delivery, use the same worksheet and let pairs control their own terminal.

For non-developers, prioritise reading requests, statuses and reports; let them explain a prepared SQL query rather than write it from scratch. For experienced developers, ask them to trace parameter binding in the handler and propose a missing production control. Do not turn the exercise into a claim that this demo is production ready.

## Assessment and follow-up

Use the five exit-check tasks in the learner guide. Score each 0 = not yet, 1 = with prompts, 2 = independently explained and demonstrated. Record observed evidence, not confidence alone. There is no validated pass threshold or evidence of training effectiveness in this new sample.

Send a short recap with the learner's observed gap, the relevant guide section and one practice task. Example: “You read the API response correctly. Practise explaining why COUNT(*) gives 1 for an empty workshop, then compare it with COUNT(e.id).” Invite one follow-up question. No testimonials, attendance totals or improvement metrics are implied.

## Recovery plan

- Port busy: change `--port`, the browser URL and Postman `base_url` together.
- Database has earlier practice rows: use a new `--db` filename and pass it to `query.py` too.
- No Postman: use the browser form and Network panel; the answer key supplies response examples.
- No Python: pair with a running instance through screen-sharing; explain the supplied requests and SQL outputs without pretending a hands-on run happened.
- Session running late: shorten the Git demonstration; preserve the API reasoning and zero-enrolment question.
