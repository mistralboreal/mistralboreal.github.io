import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';

const base = resolve('knowledge/okf');
const langs = ['fr-CA', 'en-CA'];
const errors = [];
const pairs = new Map();
const slugs = new Map();
let files = 0;

function visit(dir) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, item.name);
    if (item.isDirectory()) visit(path);
    else if (/\.mdx?$/.test(item.name)) check(path);
  }
}
function check(path) {
  files += 1;
  const raw = readFileSync(path, 'utf8');
  const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!frontmatter) { errors.push(relative(base,path) + ': missing frontmatter'); return; }
  const data = {};
  for (const line of frontmatter[1].split(/\r?\n/)) {
    const match = line.match(/^([a-z_]+):\s*(.*)$/);
    if (!match) continue;
    const [, key, value] = match;
    try { data[key] = JSON.parse(value); }
    catch { data[key] = value; }
  }
  const lang = relative(base,path).split(/[\\/]/)[0];
  const ident = relative(base,path);
  if (!langs.includes(lang) || lang !== data.language) errors.push(ident + ': locale mismatch');
  for (const field of ['type','id','title','description','slug','language','translation_key','translation_status','updated','source_of_truth']) {
    if (data[field] === undefined) errors.push(ident + ': missing field ' + field);
  }
  const key = data.type + '/' + data.translation_key;
  if (!pairs.has(key)) pairs.set(key, {});
  if (pairs.get(key)[lang]) errors.push(ident + ': duplicate translation_key for ' + lang);
  pairs.get(key)[lang] = data;
  if (lang === 'en-CA' && data.source_of_truth !== false) errors.push(ident + ': English cannot be source of truth');
  if (lang === 'fr-CA' && data.source_of_truth !== true) errors.push(ident + ': French must be source of truth');
  if (lang === 'en-CA' && data.slug !== 'en-ca' && !data.slug.startsWith('en-ca/')) errors.push(ident + ': English slug must start en-ca/');
  if (lang === 'fr-CA' && data.slug.startsWith('en-ca')) errors.push(ident + ': French slug must not start en-ca');
  if (data.slug && (data.slug.startsWith('/') || data.slug.endsWith('/'))) errors.push(ident + ': slug must not start/end with slash');
  if (slugs.has(data.slug)) errors.push(ident + ': duplicate public slug with ' + slugs.get(data.slug));
  slugs.set(data.slug, ident);
  if (data.type === 'page' && (!data.nav_label || typeof data.nav_order !== 'number')) errors.push(ident + ': page needs nav_label and nav_order');
  if (data.type === 'event' && data.event_status === 'confirmed' && !data.event_date) errors.push(ident + ': confirmed event needs date');
  if (data.type === 'training' && !/^https:\/\/docs\.mistral\.ai\//.test(data.source_url || '')) errors.push(ident + ': training requires official source_url');
  if (lang === 'en-CA') {
    if (!data.translation_of) errors.push(ident + ': translation_of missing');
    else if (!existsSync(resolve(dirname(path),data.translation_of))) errors.push(ident + ': translation_of path is invalid: ' + data.translation_of);
  }
}
for (const lang of langs) {
  const folder = join(base,lang);
  if (!existsSync(folder)) errors.push('Missing locale folder ' + lang);
  else visit(folder);
}
for (const [key, values] of pairs) {
  if (!values['fr-CA'] || !values['en-CA']) errors.push('Unpaired content: '+key);
  if (values['fr-CA'] && values['en-CA'] && values['fr-CA'].id !== values['en-CA'].id) errors.push('Pair ID mismatch: ' + key);
}
if (errors.length) {
  console.error('OKF validation FAILED:\n' + errors.map((e) => ' - ' + e).join('\n'));
  process.exitCode = 1;
} else {
  console.log('OKF validated: ' + files + ' entries / ' + pairs.size + ' FR-CA & EN-CA pairs; no duplicates or missing translations.');
}
