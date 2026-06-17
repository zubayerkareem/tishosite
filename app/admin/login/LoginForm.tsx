"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { adminLogin } from "@/app/actions/auth";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(adminLogin, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.replace("/admin/blog");
    }
  }, [state, router]);

  return (
    <form
      action={formAction}
      className="bg-background-elevated border border-border rounded-2xl p-6 space-y-4"
    >
      {state?.error && (
        <p className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2.5">
          Incorrect password. Try again.
        </p>
      )}

      <div>
        <label
          htmlFor="password"
          className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
          placeholder="Enter admin password"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-accent text-background font-medium text-sm py-2.5 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in →"}
      </button>
    </form>
  );
}
