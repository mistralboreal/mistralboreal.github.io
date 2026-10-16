---
document_type: "brand-kit"
brand: "Mistral Boréal"
language: "fr-CA"
translation_key: "mistral-boreal-brand-kit"
source_of_truth: true
translation_status: "source"
visibility: "internal"
publish_to_astro: false
status: "proposed-identity"
version: "0.1.0"
updated: "2026-10-15"
title: "Kit de marque — Mistral Boréal"
---

# Kit de marque Mistral Boréal

**Statut : éléments de travail, ne pas diffuser sur le site.** Ce dossier constitue la source commune pour le futur logo, la mascotte, les couleurs et la typographie.

## Inventaire et fichiers maîtres

Les ressources restent dans [../assets/](../assets/) à côté de ce document et **en dehors de `public/`**.

| Fichier | Format | Utilisation |
| --- | --- | --- |
| [logo-symbol.svg](../assets/logo-symbol.svg) | SVG | Castor pixellisé et feuille d'érable |
| [logo-horizontal-light.svg](../assets/logo-horizontal-light.svg) | SVG | Logo complet sur fond clair |
| [logo-horizontal-dark.svg](../assets/logo-horizontal-dark.svg) | SVG | Logo complet avec mot-symbole clair |
| [mascot-peek.svg](../assets/mascot-peek.svg) | SVG | Castor au rebord, illustration secondaire |
| [design-tokens.json](../assets/design-tokens.json) | JSON | Couleurs, polices et paramètres de présentation |

Ces SVG ont été **reconstruits comme variantes vectorielles de travail** à partir du concept aimé par la communauté. L'image initiale générée pour la proposition du castor constitue la référence visuelle; ses détails de rendu restent à harmoniser avec ces fichiers avant toute adoption comme maîtres définitifs. Ne pas remplacer automatiquement le favicon du site.

## Palette et jetons

| Usage | Couleur |
| --- | --- |
| Wordmark, interface nocturne | `#161626` |
| Fond clair | `#FCFCF9` |
| Castor | `#A9491B` et `#E67C18` |
| Lumières | `#FFA51B` et `#EF5C16` |
| Base érable | `#D51232` et `#B9082C` |
| Feuille / dents | `#FFFFFF` |

**Polices de travail :** Outfit (titres), Manrope (texte), JetBrains Mono (technique). Les fichiers de police ne sont pas distribués dans le kit.

## Grille de déclinaisons

1. **En-tête / présentation** : `logo-horizontal-light.svg`, largeur minimale de travail de 260 px.
2. **Fond sombre** : `logo-horizontal-dark.svg`, sans entourer le logo d'autres marques.
3. **Avatar communautaire** : `logo-symbol.svg`, au moins 56 px; vérifier la lisibilité à la dimension réelle.
4. **Messages informels** : `mascot-peek.svg`, en illustration accompagnant, mais ne remplaçant pas, le nom.
5. **Favicon** : conserver provisoirement l'icône MB du site; un monogramme à 16–32 px sera décidé séparément.

## Gabarit de texte de présentation

**Mistral Boréal** — une communauté canadienne gratuite et bilingue pour partager les usages de Mistral AI et comparer les options technologiques avec rigueur.

**Mention obligatoire pour toute communication externe :** Mistral Boréal est indépendante et n'est actuellement pas une communauté officiellement reconnue ni soutenue par Mistral AI.

## Liste de vérification avant publication

- [ ] Logo distinct de la marque officielle de Mistral AI, sans copie du « M » ni du chat.
- [ ] Castor reconnaissable, feuille d'érable lisible, caractères « Boréal » bien accentués.
- [ ] Test sur fond clair et sombre, en petit format et sur téléphone.
- [ ] Contraste, marges, alternative textuelle et formes de fichier vérifiés.
- [ ] Nom et mentions d'indépendance FR-CA / EN-CA cohérents.
- [ ] Approbation éditoriale et graphique explicite.
- [ ] Aucune ressource interne déplacée par erreur dans `public/` ou `community-blueprint/`.

Lire le [livre de marque](livre-de-marque.md) pour l'ensemble des principes.
