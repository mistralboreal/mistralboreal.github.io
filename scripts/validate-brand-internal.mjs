/**
 * Internal OKF brand-kit safety checks.
 * This enforces website non-publication, NOT GitHub repository confidentiality.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, relative, join, basename, dirname } from 'node:path';

const home = resolve('knowledge/okf/internal/branding');
const manifestFile = join(home, 'manifest.json');
const problems = [];
const assert = (ok, reason) => { if (!ok) problems.push(reason); };
const fileText = (p) => existsSync(p) ? readFileSync(p, 'utf8') : '';

assert(existsSync(manifestFile), 'Missing internal brand manifest');
const manifest = existsSync(manifestFile) ? JSON.parse(fileText(manifestFile)) : {};

assert(manifest.publish_to_astro === false, 'Brand manifest must explicitly forbid Astro publishing');
assert(manifest.include_in_blueprint === false, 'Brand manifest must explicitly forbid public community kit inclusion');
assert(manifest.visibility === 'internal-not-in-website', 'Unexpected brand visibility');
assert(manifest.confidentiality === 'NOT_PRIVATE_PUBLIC_GITHUB_REPOSITORY', 'Public repository visibility must be acknowledged');
assert(Array.isArray(manifest.paired_documents) && manifest.paired_documents.length >= 2, 'Need FR-CA/EN-CA brand-book and kit document pairs');

for (const pair of manifest.paired_documents ?? []) {
  const fr = join(home, pair.fr);
  const en = join(home, pair.en);
  assert(existsSync(fr) && existsSync(en), 'Missing translation pair: ' + pair.translation_key);
  for (const [path, language, source] of [[fr, 'fr-CA', true], [en, 'en-CA', false]]) {
    const data = fileText(path);
    assert(data.startsWith('---\n'), path + ': frontmatter missing');
    assert(data.includes('translation_key: "' + pair.translation_key + '"'), path + ': translation_key mismatch');
    assert(data.includes('language: "' + language + '"'), path + ': language mismatch');
    assert(data.includes('source_of_truth: ' + source), path + ': source_of_truth mismatch');
    assert(data.includes('visibility: "internal"'), path + ': must be internal');
    assert(data.includes('publish_to_astro: false'), path + ': must not be a public Astro page');
  }
  const translation = fileText(en).match(/^translation_of:\s*"([^"]+)"/m)?.[1];
  assert(!!translation && resolve(dirname(en), translation) === fr, en + ': translation_of must link to FR-CA counterpart');
}

const allowedAssets = Array.isArray(manifest.assets) ? manifest.assets : [];
assert(allowedAssets.length >= 5, 'Brand inventory should contain vector variants and tokens');

const publicBuildNames = new Set();
for (const asset of allowedAssets) {
  assert(asset.startsWith('assets/') && !asset.includes('..'), 'Asset path cannot escape internal branding: ' + asset);
  const target = resolve(home, asset);
  assert(target.startsWith(home + '/'), 'Asset must remain inside internal branding: ' + asset);
  assert(existsSync(target), 'Internal brand asset not found: ' + asset);
  const content = fileText(target);
  if (asset.endsWith('.svg')) assert(content.startsWith('<svg') && content.includes('viewBox='), 'Invalid SVG: ' + asset);
  if (asset.endsWith('.json') && content) { try { JSON.parse(content); } catch { problems.push('Invalid JSON: ' + asset); } }
  publicBuildNames.add(basename(asset));
}

const loader = fileText(resolve('src/content.config.ts'));
assert(loader.includes("base: './knowledge/okf'") &&
  loader.includes("pattern: '{fr-CA,en-CA}/**/*.{md,mdx}'"),
  'Public Astro loader scope changed — re-check exclusion of internal branding');

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
    const path = join(dir, item.name);
    return item.isDirectory() ? walk(path) : item.isFile() ? [path] : [];
  });
}
for (const root of [resolve('public'), resolve('dist')]) {
  for (const path of walk(root)) {
    const rel = relative(root, path).replaceAll('\\', '/');
    assert(!publicBuildNames.has(basename(path)), 'Internal brand asset exposed under ' + rel);
    assert(!rel.includes('internal/branding'), 'Internal brand folder exposed under ' + rel);
    if (root.endsWith('/dist') && (path.endsWith('.html') || path.endsWith('.xml'))) {
      const page = fileText(path);
      assert(!page.includes('mistral-boreal-brand-book') &&
        !page.includes('knowledge/okf/internal/branding'),
        'Internal brand documentation referenced in published page ' + rel);
    }
  }
}
if (problems.length) {
  console.error('Internal brand guard FAILED:\n' + problems.map((p) => ' - ' + p).join('\n'));
  process.exit(1);
}
console.log('Internal brand guard passed: '+(manifest.paired_documents?.length || 0)+' bilingual pairs, '+allowedAssets.length+' internal assets, no files in public/dist.');
