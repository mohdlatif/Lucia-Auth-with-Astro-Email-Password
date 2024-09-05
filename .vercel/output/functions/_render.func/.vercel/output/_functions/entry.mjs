import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_2fE8gESF.mjs';
import { manifest } from './manifest_fpryDaN9.mjs';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/login.astro.mjs');
const _page2 = () => import('./pages/api/logout.astro.mjs');
const _page3 = () => import('./pages/api/signup.astro.mjs');
const _page4 = () => import('./pages/login.astro.mjs');
const _page5 = () => import('./pages/signup.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/login.ts", _page1],
    ["src/pages/api/logout.ts", _page2],
    ["src/pages/api/signup.ts", _page3],
    ["src/pages/login.astro", _page4],
    ["src/pages/signup.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "7d001bce-9b08-4ffb-87d3-6211b1767590",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
