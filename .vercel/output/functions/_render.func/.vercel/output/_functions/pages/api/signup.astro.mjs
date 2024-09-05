import { d as db, l as lucia } from '../../chunks/auth_BAcYzUV8.mjs';
import { generateId } from 'lucia';
import { hash } from '@node-rs/argon2';
import { SqliteError } from 'better-sqlite3';
export { renderers } from '../../renderers.mjs';

async function POST(context) {
  const formData = await context.request.formData();
  const username = formData.get("username");
  if (typeof username !== "string" || username.length < 3 || username.length > 31 || !/^[a-z0-9_-]+$/.test(username)) {
    return new Response(
      JSON.stringify({
        error: "Invalid username"
      }),
      {
        status: 400
      }
    );
  }
  const password = formData.get("password");
  if (typeof password !== "string" || password.length < 6 || password.length > 255) {
    return new Response(
      JSON.stringify({
        error: "Invalid password"
      }),
      {
        status: 400
      }
    );
  }
  const passwordHash = await hash(password, {
    // recommended minimum parameters
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    salt: Buffer.from("Salt123456", "utf-8"),
    parallelism: 1
  });
  const userId = generateId(15);
  try {
    db.prepare("INSERT INTO user (id, username, password_hash) VALUES(?, ?, ?)").run(
      userId,
      username,
      passwordHash
    );
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return new Response();
  } catch (e) {
    if (e instanceof SqliteError && e.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return new Response(
        JSON.stringify({
          error: "Username already used"
        }),
        {
          status: 400
        }
      );
    }
    return new Response(
      JSON.stringify({
        error: "An unknown error occurred"
      }),
      {
        status: 500
      }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
