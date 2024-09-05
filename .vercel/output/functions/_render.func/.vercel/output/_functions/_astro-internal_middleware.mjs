import { l as lucia } from './chunks/auth_BAcYzUV8.mjs';
import { verifyRequestOrigin } from 'lucia';
import { d as defineMiddleware, s as sequence } from './chunks/index_DKokyAeP.mjs';
import 'es-module-lexer';
import './chunks/shared_B3r-NsDT.mjs';
import 'cookie';

const onRequest$1 = defineMiddleware(async (context, next) => {
  if (context.request.method !== "GET") {
    const originHeader = context.request.headers.get("Origin");
    const hostHeader = context.request.headers.get("Host");
    if (!originHeader || !hostHeader || !verifyRequestOrigin(originHeader, [hostHeader])) {
      return new Response(null, {
        status: 403
      });
    }
  }
  const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) {
    context.locals.user = null;
    context.locals.session = null;
    return next();
  }
  const { session, user } = await lucia.validateSession(sessionId);
  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  }
  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie();
    context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  }
  context.locals.session = session;
  context.locals.user = user;
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
