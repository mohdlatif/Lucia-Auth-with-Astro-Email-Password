import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as createAstro } from '../chunks/astro/server_DxYiuSdc.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const user = Astro2.locals.user;
  if (!user) {
    return Astro2.redirect("/login");
  }
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Lucia example</title>${renderHead()}</head> <body> <h1>Hi, ${user.username}!</h1> <p>Your user ID is ${user.id}.</p> <form method="post" action="/api/logout"> <button>Sign out</button> </form> </body></html>`;
}, "C:/Users/l3x0o/Desktop/examples/astro/username-and-password/src/pages/index.astro", void 0);

const $$file = "C:/Users/l3x0o/Desktop/examples/astro/username-and-password/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
