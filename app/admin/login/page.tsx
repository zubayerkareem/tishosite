import { LoginForm } from "./LoginForm";

export default function AdminLoginPage() {
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

        <LoginForm />
      </div>
    </div>
  );
}
