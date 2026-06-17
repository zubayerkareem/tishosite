import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const action = formData.get("_action") as string;

  if (action === "logout") {
    const response = NextResponse.redirect(new URL("/admin/login", request.url));
    response.cookies.delete("admin_token");
    return response;
  }

  // Login
  const password = formData.get("password") as string;
  const secret = process.env.ADMIN_SECRET;

  if (!secret || password !== secret) {
    return NextResponse.redirect(
      new URL("/admin/login?error=1", request.url)
    );
  }

  const response = NextResponse.redirect(new URL("/admin/blog", request.url));
  response.cookies.set("admin_token", secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  return response;
}
