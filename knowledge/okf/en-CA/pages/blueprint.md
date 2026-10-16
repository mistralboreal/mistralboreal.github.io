---
type: "page"
id: "blueprint"
title: "Our open community blueprint — Mistral Boreal"
description: "A bilingual reusable kit for building a community on GitHub Pages with Astro, Velocity and an OKF content base."
slug: "en-ca/blueprint"
language: "en-CA"
source_of_truth: false
translation_key: "blueprint"
translation_status: "draft"
updated: "2026-10-15"
translation_of: "../../fr-CA/pages/notre-modele.md"
nav_label: "Our blueprint"
nav_order: 5
hero_eyebrow: "OPEN SOURCE · ASTRO + VELOCITY + OKF"
hero_title: "Share the community. Share the way it works."
hero_lead: "Our GitHub Pages structure, bilingual content and publishing rules form an adaptable blueprint for other community organizers."
---

## Why share a blueprint?

User communities should not need to reinvent their entire infrastructure. We publish our technical approach, editorial workflow and starter templates so that other communities can **learn from it, adapt it and improve it**.

This guide is **neither an official Mistral AI product nor an affiliation programme**. A new community should use its own name and identity and never suggest third-party endorsement without permission.

## Download the blueprint kit

**[Download the bilingual ZIP kit](/downloads/mistral-boreal-community-blueprint.zip)** — includes FR-CA and EN-CA documentation, OKF Markdown templates, an example configuration and a Vibe Code working prompt.

The ZIP is **a documentation and templates package, not a standalone copy of Velocity**. Use it alongside a clone or fork of our [GitHub repository](https://github.com/mistralboreal/mistralboreal.github.io), which retains the Astro/Velocity components and the original licence.

## Reusable architecture

| Component | Purpose |
| --- | --- |
| **GitHub Pages** | Free static hosting for eligible public repositories. |
| **Astro + Velocity** | Builds the website with reusable interface components, styles and accessibility features. |
| **OKF (knowledge/okf)** | Structured editorial source for pages, articles, events and learning materials. |
| **FR-CA / EN-CA** | Every content item has a corresponding translation linked by translation_key. |
| **GitHub Actions** | Checks translation pairs, runs the build and publishes automatically. |
| **Vibe Code** | Technical assistant of reference in our maintenance model, with human review. |

## Start in six steps

1. **Fork or copy** the [Mistral Boreal repository](https://github.com/mistralboreal/mistralboreal.github.io) into your GitHub organization. Keep licence notices, then replace Mistral Boreal-specific names and branding.
2. **Customize** organization name, colours, favicon, URLs, mission, meeting venues and affiliation notices across content and layout files.
3. **Write** in `knowledge/okf/fr-CA/` and provide a corresponding translation in `knowledge/okf/en-CA/`.
4. **Validate** with `node scripts/validate-okf.mjs`, `pnpm run check` and `pnpm run build`.
5. **Set up GitHub Pages** to use **GitHub Actions** in the new repository settings.
6. **Publish through pull requests**: review both languages, merge into `main` and check GitHub Actions.

For an organization website, name the repository `<organization>.github.io`. Other project repository URLs may require changes to `site`, `base` and absolute links.

## Our operating model: Mistral AI

We have adopted a **working model built around the Mistral AI ecosystem** to support content creation and website maintenance. **Vibe Work** (formerly Le Chat) is our reference tool for editorial work, and **Vibe Code** for technical work. Our approach also relies on **human review**, change tracking on GitHub and automated publishing through GitHub Actions.

Our workflow is organized as follows:

1. Draft articles, planning notes and translations with Vibe Work.
2. Ask Vibe Code to edit OKF content or Astro components and propose a pull request.
3. Have a human review both languages and the official sources.
4. Let GitHub Actions check OKF pairs, build Astro and deploy following the merge.

**Official references:** [Vibe](https://docs.mistral.ai/vibe), [Vibe Code Web and GitHub](https://docs.mistral.ai/vibe/code/vibe-code-web/get-started).

## Code and contributions

See the [open-source repository and pull requests](https://github.com/mistralboreal/mistralboreal.github.io/pulls) and our [contribution guide](/en-ca/contribute/). Feel free to reuse the kit's original templates with attribution while observing licences for other code and materials.
