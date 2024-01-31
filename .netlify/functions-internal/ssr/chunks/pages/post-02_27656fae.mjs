import { f as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro_e3fc0b0e.mjs';
import 'clsx';
import { b as $$LayoutPost } from './blog_366a738a.mjs';

const html = "<h1 id=\"nuevo-juego-de-harry-potter-en-desarrollo\">Nuevo juego de Harry Potter en desarrollo</h1>\n<p>Warner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores.</p>\n<p>El juego se ambientará en el siglo XIX, mucho antes de los eventos de la serie de libros de Harry Potter. Los jugadores podrán crear su propio personaje y asistir a clases de magia en Hogwarts, aprender nuevos hechizos y enfrentarse a criaturas mágicas peligrosas.</p>\n<p>El juego está siendo desarrollado por Avalanche Software, el estudio detrás de títulos como Disney Infinity y Cars 3: Driven to Win. Aún no se ha anunciado una fecha de lanzamiento oficial, pero se espera que salga a la venta en algún momento de los próximos años.</p>\n<p>Los fans de Harry Potter han mostrado una gran emoción ante el anuncio de este nuevo juego, y muchos están ansiosos por explorar el mundo mágico de Hogwarts en una experiencia de juego completamente nueva.</p>";

				const frontmatter = {"layout":"../../layouts/LayoutPost.astro","title":"Un nuevo elemento para jugar","author":"Marcos Rivas","description":"Warner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores. ","image":{"url":"/assets/image-post-02.jpg","alt":"The word “astro” against an illustration of planets and stars."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["harry","news"]};
				const file = "/Users/millerossasamboni/Downloads/Programacion/Astro/harry-potter/src/pages/post/post-02.md";
				const url = "/post/post-02";
				function rawContent() {
					return "\n# Nuevo juego de Harry Potter en desarrollo\n\nWarner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores.\n\nEl juego se ambientará en el siglo XIX, mucho antes de los eventos de la serie de libros de Harry Potter. Los jugadores podrán crear su propio personaje y asistir a clases de magia en Hogwarts, aprender nuevos hechizos y enfrentarse a criaturas mágicas peligrosas.\n\nEl juego está siendo desarrollado por Avalanche Software, el estudio detrás de títulos como Disney Infinity y Cars 3: Driven to Win. Aún no se ha anunciado una fecha de lanzamiento oficial, pero se espera que salga a la venta en algún momento de los próximos años.\n\nLos fans de Harry Potter han mostrado una gran emoción ante el anuncio de este nuevo juego, y muchos están ansiosos por explorar el mundo mágico de Hogwarts en una experiencia de juego completamente nueva.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"nuevo-juego-de-harry-potter-en-desarrollo","text":"Nuevo juego de Harry Potter en desarrollo"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$LayoutPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
