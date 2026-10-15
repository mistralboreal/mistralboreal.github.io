import { getCollection, type CollectionEntry } from 'astro:content';

export type OKFEntry = CollectionEntry<'okf'>;
export type Locale = 'fr-CA' | 'en-CA';
export type ContentType = OKFEntry['data']['type'];

export async function getOKF(): Promise<OKFEntry[]> {
  return (await getCollection('okf')).filter((entry) => !entry.data.draft);
}

export function hrefFor(entry: OKFEntry): string {
  const slug = entry.data.slug.replace(/^\/+|\/+$/g, '');
  return slug ? '/' + slug + '/' : '/';
}

export function alternateFor(entry: OKFEntry, all: OKFEntry[]): OKFEntry {
  const match = all.find((other) =>
    other.data.translation_key === entry.data.translation_key &&
    other.data.type === entry.data.type &&
    other.data.language !== entry.data.language
  );
  if (!match) throw new Error('Missing paired translation: ' + entry.data.translation_key);
  return match;
}

export function navigationFor(locale: Locale, all: OKFEntry[]): OKFEntry[] {
  return all.filter((entry) => entry.data.type === 'page' &&
    entry.data.language === locale && typeof entry.data.nav_order === 'number')
    .sort((a, b) => (a.data.nav_order ?? 100) - (b.data.nav_order ?? 100));
}

export function entriesFor(type: ContentType, locale: Locale, all: OKFEntry[]): OKFEntry[] {
  return all.filter((entry) => entry.data.type === type && entry.data.language === locale)
    .sort((a, b) => (b.data.published_at || b.data.event_date || b.data.updated)
      .localeCompare(a.data.published_at || a.data.event_date || a.data.updated));
}
