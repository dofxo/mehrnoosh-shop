import { NextRequest, NextResponse } from "next/server";

const locales = ["fa", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/")) return;


  // Check if a supported locale is already in the pathname.
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return;
  }

  // Get the language cookie from the request.
  const languageCookie = request.cookies.get("language")?.value;
  const locale = locales.includes(languageCookie ?? "") ? languageCookie : "fa";

  // Redirect to the URL with the locale prefix.
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
