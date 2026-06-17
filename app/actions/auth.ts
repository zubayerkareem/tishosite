"use server";

import { cookies } from "next/headers";

export async function adminLogin(
  _prevState: unknown,
  formData: FormData
): Promise<{ error?: boolean; success?: boolean }> {
  const password = formData.get("password") as string;
  const secret = process.env.ADMIN_SECRET;

  if (!secret || password !== secret) {
    return { error: true };
  }

  const cookieStore = await cookies();
  cookieStore.set("admin_token", secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return { success: true };
}

export async function adminLogout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("admin_token");
}
