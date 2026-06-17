import { adminLogin } from "@/app/actions/auth";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-medium text-foreground tracking-tight">
            Admin
          </h1>
          <p className="text-sm text-foreground-muted mt-1">
            Tishoenterprises blog management
          </p>
        </div>

        <form
          action={adminLogin}
          className="bg-background-elevated border border-border rounded-2xl p-6 space-y-4"
        >
          {error && (
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
            className="w-full bg-accent text-background font-medium text-sm py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Sign in →
          </button>
        </form>
      </div>
    </div>
  );
}
