import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_584c8700.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_e031d282.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_512ae61b.mjs');
const _page1  = () => import('./chunks/index_0c016f7d.mjs');
const _page2  = () => import('./chunks/blog_4e2f490c.mjs');
const _page3  = () => import('./chunks/post-01_a9fa4ae5.mjs');
const _page4  = () => import('./chunks/post-02_1f5c6564.mjs');
const _page5  = () => import('./chunks/faq_db4a64c9.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/blog.astro", _page2],["src/pages/post/post-01.md", _page3],["src/pages/post/post-02.md", _page4],["src/pages/faq.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
