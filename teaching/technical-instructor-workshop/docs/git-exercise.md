# Git exercise · a small change you can explain

Use a disposable copy of this workshop. If it is already inside a Git repository, create a practice branch in that repository rather than initialising nested repositories. Do not push a change during the class.

For an extracted copy that is not already in a repository:

```text
git init
git status
git switch -c practice/explain-api-errors
```

If Git requests an author identity, use your own chosen name and email; do not copy someone else's identity. A local commit does not upload anything.

Open `practice-notes.md`. Replace its placeholder with a two-sentence explanation of 201 versus 409 and one question you still have. Save it, then run:

```text
git add practice-notes.md
git diff --cached
git status --short
git commit -m "Explain successful and duplicate enrolments"
git show --stat
```

Explain the staged diff before committing. Confirm that `workshop.sqlite3`, credentials, certificates and personal documents are not included. `.gitignore` excludes database and Python-cache files. Avoid `git add .` during this focused exercise so an unrelated file does not enter the commit.

If your organisation uses a shared repository, the next step would normally be a branch and review request under that organisation's process. That is a discussion point here, not a reason to upload this exercise to an employer repository.
