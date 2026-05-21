import { NextRequest, NextResponse } from "next/server";

const COOKIE = "demo_auth";
const PASSWORD = "demo26";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/login" || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  if (request.cookies.get(COOKIE)?.value === PASSWORD) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.webp|.*\\.ico|_headers|robots\\.txt|sitemap\\.xml|llms\\.txt).*)"],
};
