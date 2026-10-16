# OKF — Mistral Boréal

Le dossier knowledge/okf constitue la source de vérité éditoriale du site, selon le modèle de GUM365.

## Organisation

- fr-CA/ : rédaction originale canadienne-française.
- en-CA/ : contenus correspondants en anglais canadien.
- pages/ : pages institutionnelles et de navigation.
- articles/ : blog, tutoriels, expériences et comparaisons technologiques.
- events/ : invitations et événements communautaires.
- training/ : parcours d’apprentissage et liens vers les ressources Mistral AI.

Le site Astro est généré automatiquement depuis ces fichiers Markdown. Chaque contenu partage son translation_key avec sa traduction, même quand les deux URL sont différentes. Le champ translation_of dans le fichier anglais pointe vers le fichier français d’origine.

## Frontmatter

Les clés utilisées sont : type, id, title, description, slug, language, source_of_truth, translation_key, translation_status, updated. Les pages ajoutent nav_label et nav_order; les articles ajoutent published_at; les événements peuvent ajouter event_status, event_date, event_format, city et registration_url; les formations possèdent source_url.

Le statut translation_status des premières traductions anglaises reste draft tant qu’une relecture humaine n’est pas faite. Les deux versions sont publiées et restent navigables; ceci signale seulement la révision linguistique éditoriale à effectuer. Ne pas confondre translation_status avec draft (ce dernier retire un contenu du site).

Avant de soumettre une contribution, lancer :

    node scripts/validate-okf.mjs
    pnpm run check
    pnpm run build

## Règles

1. Une paire FR-CA / EN-CA obligatoire pour chaque contenu.
2. FR-CA à la racine; EN-CA sous /en-ca/.
3. Aucun événement ne doit afficher une date ou une inscription sans confirmation.
4. Les documents officiels de Mistral AI doivent être liés et attribués; ne pas les republier sans droits de réutilisation.
5. Les comparaisons avec d’autres technologies restent factuelles et contextualisées.
6. Aucune clé API ou donnée personnelle dans les contenus publics.

## Navigation évolutive et pages masquées

Le champ facultatif `nav_visible: false` retire une page du **menu seulement**, sans supprimer son URL ni sa paire de traduction. Pour l'instant la bibliothèque « Formation / Learning » est disponible en lien direct mais cachée de la navigation principale. Les pages « Écosystème » et « Notre modèle » restent visibles dans le menu.

## Identité de marque — espace OKF hors publication

Le livre de marque et le kit de marque existent dans `knowledge/okf/internal/branding/`, avec deux paires de documents FR-CA / EN-CA et des actifs SVG. Ils sont **exclus volontairement** du chargeur Astro qui ne lit que `knowledge/okf/fr-CA` et `knowledge/okf/en-CA`, ainsi que des téléchargements publics.

Le script `node scripts/validate-brand-internal.mjs` vérifie cette séparation avant et après la compilation. **Attention : le dépôt GitHub est public**, donc ces documents sont accessibles via GitHub malgré leur absence du site; utiliser un dépôt privé distinct si leur confidentialité est requise.
