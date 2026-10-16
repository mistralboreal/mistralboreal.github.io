# Kit communautaire — GitHub Pages + Astro/Velocity + OKF

**Version : 1.0 — octobre 2026.** Modèle librement adaptable de Mistral Boréal (initiative indépendante, non officielle).

Ce ZIP contient **des guides et gabarits éditoriaux**, pas les sources intégrales d'Astro/Velocity. Le point de départ exécutable est le dépôt public [mistralboreal.github.io](https://github.com/mistralboreal/mistralboreal.github.io) à cloner ou à forker; ce dépôt est issu du modèle Velocity et en conserve les composants et sa licence.

## Ce que le modèle résout

- Un site statique facile à maintenir et à héberger sur GitHub Pages.
- Deux langues canadiennes, séparées dans `knowledge/okf/fr-CA` et `knowledge/okf/en-CA`.
- Des pages, articles, invitations et ressources structurés.
- Un contrôle de la présence de chaque traduction et un déploiement par GitHub Actions.
- Une vraie déclaration d'indépendance vis-à-vis des éditeurs technologiques.

## Mise en route

1. Forker ou copier le dépôt source dans sa propre organisation GitHub.
2. Pour un site d'organisation, le dépôt doit s'appeler **votre-organisation.github.io** (pour un dépôt de projet, adapter `site`, `base` et les liens).
3. Remplacer partout les noms, slogans, textes, liens, logos et avertissements propres à Mistral Boréal; ajuster notamment `src/layouts/CommunityLayout.astro`, `src/components/community/ContentView.astro`, `src/config/site.config.ts`, `astro.config.mjs`, `public/favicon.svg`, `public/llms.txt`, `README.md`.
4. Nettoyer et adapter les entrées de `knowledge/okf`. Ajouter un fichier dans chaque langue avec `translation_key` et `id` identiques, en conservant `translation_of` relatif au fichier français.
5. Lancer : `pnpm install --frozen-lockfile`, `node scripts/validate-okf.mjs`, `pnpm run check`, `pnpm run build`.
6. Dans GitHub : Settings > Pages > Build and deployment > Source: **GitHub Actions**.
7. Relire chaque nouvelle contribution en français et en anglais, fusionner la Pull Request dans `main` et vérifier le déploiement.
8. Éviter d'inventer des événements, de publier des secrets ou de reprendre sans permission des supports tiers.

## Développer avec Vibe

- **Vibe Work**, anciennement Le Chat, peut aider à structurer un article et sa traduction, **sous relecture humaine**.
- **Vibe Code** peut explorer les fichiers, proposer des modifications et une Pull Request.
- Utiliser les prompts du répertoire `prompts/`, sans envoyer de clés, dossiers privés ou données personnelles.

**État de Mistral Boréal (octobre 2026)** : le site a d'abord été créé avec l'assistance de ChatGPT. La transition vers Vibe est envisagée mais non finalisée. Une autre communauté doit décrire ses outils selon leur usage réel.

## Références

- [Dépôt de référence](https://github.com/mistralboreal/mistralboreal.github.io)
- [Astro](https://docs.astro.build/)
- [Velocity d'origine](https://github.com/southwellmedia/velocity)
- [Documentation Mistral AI](https://docs.mistral.ai/fr/)
- [Vibe Code](https://docs.mistral.ai/fr/vibe/code/overview)
- [GitHub Pages](https://docs.github.com/en/pages)
