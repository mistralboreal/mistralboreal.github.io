# Community blueprint — GitHub Pages + Astro/Velocity + OKF

**Version: 1.0 — October 2026.** Adaptable model from Mistral Boreal (an independent, unofficial user initiative).

This ZIP contains **documentation and editorial templates**, not a standalone source copy of Astro/Velocity. To get a functioning website, fork or clone [the Mistral Boreal repository](https://github.com/mistralboreal/mistralboreal.github.io), based on Velocity and retaining its original components and licence.

## What this blueprint solves

- A static website that is easy to maintain and host on GitHub Pages.
- Two Canadian locales organized under `knowledge/okf/fr-CA` and `knowledge/okf/en-CA`.
- Structured pages, articles, event invitations and resource entries.
- Automated paired translation checks and deployment through GitHub Actions.
- Honest independence notices about technology vendors.

## Getting started

1. Fork or copy the source repository into your GitHub organization.
2. For an organization site, name the repository **your-organization.github.io** (for project sites, adjust `site`, `base` and internal links).
3. Replace all Mistral Boreal-specific branding, slogans, links and disclaimers, especially in `src/layouts/CommunityLayout.astro`, `src/components/community/ContentView.astro`, `src/config/site.config.ts`, `astro.config.mjs`, `public/favicon.svg`, `public/llms.txt` and `README.md`.
4. Replace the sample `knowledge/okf` content. Add matching bilingual files, with identical `translation_key` and `id`, and relative `translation_of` to the French source.
5. Run `pnpm install --frozen-lockfile`, `node scripts/validate-okf.mjs`, `pnpm run check` and `pnpm run build`.
6. On GitHub: Settings > Pages > Build and deployment > Source: **GitHub Actions**.
7. Have a human review both languages, merge the pull request into `main` and check the deployment.
8. Never invent event details, commit secrets or republish third-party learning content without permission.

## Working with Vibe

- **Vibe Work**, formerly Le Chat, can help draft and translate content **subject to human review**.
- **Vibe Code** can inspect and modify files and prepare pull requests.
- Use prompts in `prompts/`, without transmitting secrets or confidential files.

**Mistral Boreal operating model:** our approach to content creation and maintenance is built around the Mistral AI ecosystem, with Vibe Work (formerly Le Chat) and Vibe Code as reference assistants. Every contribution receives human review before GitHub Actions publishes it. Each community remains responsible for describing its own tools accurately.

## References

- [Reference repository](https://github.com/mistralboreal/mistralboreal.github.io)
- [Astro](https://docs.astro.build/)
- [Original Velocity project](https://github.com/southwellmedia/velocity)
- [Official Mistral AI documentation](https://docs.mistral.ai/)
- [Vibe Code documentation](https://docs.mistral.ai/vibe/code/overview)
- [GitHub Pages documentation](https://docs.github.com/en/pages)
