import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_e3fc0b0e.mjs';
import 'clsx';
import { $ as $$Separator, a as $$Title, b as $$LayoutPost } from './blog_366a738a.mjs';
/* empty css                         */
const faqs = [
  {
    question: "¿Qué tipo de juego es Hogwarts Legacy?",
    response: "Hogwarts Legacy es un RPG de acción en un mundo abierto, ambientado en el mundo mágico del siglo XIX, el cual coloca a los jugadores en el centro de sus propias aventuras."
  },
  {
    question: "¿Quién publica Hogwarts Legacy?",
    response: "Warner Bros. Games publica Hogwarts Legacy bajo el sello Portkey Games. El juego fue desarrollado por Avalanche Software."
  },
  {
    question: "¿En qué plataformas estará disponible Hogwarts Legacy?",
    response: "Hogwarts Legacy estará disponible en PlayStation®5, PlayStation®4, PlayStation®4 Pro, Xbox Series X|S, las consolas Xbox One, Nintendo Switch y PC."
  }
];

const $$Astro$1 = createAstro();
const $$FaqItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FaqItem;
  const { item } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="faqItem" data-astro-cid-6rmelcr5> <h3 data-astro-cid-6rmelcr5>${item.question}</h3> <p data-astro-cid-6rmelcr5>${item.response}</p> ${renderComponent($$result, "Separator", $$Separator, { "data-astro-cid-6rmelcr5": true })} </div> `;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/components/FaqItem.astro", void 0);

const $$Astro = createAstro();
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  return renderTemplate`${renderComponent($$result, "LayoutPost", $$LayoutPost, { "title": "faq", "data-astro-cid-6kmwghhu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-6kmwghhu> ${renderComponent($$result2, "Title", $$Title, { "title": "Preguntas frecuentes", "data-astro-cid-6kmwghhu": true })} ${faqs.map((faq) => renderTemplate`${renderComponent($$result2, "FaqItem", $$FaqItem, { "item": faq, "data-astro-cid-6kmwghhu": true })}`)} </section> ` })} `;
}, "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/pages/faq.astro", void 0);

const $$file = "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/pages/faq.astro";
const $$url = "/faq";

export { $$Faq as default, $$file as file, $$url as url };
