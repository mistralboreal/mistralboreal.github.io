import type { APIContext } from 'astro';
import { renderRSS } from '../../lib/rss';
export const GET = ({ site }: APIContext) => renderRSS(site, 'en-CA');
