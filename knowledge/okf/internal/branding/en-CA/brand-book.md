---
document_type: "brand-book"
brand: "Mistral Boréal"
language: "en-CA"
translation_key: "mistral-boreal-brand-book"
source_of_truth: false
translation_status: "draft"
translation_of: "../fr-CA/livre-de-marque.md"
visibility: "internal"
publish_to_astro: false
status: "proposed-identity"
version: "0.1.0"
updated: "2026-10-15"
title: "Mistral Boréal Brand Book"
---

# Mistral Boréal Brand Book

**Version 0.1 · Selected visual proposal · Internal working document, not published on the website.**

## 1. Brand identity

**Mistral Boréal** is a free, fully bilingual Canadian user community for learning, experimenting with and sharing Mistral AI use cases, while remaining open to fair comparisons with other technologies.

Our editorial idea: **“Explore AI. Share what works.”**

The visual personality should express **curiosity**, **approachability** and **resourcefulness**: credible enough for professional work and playful enough for a user community.

## 2. What the icon represents

The chosen direction features an **original pixel-art Canadian beaver** with a checkered tail, visible front teeth and a **maple leaf incorporated into a red, amber and orange base**. A secondary mascot can peek over an edge as a playful nod to the pixel-art aesthetic, **without copying the silhouette or pixels of Mistral's original cat character**.

The beaver suggests collective building, ingenuity and perseverance; the maple leaf signals Canada; pixels connect the identity to digital craft and AI.

The SVGs under **../assets/** are **working vector interpretations** of the preferred concept sheet, not an unconditionally approved production master. Typography and small-size legibility need further review before public roll-out.

## 3. Independence and third-party trademarks

Mistral Boréal is **independent, unaffiliated and not officially recognized or sponsored by Mistral AI at this time**. We hope to earn formal recognition in the future, but no approval or accepted application is implied.

Mention Mistral AI products descriptively, with official links where relevant. **Never present our beaver emblem, maple leaf or wordmark as an official Mistral AI logo.**

The supplied *Mistral Logo Guidelines 2026* explicitly prohibit recreating or modifying the official Mistral logo. Our identity must therefore remain original. That external third-party PDF is not redistributed or licensed as part of this kit.

Standard disclosure: **“Mistral Boréal is an independent user community and is not officially recognized by Mistral AI.”**

## 4. Logo system

These are **working variations**:

| Asset | Recommended use |
| --- | --- |
| [logo-horizontal-light.svg](../assets/logo-horizontal-light.svg) | Header, documents or banners on light backgrounds |
| [logo-horizontal-dark.svg](../assets/logo-horizontal-dark.svg) | Dark-background banners and headers |
| [logo-symbol.svg](../assets/logo-symbol.svg) | Community avatars and icons at legible sizes |
| [mascot-peek.svg](../assets/mascot-peek.svg) | Secondary illustration for informal community communications |
| [design-tokens.json](../assets/design-tokens.json) | Machine-readable colour and typography tokens |

The **primary lockup** is the beaver emblem to the left and “Mistral Boréal” on the right. The peeking mascot is an illustration, not a replacement for the primary institutional logo.

Avoid squeezing a detailed animal icon into a **16–32 px favicon**. Use a separately tested and approved simplified MB monogram in that range.

## 5. Sizing, clear space and alignment

- Horizontal logo: provisional minimum **260 px** wide.
- Stand-alone symbol: provisional minimum **56 px** wide.
- Clear space: at least **12.5% of the symbol's width** around the mark, free of competing objects.
- Preserve the tail, front teeth and maple leaf; never crop, stretch or squeeze the art.
- Align the emblem optically with the wordmark, and prefer original SVG over screenshots.
- Test every output on both light and dark backgrounds at its actual on-screen size.

These are **Mistral Boréal working rules**, not the official Mistral AI logo-size rules.

## 6. Mistral Boréal colour system

The palette follows our proposed pixel beaver and maple-leaf artwork. **It is not Mistral AI's official brand palette**.

| Token | HEX | Use |
| --- | --- | --- |
| Northern night | `#161626` | Wordmark, dark backgrounds, headings |
| Snow white | `#FCFCF9` | Light backgrounds |
| White | `#FFFFFF` | Reversed text and leaf detail |
| Beaver brown | `#A9491B` | Mascot body, tail and shadows |
| Orange | `#E67C18` | Beaver highlights |
| Amber | `#FFA51B` | Bright pixel accents |
| Flame | `#EF5C16` | Secondary accents |
| Maple red | `#D51232` | Maple-leaf base |
| Dark red | `#B9082C` | Shadow pixels |

Amber and orange should **not** be used as small text on white without contrast testing. Prefer `#161626` on `#FCFCF9` for body text and white on `#161626`. Target WCAG AA (**4.5:1** for normal text).

## 7. Typography

- **Outfit**, bold: headings, wordmark and meetup communications.
- **Manrope**: body text, labels, accessible interface components.
- **JetBrains Mono**: code, commands and technical metadata.

If the display face is unavailable, use a legible geometric sans-serif. Never substitute the official Mistral AI wordmark.

Write the proper name as **Mistral Boréal** in **both Canadian languages**, retaining the accent. URLs and domain names remain ASCII-only.

## 8. Graphic language and mascot

The beaver is **curious, welcoming and clever**, never hostile or childlike. Build pixel edges on a consistent grid. Do not mix the mark with glossy 3D effects or photorealistic overlays.

The “peeking over the edge” version works for welcoming or playful communications but not as a substitute for the primary logo or at sizes that hide its facial details.

Supporting graphic motifs may use quiet pixel-square accents. Never duplicate Mistral AI's official “M” symbol.

## 9. Voice, Canadian bilingualism and accessibility

**FR-CA:** accessible, practical, warm, precise; use natural Canadian French. Preserve accents and local terminology.

**EN-CA:** natural Canadian English, practical and inclusive; preserve names such as Montréal, Québec and Mistral Boréal. Every important public message should have a matched French and English version.

Suggested alternative text: *“Orange pixel-art beaver with a checkered tail and a white maple leaf over a red base: Mistral Boréal community symbol.”*

Do not imply that a person, organization or vendor endorses the community without evidence. Never invent meetup dates or accreditation.

## 10. Appropriate and inappropriate use

**Do:** use the approved vector master, observe clear space, check contrast, display independent status, publish bilingual copy, and have humans review assets.

**Don't:** merge the beaver with the actual Mistral logo, use Mistral's original pixel “M” inside our mark, present the official cat as our mascot, add heavy effects, distort the artwork, remove the leaf or suggest vendor affiliation.

## 11. Versioning and approval

Status: **version 0.1, preferred visual direction awaiting production QA**. Releasing a logo to the website, favicon or social networks requires a separate approval step.

Before public release, check spelling, light/dark versions, mobile legibility, contrast, licences, accurate affiliation language and both Canadian languages. Communicate official recognition only if supported by verifiable confirmation.

Track assets and design decisions through pull requests. **Do not move these documents into `public/`, `src/pages/`, Astro-rendered content or the downloadable community blueprint without explicit approval.**
