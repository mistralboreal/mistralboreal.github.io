/** Convert the exact lossless WebP carrier into the site's PNG without altering pixels. */
import { createHash } from 'node:crypto';
import { readFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import sharp from 'sharp';

const chunks = Array.from({length:20},(_,i)=>resolve('assets/brand-logo-source/part-'+String(i).padStart(2,'0')+'.b64'));
const str = chunks.map(path=>readFileSync(path,'utf8').trim()).join('');
const source=Buffer.from(str, 'base64');
const sha = (d)=>createHash('sha256').update(d).digest('hex');
const expectedCarrier='6a721ac06817f6a9a5beb266e83b6e13dd833dc9d40061330dcdd211a7bae2d5';
const expectedPixels='f9c708e0bbdf230b2fe3448eefe84d07684cfe0ebed31c583e6b72b51592f56b';
if(sha(source)!==expectedCarrier)throw Error('Supplied logo carrier checksum mismatch; do not publish an altered logo');
const raw = await sharp(source).ensureAlpha().raw().toBuffer({resolveWithObject:true});
if(raw.info.width!==400||raw.info.height!==400||raw.info.channels!==4||sha(raw.data)!==expectedPixels)throw Error('Logo RGBA pixel integrity check failed');
const output=resolve('public/branding/mistral-boreal-logo.png');
mkdirSync(dirname(output),{recursive:true});
await sharp(source).png({compressionLevel:9, palette:false}).toFile(output);
const png=await sharp(output).ensureAlpha().raw().toBuffer();
if(sha(png)!==expectedPixels)throw Error('Output PNG does not match the uploaded RGBA pixels');
console.log('Verified original Mistral Boréal logo: 400x400, lossless RGBA, identical light and dark image.');
