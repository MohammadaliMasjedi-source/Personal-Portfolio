# Answer key

On a **fresh** database, the report returns workshops 1, 2 and 3 with enrolment counts **2, 1 and 0**. A new enrolment changes the relevant count. Existing learner exercises are deliberately persistent.

## Why the SQL differs

`LEFT JOIN` keeps every workshop row. For a workshop with no enrolments, the joined `e.id` is NULL. `COUNT(e.id)` counts non-NULL IDs and therefore returns zero. `COUNT(*)` counts the preserved outer-join row and incorrectly reports one for that workshop. An inner join removes the workshop with no matching enrolment. The complete solution is in `solutions/report.sql`.

## Requests and responses

- A successful create returns **201** and a Location header pointing to the created enrolment. Following that location returns the created object.
- Reusing the same workshop/name pair returns **409**, with an explanation of the conflict. The database's unique constraint enforces that rule even if another client bypasses the browser form.
- A string workshop ID, such as `"3"`, returns **400**. A numeric ID of 999 returns **404** because the input has the right type but references no workshop.
- Broken JSON returns **400**; a non-JSON content type returns **415**. Read the body as well as the status.

Example create body:

```json
{"workshop_id": 3, "learner_name": "Taylor Demo"}
```

Example duplicate response:

```json
{"error": "That demo learner is already enrolled in this workshop"}
```

The generated numeric enrolment ID depends on previous requests. Do not teach a hard-coded ID as a universal expected result.

## Architecture explanation

The browser displays and collects information. JavaScript makes an HTTP request to the local API. The server validates it and asks SQLite to read or write rows. The server returns JSON; JavaScript updates the existing page. The browser never receives the SQLite connection or executes SQL directly.

The `?` placeholders and separate parameter tuple keep input values separate from SQL instructions. Do not concatenate a learner's name into SQL. This one practice is useful but does not make the entire service production secure; authentication and other production controls are outside this lab.

## Teach-back questions

“Why can the API work without the webpage?” The server route returns data independently of the interface; Postman can make the same request.

“Why did my app change without a page navigation?” JavaScript fetched JSON and changed part of the document.

“Can I use real customer names?” No. This lab is for fictional local practice and has no access-control model.

“Have these materials already improved customer learning?” No outcome study or previous delivery is claimed. A real session would need observed learner evidence and follow-up.
