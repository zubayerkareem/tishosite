"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FileText, Mail, Users, LogOut } from "lucide-react";
import { adminLogout } from "@/app/actions/auth";

const navItems = [
  { href: "/admin/blog", label: "Blog Posts", icon: FileText },
  { href: "/admin/contacts", label: "Contact Requests", icon: Mail },
  { href: "/admin/newsletter", label: "Newsletter", icon: Users },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await adminLogout();
    router.replace("/admin/login");
  }

  return (
    <aside className="w-56 shrink-0 min-h-screen bg-background-elevated border-r border-border flex flex-col">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-border">
        <Image
          src="/TISHO ENTERPRISES LOGO/svg side white.svg"
          alt="Tishoenterprises"
          width={100}
          height={26}
          className="h-6 w-auto"
        />
        <p className="text-[10px] text-foreground-subtle mt-1.5 uppercase tracking-[0.12em]">
          Admin
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-foreground-muted hover:text-foreground hover:bg-background-subtle"
              }`}
            >
              <Icon size={15} className="shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Sign out */}
      <div className="px-3 py-4 border-t border-border">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground-subtle hover:text-foreground transition-colors w-full"
        >
          <LogOut size={15} className="shrink-0" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
