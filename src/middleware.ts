import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  // Extract the subdomain by removing the base domain
  const subdomain = hostname
    .replace(`.${process.env.NEXT_PUBLIC_DOMAIN}`, "")
    .replace("www.", ""); // Remove 'www.' if present

  if (subdomain === "painify") {
    url.pathname = `/works/painify${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (subdomain == "valomusic") {
    url.pathname = `/works/valomusic${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
