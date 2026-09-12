import { NextRequest, NextResponse } from "next/server";
import { canonicalInternalPath, localeFromPathname, stripLocalePrefix } from "@/lib/i18n/routing";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.pathname = stripLocalePrefix(pathname);
    return NextResponse.redirect(canonicalUrl, 308);
  }

  const locale = localeFromPathname(pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  const internalPath = canonicalInternalPath(pathname);
  if (internalPath !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = internalPath;
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
