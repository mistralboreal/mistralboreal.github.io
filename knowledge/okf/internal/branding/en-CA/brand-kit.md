---
document_type: "brand-kit"
brand: "Mistral Boréal"
language: "en-CA"
translation_key: "mistral-boreal-brand-kit"
source_of_truth: false
translation_status: "draft"
translation_of: "../fr-CA/kit-de-marque.md"
visibility: "internal"
publish_to_astro: false
status: "proposed-identity"
version: "0.1.0"
updated: "2026-10-15"
title: "Mistral Boréal Brand Kit"
---

# Mistral Boréal Brand Kit

**Status: working assets, not for publication on the website.** This folder is the internal source for the proposed logo, mascot, palette and typography.

## Assets and master files

All files are stored in [../assets/](../assets/) beside this document, **outside `public/`**.

| File | Type | Purpose |
| --- | --- | --- |
| [logo-symbol.svg](../assets/logo-symbol.svg) | SVG | Pixel beaver with maple leaf |
| [logo-horizontal-light.svg](../assets/logo-horizontal-light.svg) | SVG | Full lockup for light backgrounds |
| [logo-horizontal-dark.svg](../assets/logo-horizontal-dark.svg) | SVG | Full lockup with white wordmark |
| [mascot-peek.svg](../assets/mascot-peek.svg) | SVG | Beaver peeking over an edge |
| [design-tokens.json](../assets/design-tokens.json) | JSON | Colour, typography and layout tokens |

These SVGs are **working vector interpretations** of the preferred beaver concept. The original concept image remains the visual reference; proportions and rendering details should be checked before the SVGs are called definitive production masters. Do not automatically replace the site's favicon.

## Palette and design tokens

| Function | Colour |
| --- | --- |
| Wordmark and dark UI | `#161626` |
| Light background | `#FCFCF9` |
| Beaver | `#A9491B` and `#E67C18` |
| Bright accents | `#FFA51B` and `#EF5C16` |
| Maple base | `#D51232` and `#B9082C` |
| Maple leaf and teeth | `#FFFFFF` |

**Suggested fonts:** Outfit (headings), Manrope (body), JetBrains Mono (technical content). Font files are not bundled or redistributed.

## Usage matrix

1. **Header or presentation:** `logo-horizontal-light.svg`, working minimum width 260 px.
2. **Dark background:** `logo-horizontal-dark.svg`, with sufficient whitespace.
3. **Community avatar:** `logo-symbol.svg`, at least 56 px wide; verify legibility at actual size.
4. **Informal messages:** `mascot-peek.svg`, as supporting illustration only.
5. **Favicon:** keep the site's existing MB icon for now; approve a simplified 16–32 px design separately.

## Introduction boilerplate

**Mistral Boréal** — a free, fully bilingual Canadian community for sharing Mistral AI use cases and evaluating other technology options thoughtfully.

**Required disclosure for external communications:** Mistral Boréal is independent and is not currently an officially recognized or sponsored Mistral AI community.

## Release checklist

- [ ] Logo clearly distinct from Mistral AI's official logo and cat.
- [ ] Beaver and maple leaf remain recognizable; the acute accent in “Boréal” is correct.
- [ ] Tested on dark/light backgrounds, mobile and at small display sizes.
- [ ] Clear space, accessible contrast, image alternatives and exports reviewed.
- [ ] FR-CA / EN-CA branding and independence language aligned.
- [ ] Explicit design and editorial approval received.
- [ ] No internal resources copied into `public/` or `community-blueprint/`.

Read the full [brand book](brand-book.md) for guidance.
