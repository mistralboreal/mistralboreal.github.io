# Guide éditorial / Editorial workflow

## Français canadien — version de référence

Créer un fichier dans knowledge/okf/fr-CA/<collection>/<slug>.md. Rédiger la traduction en-CA correspondante et conserver le même translation_key et id. Les URL françaises commencent à la racine et les URL anglaises par en-ca/. Le système vérifie l’existence de toutes les paires au build.

Le champ translation_status décrit l’état de traduction (source, draft, reviewed, validated). Le booléen draft indique si une page est retirée de la publication. Demander une relecture humaine de l’anglais canadien avant de déclarer validated.

## Articles de blog

Dossier articles/. Ajouter published_at au format YYYY-MM-DD, author et tags. Décrire les limites d’une expérience et citer les sources. La liste des articles et les flux RSS sont générés automatiquement.

## Rencontres

Dossier events/. Utiliser event_status=planning tant que l’événement n’est pas confirmé. Ne pas inventer de dates, de salles, de liens vidéo ou de formulaires. Après confirmation, compléter event_date, event_format, city, registration_url et mettre à jour les deux langues. Le rythme prévu est mensuel : virtuel, présentiel Montréal, virtuel, présentiel Québec; les locaux d’AFI Expertise restent sujets à confirmation.

## Formation

Dossier training/. Utiliser source_url pour pointer vers la source officielle de Mistral AI et proposer des exercices originaux. Ne pas copier le matériel sous droit d’auteur sans en vérifier les licences et autorisations.

## English Canada — corresponding edition

Every FR-CA content item must have an EN-CA counterpart with the same translation_key and id. Confirm that translation_of points to the original FR-CA file. Both entries are reviewed together. Run the validation script and Astro build before merging.

Meetup invitations require confirmed dates and registration details. The bilingual site is independent from Mistral AI, and linked learning material remains the responsibility and property of the original publisher.
