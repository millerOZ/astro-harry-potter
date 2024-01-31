import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderSlot, h as addAttribute, i as renderComponent, j as renderHead } from '../astro_e031d282.mjs';
import 'clsx';
/* empty css                         *//* empty css                          *//* empty css                          *//* empty css                           *//* empty css                          */
const $$Astro$6 = createAstro();
const $$MenuItemContainerView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MenuItemContainerView;
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-mvj4pzeo>${renderSlot($$result, $$slots["default"])}</ul><img class="nav-bar" src="/assets/bar-left.png" alt="" data-astro-cid-mvj4pzeo>`;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/components/MenuItemContainerView.astro", void 0);

const $$Astro$5 = createAstro();
const $$MenuItemView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MenuItemView;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-okteg42t><a${addAttribute(url, "href")} data-astro-cid-okteg42t>${title}</a></li>`;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/components/MenuItemView.astro", void 0);

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: ""
  },
  {
    title: "FAQ",
    url: "/faq",
    icon: ""
  },
  {
    title: "Blog",
    url: "/blog",
    icon: ""
  }
];

const $$Astro$4 = createAstro();
const $$Separator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Separator;
  return renderTemplate`${maybeRenderHead()}<div class="rule" data-astro-cid-jchhmuzl><img src="/assets/rule.png" alt="" data-astro-cid-jchhmuzl></div>`;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/components/Separator.astro", void 0);

const $$Astro$3 = createAstro();
const $$PostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-jzq3evcu><a${addAttribute(post.url, "href")} data-astro-cid-jzq3evcu><img${addAttribute(post.frontmatter.image.url, "src")} data-astro-cid-jzq3evcu><div class="title" data-astro-cid-jzq3evcu>${post.frontmatter.title}</div><div class="description" data-astro-cid-jzq3evcu>${post.frontmatter.description}</div></a>${renderComponent($$result, "Separator", $$Separator, { "data-astro-cid-jzq3evcu": true })}</div>`;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/components/PostPreview.astro", void 0);

const $$Astro$2 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Title;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="titleContainer" data-astro-cid-zfufvvig><div data-astro-cid-zfufvvig><img src="/assets/title-decoration.webp" alt="" data-astro-cid-zfufvvig></div><h2 data-astro-cid-zfufvvig>${title}</h2><div data-astro-cid-zfufvvig><img src="/assets/title-decoration-bottom.webp" alt="" data-astro-cid-zfufvvig></div></div>`;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/components/Title.astro", void 0);

const $$Astro$1 = createAstro();
const $$LayoutPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutPost;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">${renderHead()}</head><body>${renderComponent($$result, "MenuItemContainerView", $$MenuItemContainerView, {}, { "default": ($$result2) => renderTemplate`${menuItems.map(({ icon, title: title2, url }) => renderTemplate`${renderComponent($$result2, "MenuItemView", $$MenuItemView, { "icon": icon, "title": title2, "url": url })}`)}` })}<div class="container"><div class="logo"><img src="/assets/hero-logo.webp" width="400" alt=""></div>${renderSlot($$result, $$slots["default"])}</div></body></html>`;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/layouts/LayoutPost.astro", void 0);

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./post/post-01.md": () => import('./post-01_2fb605b3.mjs'),"./post/post-02.md": () => import('./post-02_1c92a8d3.mjs')}), () => "./post/*.md");
  return renderTemplate`${renderComponent($$result, "LayoutPost", $$LayoutPost, { "title": "Blog", "data-astro-cid-ijnerlr2": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-ijnerlr2>${renderComponent($$result2, "Title", $$Title, { "title": "Ultimas noticias", "data-astro-cid-ijnerlr2": true })}${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": post, "data-astro-cid-ijnerlr2": true })}`)}</section>` })}`;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/pages/blog.astro", void 0);

const $$file = "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/pages/blog.astro";
const $$url = "/blog";

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Separator as $, $$Title as a, $$LayoutPost as b, $$MenuItemView as c, $$MenuItemContainerView as d, blog as e, menuItems as m };
