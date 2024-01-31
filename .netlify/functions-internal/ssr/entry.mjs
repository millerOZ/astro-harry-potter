import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_7ae68d82.mjs';

const _page0  = () => import('./chunks/generic_101692ee.mjs');
const _page1  = () => import('./chunks/index_119837b6.mjs');
const _page2  = () => import('./chunks/blog_3cfa05ba.mjs');
const _page3  = () => import('./chunks/post-01_bc89e04f.mjs');
const _page4  = () => import('./chunks/post-02_e527f191.mjs');
const _page5  = () => import('./chunks/faq_6fcb8896.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/blog.astro", _page2],["src/pages/post/post-01.md", _page3],["src/pages/post/post-02.md", _page4],["src/pages/faq.astro", _page5]]);
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
