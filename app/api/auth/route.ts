import { NextRequest, NextResponse } from "next/server";

const PASSWORD = "demo26";
const COOKIE = "demo_auth";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password === PASSWORD) {
    const response = NextResponse.json({ ok: true });
    response.cookies.set(COOKIE, PASSWORD, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}
