export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/blog_f1089548.mjs').then(n => n.e);

export { page };
