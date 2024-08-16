import authConfig from "@/lib/auth/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  apiClientPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import NextAuth from "next-auth";
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isClientRoute = nextUrl.pathname.startsWith(apiClientPrefix);

  if (isApiAuthRoute) {
    return;
  }

  if (isClientRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/sign-in", nextUrl));
  }

  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// Test avec routing i18n
// import {
//   DEFAULT_LOGIN_REDIRECT,
//   apiAuthPrefix,
//   apiClientPrefix,
//   authRoutes,
//   publicRoutes,
// } from "@/routes";
// import { getToken } from "next-auth/jwt";
// import createMiddleware from "next-intl/middleware";
// import { NextRequest, NextResponse } from "next/server";

// // Configure next-intl middleware
// const intlMiddleware = createMiddleware({
//   locales: ["fr", "en"],
//   defaultLocale: "fr",
// });

// export async function middleware(req: NextRequest) {
//   const { nextUrl } = req;

//   // Use next-auth to get the JWT token
//   const token = await getToken({
//     req,
//     secret: process.env.AUTH_SECRET as string,
//     salt: "",
//   });
//   const isLoggedIn = !!token;

//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname);
//   const isClientRoute = nextUrl.pathname.startsWith(apiClientPrefix);

//   // Apply next-intl middleware for all requests
//   const intlResponse = intlMiddleware(req);
//   if (intlResponse) return intlResponse;

//   // Handle authentication logic
//   if (isApiAuthRoute || isClientRoute) {
//     return NextResponse.next();
//   }

//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
//     }
//     return NextResponse.next();
//   }

//   if (!isLoggedIn && !isPublicRoute) {
//     return NextResponse.redirect(new URL("/sign-in", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)", "/(fr|en)/:path*"],
// };
