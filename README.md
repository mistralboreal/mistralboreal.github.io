# Mistral Boréal — Astro + Velocity + OKF

[FR-CA](https://mistralboreal.github.io/) · [EN-CA](https://mistralboreal.github.io/en-ca/)

Communauté canadienne indépendante et gratuite pour découvrir, pratiquer et comparer les usages des produits Mistral AI. One free meetup every month, alternating online and in person in Montréal / Québec at AFI Expertise venues when confirmed. The project is not affiliated with Mistral AI.

## Architecture

This repository began from the Southwell Media Velocity Astro starter. The public site preserves Astro 6, Velocity's Tailwind CSS v4 design tokens, fonts and reusable UI components. It adopts the editorial architecture and bilingual OKF content approach of [GUM365](https://github.com/gum365/gum365.github.io) without copying GUM365's brand or Microsoft 365 event integration.

    knowledge/okf/
      fr-CA/
        pages/       # six navigation pages
        articles/    # blog and comparisons
        events/      # meetup invitations
        training/    # learning paths and Mistral AI source links
      en-CA/
        pages/
        articles/
        events/
        training/
    src/
      content.config.ts                 # Astro content schemas
      lib/okf.ts                        # locale, URL and pairing helpers
      components/community/ContentView.astro
      layouts/CommunityLayout.astro
      styles/community.css              # branded Velocity styling
      pages/[...slug].astro             # all non-home routes
      pages/index.astro                 # FR-CA home
      pages/en-ca/index.astro           # EN-CA home
      pages/rss.xml.ts                  # FR RSS
      pages/en-ca/rss.xml.ts            # EN RSS
    scripts/validate-okf.mjs
    .github/workflows/deploy.yml

**Every content item must exist in FR-CA and EN-CA**, share translation_key and link to its corresponding localized URL. FR-CA is the editorial source; EN-CA is a Canadian English translation. The CI script rejects missing pairs, slug collisions, invalid translation paths and unconfirmed-event dates.

The initial EN-CA translations are published but marked translation_status=draft pending human language review. An editor should change this to reviewed or validated only after reviewing them; the site itself is already bilingual.

## Local development

Node.js 22 or newer, pnpm 9.

    corepack enable
    corepack prepare pnpm@9 --activate
    pnpm install --frozen-lockfile
    node scripts/validate-okf.mjs
    pnpm run check
    pnpm run build
    pnpm run dev

Astro outputs a static site into dist/. No server API, accounts, cookies for analytics, or registration database are required. Theme choice alone is saved locally. There are no placeholder mailing-list or contact forms.

## Publishing

GitHub Actions runs pairing validation, Astro type checks and the static build on PRs and pushes. On a push to main it additionally uploads dist/ and deploys to GitHub Pages.

Repository administrator one-time setting:

**Settings → Pages → Build and deployment → Source: GitHub Actions**

Site address: https://mistralboreal.github.io/

A successful Actions deploy and the Pages setting are both necessary before the public URL works. Event RSVP URLs are added to each content entry only when real registrations open.

## Editorial workflow

See [knowledge/okf/README.md](knowledge/okf/README.md) and [docs/editorial.md](docs/editorial.md). Update both languages and source links together, open a PR, and check the Actions result.

## Official resources and trademarks

Learning paths link to [Mistral AI documentation](https://docs.mistral.ai/) and the [first API request quickstart](https://docs.mistral.ai/getting-started/quickstarts/developer/first-api-request). Their copyrights and licences remain with their authors. Mistral Boréal is independent and uses its own wordmark/MB favicon rather than claiming an official Mistral AI affiliation.

## Licence

Original Velocity template license is preserved in LICENSE. Contributions must respect licences on third-party educational resources.

## Architecture duplicable et statut indépendant

Les pages [Notre modèle](/notre-modele/) et [Our blueprint](/en-ca/blueprint/) décrivent comment réutiliser GitHub Pages + Astro/Velocity + OKF. Le kit de démarrage est disponible sous `/downloads/mistral-boreal-community-blueprint.zip`, et ses sources sont dans `community-blueprint/`.

Le menu principal masque temporairement Formation/Learning via `nav_visible: false` tout en conservant les parcours existants. L’écosystème Mistral AI est référencé avec des liens officiels et des avertissements explicites : Mistral Boréal n’est **pas reconnu officiellement** à ce jour, même si la communauté espère l’être un jour.

Mistral Boréal adopte un **modèle de travail fondé sur l'écosystème Mistral AI** pour l'assistance à la création de contenus et à la maintenance : Vibe Work (anciennement Le Chat) et Vibe Code constituent les outils de référence, avec contrôle humain des Pull Requests et publication GitHub Actions.
