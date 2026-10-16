# Mistral Boréal — OKF INTERNAL / NON-WEBSITE BRAND FILES

**Important:** Resources in this directory are not published by Astro or GitHub Pages. The repository itself is **public**, so this is NOT a confidential or access-controlled storage location. Anyone can read the files through GitHub. Move to a private GitHub repository if confidentiality is required.

**Structure** (FR-CA source of truth, EN-CA paired translations):

- `fr-CA/livre-de-marque.md` / `en-CA/brand-book.md` — long-form brand guidelines.
- `fr-CA/kit-de-marque.md` / `en-CA/brand-kit.md` — practical brand assets and usage.
- `assets/` — proposed logo vectors and design tokens (not production-approved site artwork).
- `manifest.json` — visibility and paired-document metadata.

The Astro content loader is deliberately restricted to `knowledge/okf/{fr-CA,en-CA}/**/*.{md,mdx}`. This `internal/branding/` directory is **outside** those public collection roots; it is not included in page routing, sitemaps, the downloadable community blueprint, or the static `dist/` output.

Do **not** add internal documents to the published content loader; never place assets under `public/`, `src/pages/`, or `community-blueprint/` without a separate explicit release approval.

## Legal distinction

The independent pixel beaver and maple leaf are a community concept inspired by the digital pixel-art aesthetic, **not a modification or recreation of the official Mistral logo or cat**. The Mistral AI Logo Guidelines (2026), supplied separately for reference, prohibit modifying or recreating the official mark. That third-party document is not reproduced in this repository. Mistral Boréal is currently not an official Mistral AI community.

## Checks

`node scripts/validate-brand-internal.mjs` validates translation keys, the internal location, the asset inventory, and the absence of brand-kit artifacts from the static site when `dist/` exists. GitHub Actions runs it before and after the Astro build.
