"use client";

import { useRouter } from "next/navigation";
import { adminLogout } from "@/app/actions/auth";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await adminLogout();
    router.replace("/admin/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-foreground-muted hover:text-foreground transition-colors px-3 py-2"
    >
      Sign out
    </button>
  );
}
