import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOCKED_COUNTRIES = new Set(["TR"]);

const REDIRECT_HOSTS = new Set([
  "www.goldpumatv.com",
  "platinomstariptv.com",
  "www.platinomstariptv.com",
]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.nextUrl.hostname.toLowerCase();

  /*
   * www ve eski alan adını goldpumatv.com adresine yönlendirir.
   */
  if (REDIRECT_HOSTS.has(hostname)) {
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.protocol = "https:";
    redirectUrl.hostname = "goldpumatv.com";
    redirectUrl.port = "";

    return NextResponse.redirect(redirectUrl, 308);
  }

  /*
   * Engel sayfasının tekrar proxy kontrolüne girmesini önler.
   */
  if (pathname === "/erisim-engellendi") {
    return NextResponse.next();
  }

  const countryCode = request.headers
    .get("x-vercel-ip-country")
    ?.toUpperCase();

  /*
   * Türkiye IP adreslerini engeller.
   */
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