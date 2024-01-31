import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, j as renderHead, i as renderComponent, g as renderSlot, m as maybeRenderHead } from '../astro_e031d282.mjs';
import 'clsx';
import { m as menuItems, c as $$MenuItemView, d as $$MenuItemContainerView } from './blog_f1089548.mjs';
/* empty css                           */import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'html-escaper';
/* empty css                         *//* empty css                          *//* empty css                          *//* empty css                           *//* empty css                          */
const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body>${renderComponent($$result, "MenuItemContainerView", $$MenuItemContainerView, {}, { "default": ($$result2) => renderTemplate`${menuItems.map(({ icon, title: title2, url }) => renderTemplate`${renderComponent($$result2, "MenuItemView", $$MenuItemView, { "icon": icon, "title": title2, "url": url })}`)}` })}${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-3ef6ksr2><video src="/assets/hero.mp4" autoplay loop data-astro-cid-3ef6ksr2></video><div class="logo" data-astro-cid-3ef6ksr2><img src="/assets/hero-logo.webp" alt="" data-astro-cid-3ef6ksr2></div></section>`;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/components/Header.astro", void 0);

function CardsView({ cards }) {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => setCount(count + 1), children: [
      "Click me! ",
      count
    ] }),
    /* @__PURE__ */ jsx("div", { className: "cardsView", children: cards.map((card, index) => {
      return index < 3 ? /* @__PURE__ */ jsx(CardView, { ...card }, index) : null;
    }) })
  ] });
}
function CardView({ title, description, image }) {
  return /* @__PURE__ */ jsxs("div", { className: "card", children: [
    /* @__PURE__ */ jsx("div", { className: "image", style: { backgroundImage: `url(${image})` }, children: /* @__PURE__ */ jsx("img", { src: "/assets/game-info-frame-a.webp", alt: "" }) }),
    /* @__PURE__ */ jsx("div", { className: "title", children: title }),
    /* @__PURE__ */ jsx("div", { className: "description", children: description })
  ] });
}

const $$Astro$1 = createAstro();
const $$SiteContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SiteContent;
  const cards = [
    {
      title: "Titulo 1",
      image: "/assets/game-info-panel-01.jpg",
      description: "Description"
    },
    {
      title: "Titulo 2",
      image: "/assets/game-info-panel-02.jpg",
      description: "Description-2"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-iedpu6rz><div class="trailer" data-astro-cid-iedpu6rz><img src="/assets/launch-trailer.jpg" alt="" data-astro-cid-iedpu6rz></div><div class="description" data-astro-cid-iedpu6rz>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ut
    perferendis earum autem tempora sunt nostrum. Placeat vero molestias unde?
    Cum quam sunt laudantium sint, quae commodi! Facilis, adipisci libero!
</div><div class="cardsContainer" data-astro-cid-iedpu6rz>${renderComponent($$result, "CardsView", CardsView, { "cards": cards, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/components/CardsView", "client:component-export": "default", "data-astro-cid-iedpu6rz": true })}</div></section>`;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/components/SiteContent.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Harry Potter." }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${renderComponent($$result2, "SiteContent", $$SiteContent, {})}` })}`;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/pages/index.astro", void 0);

const $$file = "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
