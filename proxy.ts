import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOCKED_COUNTRIES = new Set(["TR"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Engel sayfasının tekrar işlenmesini önler.
  if (pathname === "/erisim-engellendi") {
    return NextResponse.next();
  }

  const countryCode = request.headers
    .get("x-vercel-ip-country")
    ?.toUpperCase();

  // Türkiye IP adreslerini engeller.
  if (countryCode && BLOCKED_COUNTRIES.has(countryCode)) {
    const blockedUrl = request.nextUrl.clone();

    blockedUrl.pathname = "/erisim-engellendi";
    blockedUrl.search = "";

    const response = NextResponse.rewrite(blockedUrl);

    response.headers.set(
      "X-Robots-Tag",
      "noindex, nofollow, noarchive"
    );

    response.headers.set(
      "Cache-Control",
      "private, no-store, max-age=0"
    );

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|woff|woff2)$).*)",
  ],
};