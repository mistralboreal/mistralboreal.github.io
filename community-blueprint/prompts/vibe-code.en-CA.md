# Suggested prompt — Vibe Code

You are maintaining a public Astro + Velocity + OKF bilingual community repository.

Task: Read the README, docs/editorial.md, knowledge/okf/README.md, src/content.config.ts, src/lib/okf.ts and the GitHub Actions workflow. Describe the impact before editing. Then implement the change I request.

Constraints:
1. Edit content within knowledge/okf in FR-CA and EN-CA pairs with identical id and translation_key.
2. Keep translation_of pointing to the source French Markdown file.
3. Preserve correct hreflang routes, metadata, existing pages and licences.
4. Don't claim unconfirmed official affiliation or a maintenance tool that is not actually in use.
5. Don't add invented dates, registration links, AI product claims, or unlicensed third-party assets.
6. Don't commit API keys or private data.
7. Run node scripts/validate-okf.mjs, pnpm run check and pnpm run build.
8. Summarize all changes, tests and uncertainties; open a pull request for human review. Do not merge it automatically.

Task for this session: [REPLACE WITH YOUR SPECIFIC REQUEST]
