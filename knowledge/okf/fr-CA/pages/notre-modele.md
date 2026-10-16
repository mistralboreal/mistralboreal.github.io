---
type: "page"
id: "blueprint"
title: "Notre modèle communautaire ouvert — Mistral Boréal"
description: "Un kit bilingue et réutilisable pour construire une communauté sur GitHub Pages avec Astro, Velocity et une base OKF."
slug: "notre-modele"
language: "fr-CA"
source_of_truth: true
translation_key: "blueprint"
translation_status: "source"
updated: "2026-10-15"
nav_label: "Notre modèle"
nav_order: 5
hero_eyebrow: "OPEN SOURCE · ASTRO + VELOCITY + OKF"
hero_title: "Une communauté qui partage aussi sa façon de fonctionner."
hero_lead: "Notre structure GitHub Pages, nos contenus bilingues et nos règles de publication forment un modèle réutilisable par d’autres communautés."
---

## Pourquoi partager notre modèle?

Un groupe d’usagers ne devrait pas avoir à reconstruire toute son infrastructure. Nous publions notre organisation technique, notre méthode éditoriale et nos gabarits pour que d’autres communautés puissent **s’inspirer de notre approche, la modifier et l’améliorer**.

Ce guide n’est **ni un produit officiel Mistral AI ni un programme d’affiliation**. Le nom et l’identité d’une nouvelle communauté doivent lui appartenir; ne reprenez pas les marques tierces en laissant croire à un soutien inexistant.

## Télécharger le kit de démarrage

**[Télécharger le kit bilingue ZIP](/downloads/mistral-boreal-community-blueprint.zip)** — contient une documentation FR-CA et EN-CA, des modèles Markdown OKF, un exemple de configuration et un prompt de travail pour Vibe Code.

Le kit documentaire n’est **pas une copie complète du thème Velocity** : il sert à personnaliser un clone ou un fork de notre [dépôt GitHub](https://github.com/mistralboreal/mistralboreal.github.io), qui conserve les composants Astro/Velocity et la licence d’origine.

## Architecture réutilisable

| Élément | Rôle |
| --- | --- |
| **GitHub Pages** | Hébergement statique gratuit pour un dépôt public admissible. |
| **Astro + Velocity** | Construction du site, interface, styles et composants accessibles. |
| **OKF (knowledge/okf)** | Source éditoriale structurée pour les pages, articles, rencontres et ressources. |
| **FR-CA / EN-CA** | Chaque texte possède une version jumelle, identifiée par translation_key. |
| **GitHub Actions** | Contrôle des traductions, vérification du build et déploiement automatique. |
| **Vibe Code** | Assistant technique de référence de notre modèle de maintenance, sous revue humaine. |

## Démarrer en six étapes

1. **Dupliquer** le [dépôt Mistral Boréal](https://github.com/mistralboreal/mistralboreal.github.io) dans votre propre organisation GitHub. Conservez les notices de licence, puis renommez les éléments propres à Mistral Boréal.
2. **Personnaliser** le nom, les couleurs, le favicon, les URLs, la mission, les lieux et les avertissements d’affiliation dans les fichiers de contenu et de présentation.
3. **Rédiger** dans `knowledge/okf/fr-CA/` et fournir chaque traduction correspondante dans `knowledge/okf/en-CA/`.
4. **Valider** avec `node scripts/validate-okf.mjs`, `pnpm run check` et `pnpm run build`.
5. **Configurer GitHub Pages** avec la source **GitHub Actions** dans les paramètres du nouveau dépôt.
6. **Publier par Pull Request** : relire les deux langues, fusionner sur `main`, puis surveiller la publication GitHub Actions.

Pour un site sous `<organisation>.github.io`, le dépôt doit porter exactement ce nom. Un dépôt de projet différent peut nécessiter d’adapter `site`, `base` et les chemins absolus du thème.

## Notre modèle de travail : Mistral AI

Nous avons adopté un **modèle de travail fondé sur l’écosystème Mistral AI** pour nous accompagner dans la création de contenus et la maintenance de ce site. **Vibe Work** (anciennement Le Chat) est notre outil de référence pour les travaux éditoriaux, et **Vibe Code** pour les interventions techniques. Cette approche repose également sur la **validation humaine**, le suivi des modifications sur GitHub et la publication automatisée par GitHub Actions.

Notre processus de travail est structuré ainsi :

1. Préparer les nouvelles publications, le plan et les traductions avec Vibe Work.
2. Demander à Vibe Code de modifier les fichiers OKF ou les composants Astro et de proposer une Pull Request.
3. Faire relire le contenu, les sources officielles et les deux langues par une personne.
4. Laisser GitHub Actions valider les paires OKF, compiler Astro et publier automatiquement après fusion.

**Documentation officielle :** [Vibe](https://docs.mistral.ai/fr/vibe), [Vibe Code Web et GitHub](https://docs.mistral.ai/fr/vibe/code/vibe-code-web/get-started).

## Source et contributions

Consultez le [code public et les contributions](https://github.com/mistralboreal/mistralboreal.github.io/pulls), ainsi que le [guide de contribution](/contribuer/). Vous pouvez réutiliser les gabarits originaux de ce kit en conservant les attributions et en vérifiant les licences des autres éléments.
