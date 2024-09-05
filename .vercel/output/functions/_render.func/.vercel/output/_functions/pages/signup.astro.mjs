import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as createAstro } from '../chunks/astro/server_DxYiuSdc.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Lucia example</title>${renderHead()}</head> <body> <h1>Create an account</h1> <form method="post" action="/api/signup"> <label for="username">Username</label> <input name="username" id="username"><br> <label for="password">Password</label> <input type="password" name="password" id="password"><br> <button>Continue</button> <p id="form-error"></p> </form> <a href="/login">Sign in</a> </body></html>`;
}, "C:/Users/l3x0o/Desktop/examples/astro/username-and-password/src/pages/signup.astro", void 0);

const $$file = "C:/Users/l3x0o/Desktop/examples/astro/username-and-password/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Signup,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
