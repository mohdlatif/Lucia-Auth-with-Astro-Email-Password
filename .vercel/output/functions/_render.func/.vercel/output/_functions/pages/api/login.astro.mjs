import { d as db, l as lucia } from '../../chunks/auth_BAcYzUV8.mjs';
import { verify } from '@node-rs/argon2';
export { renderers } from '../../renderers.mjs';

async function POST(context) {
  const formData = await context.request.formData();
  const username = formData.get("username");
  if (typeof username !== "string" || username.length < 3 || username.length > 31 || !/^[a-z0-9_-]+$/.test(username)) {
    return new Response(JSON.stringify({ error: "Invalid username" }), {
      status: 400
    });
  }
  const password = formData.get("password");
  if (typeof password !== "string" || password.length < 6 || password.length > 255) {
    return new Response(JSON.stringify({ error: "Invalid password" }), {
      status: 400
    });
  }
  const existingUser = db.prepare("SELECT * FROM user WHERE username = ?").get(username);
  if (!existingUser) {
    return new Response(
      JSON.stringify({
        error: "Incorrect username or password"
      }),
      {
        status: 400
      }
    );
  }
  const validPassword = await verify(existingUser.password_hash, password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1
  });
  if (!validPassword) {
    return new Response(
      JSON.stringify({
        error: "Incorrect username or password"
      }),
      {
        status: 400
      }
    );
  }
  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return new Response();
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
