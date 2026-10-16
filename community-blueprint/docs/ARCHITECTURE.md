# Architecture / Architecture

```text
                       ┌───────────────────────────┐
                       │ knowledge/okf             │
                       │ ├─ fr-CA/{pages,articles,  │
                       │ │ events,training}         │
                       │ └─ en-CA/{pages,articles,  │
                       │   events,training}         │
                       └─────────────┬─────────────┘
                                     │ Astro Content Layer
                                     ▼
                         src/content.config.ts
                                     │
                                     ▼
                            src/lib/okf.ts
                                     │ pair translations
                                     ▼
                  src/pages/[...slug].astro + ContentView
                                     │
                                     ▼
                    Astro + Velocity layouts / styles
                                     │
                                     ▼
                              pnpm run build
                                     │
                                     ▼
              .github/workflows/deploy.yml → GitHub Pages
```

FR-CA : chaque paire partage `id` et `translation_key`. Les slugs de la traduction commencent par `en-ca/`. Le champ `nav_visible: false` masque une page du menu sans supprimer sa route. `draft` retire un contenu de la publication; `translation_status` indique l'état de révision éditoriale.

EN-CA: matching entries share `id` and `translation_key`. English slugs begin with `en-ca/`. Set `nav_visible: false` to hide a page from the menu without removing its URL. `draft` controls publication, whereas `translation_status` tracks editorial translation review.

Always verify the original repository's licence notices, trademarks, source links and privacy/security requirements before reusing this architecture.
