import { NextResponse } from "next/server";

const locales = ["en", "fr", "es", "de", "zh", "hi", "ar", "bn", "ru", "pt"];
const defaultLocale = "en";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|medbookie-logo.png).*)"],
};