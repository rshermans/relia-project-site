---
name: deploy-github
description: Skill to stage, commit, and push project changes to the GitHub repository.
---

# Deploy to GitHub Skill

This skill provides instructions for deploying code changes to the GitHub repository: `https://github.com/rshermans/relia-project-site`.

## Instructions

1.  **Check Status**: Always run `git status` to see what changes are pending.
2.  **Add Changes**: Use `git add .` to stage all changes, or specify files if necessary.
3.  **Commit**: Use `git commit -m "Your descriptive commit message"` to commit the changes.
4.  **Push**: Use `git push origin main` (or the appropriate branch name) to push changes to the remote repository.

## Safety Rules
- DO NOT push secret keys or `.env` files.
- Ensure the build is passing before pushing if possible.
