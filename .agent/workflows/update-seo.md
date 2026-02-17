---
description: How to update the site SEO metadata and GitHub topics.
---

# Update SEO Workflow

Follow these steps to ensure the site SEO is up to date and consistent across platforms.

## 1. Web Metadata Update
// turbo
1. Open `src/app/layout.tsx`.
2. Update the `metadata` object with the values defined in `.agent/skills/seo-management/SKILL.md`.
3. Verify that `title`, `description`, `keywords`, and `openGraph` properties are correctly populated.

## 2. README Update
1. Open `README.md`.
2. Ensure the "SEO Long Description" from the skill is included in the introduction section of the project.

## 3. GitHub Repository Update
1. Go to the GitHub repository page: `https://github.com/rshermans/relia-project-site`.
2. Click the gear icon next to "About" on the right sidebar.
3. Update the description with the "Meta Description" from the skill.
4. Add the topics listed in the "GitHub Topics" section of the skill.

## 4. Verification
1. Run `npm run dev` and inspect the `<head>` tag of the homepage to verify the changes.
