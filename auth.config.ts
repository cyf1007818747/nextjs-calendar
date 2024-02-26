import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    // This overrides the login page only.
    // Other pages are not overridden. Defauls pages (defined by next.js) are:
    // pages: {
    //   signIn: '/auth/signin',
    //   signOut: '/auth/signout',
    //   error: '/auth/error',
    //   verifyRequest: '/auth/verify-request',
    //   newUser: '/auth/new-user'
    // }
    signIn: "/login",
  },
  callbacks: {
    // This function only requires auth for dashboard routes
    // This defines the authorization rule for middleware
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
