import { entriesFor, getOKF, hrefFor, type Locale } from './okf';

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export async function renderRSS(site: URL | undefined, locale: Locale): Promise<Response> {
  const all = await getOKF();
  const posts = entriesFor('article', locale, all);
  const root = (site || new URL('https://mistralboreal.github.io')).toString();
  const feedPath = locale === 'en-CA' ? 'en-ca/rss.xml' : 'rss.xml';
  const title = locale === 'en-CA' ? 'Mistral Boréal — Articles (English)' : 'Mistral Boréal — Articles (français)';
  const items = posts.map((p) => {
    const url = new URL(hrefFor(p), root).toString();
    const date = new Date(p.data.published_at || p.data.updated);
    return '<item><title>' + escape(p.data.title) + '</title><link>' + url +
      '</link><guid>' + url + '</guid><description>' + escape(p.data.description) +
      '</description><pubDate>' + date.toUTCString() + '</pubDate></item>';
  }).join('\n');
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<rss version="2.0"><channel><title>' + escape(title) + '</title>' +
    '<link>' + root + '</link><description>' + escape(title) + '</description>' +
    '<language>' + (locale === 'en-CA' ? 'en-CA' : 'fr-CA') + '</language>' +
    '<atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="' +
    new URL(feedPath, root).toString() + '" rel="self" type="application/rss+xml"/>' +
    items + '</channel></rss>';
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
