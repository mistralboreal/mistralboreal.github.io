/**
 * Deterministic, dependency-free ZIP for the public community blueprint.
 * Files are stored uncompressed: the kit is small, transparent and portable.
 * No third-party node package or remote API is required.
 */
import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, relative, join, dirname, sep } from 'node:path';

const root = resolve('community-blueprint');
const output = resolve('public/downloads/mistral-boreal-community-blueprint.zip');

function paths(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) return paths(full);
      return entry.isFile() ? [full] : [];
    })
    .sort();
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

const localParts = [];
const centralParts = [];
let cursor = 0;
const contentFiles = paths(root);

if (contentFiles.length === 0) throw new Error('Missing community blueprint files.');

for (const file of contentFiles) {
  const name = relative(root, file).split(sep).join('/');
  const filename = Buffer.from(name, 'utf8');
  const data = readFileSync(file);
  const crc = crc32(data);
  const local = Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50, 0);
  local.writeUInt16LE(20, 4);
  local.writeUInt16LE(0x0800, 6); // UTF-8 names.
  local.writeUInt16LE(0, 8); // Store, no compression.
  local.writeUInt32LE(crc, 14);
  local.writeUInt32LE(data.length, 18);
  local.writeUInt32LE(data.length, 22);
  local.writeUInt16LE(filename.length, 26);

  const central = Buffer.alloc(46);
  central.writeUInt32LE(0x02014b50, 0);
  central.writeUInt16LE(20, 4);
  central.writeUInt16LE(20, 6);
  central.writeUInt16LE(0x0800, 8);
  central.writeUInt16LE(0, 10);
  central.writeUInt32LE(crc, 16);
  central.writeUInt32LE(data.length, 20);
  central.writeUInt32LE(data.length, 24);
  central.writeUInt16LE(filename.length, 28);
  central.writeUInt32LE(cursor, 42);

  localParts.push(local, filename, data);
  centralParts.push(central, filename);
  cursor += local.length + filename.length + data.length;
}

const centralDirectory = Buffer.concat(centralParts);
const footer = Buffer.alloc(22);
footer.writeUInt32LE(0x06054b50, 0);
footer.writeUInt16LE(contentFiles.length, 8);
footer.writeUInt16LE(contentFiles.length, 10);
footer.writeUInt32LE(centralDirectory.length, 12);
footer.writeUInt32LE(cursor, 16);
const zip = Buffer.concat([...localParts, centralDirectory, footer]);
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, zip);
console.log('Community blueprint ZIP: ' + contentFiles.length + ' files, ' + zip.length + ' bytes at ' + output);
