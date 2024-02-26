import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// This will be auto recognized by the middleware
// * Middleware looks for an 'auth' object exported in this file.
// If there is such object, middleware will use it to validate requests (defined by the path below).

// The reason you cannot use auth from the auth.ts is because that auth is after sign in, but there are some
// routes not signed in but still need to be validated by the middleware.
// Thus, only a general auth from auth.config.ts can be used.

// * Note that (unlike other places), the NextAuth is initialled called by the app, since the middleware
// * will auto call it when entering any path defined below.
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
