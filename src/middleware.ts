import { NextRequest, NextResponse } from "next/server";

const locales = ["fa", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = pathname.split("/")[1];
  const pathnameHasLocale = locales.includes(pathLocale);

  if (pathnameHasLocale) {
    const response = NextResponse.next();
    response.cookies.set("language", pathLocale);
    return response;
  }

  if (pathLocale?.startsWith(".well-known")) {
    return NextResponse.next();
  }

  const languageCookie = request.cookies.get("language")?.value;
  const locale = locales.includes(languageCookie ?? "") ? languageCookie! : "fa";
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
  const response = NextResponse.redirect(redirectUrl);
  response.cookies.set("language", locale);


  return response;
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico|.well-known).*)"],
};
