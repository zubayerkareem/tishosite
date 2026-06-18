"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileText, Mail, Users, LogOut, CheckCircle2 } from "lucide-react";
import { adminLogout } from "@/app/actions/auth";
import { togglePublish, deletePost } from "@/app/actions/blog";
import { markContactRead } from "@/app/actions/contact";
import type { BlogPost } from "@/lib/blog";
import type { ContactSubmission } from "@/lib/contacts";
import type { NewsletterSubscriber } from "@/lib/newsletter";

type Tab = "blog" | "contacts" | "newsletter";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* ── Blog tab ── */
function BlogTab({ posts }: { posts: BlogPost[] }) {
  async function handleToggle(id: string, published: boolean) {
    await togglePublish(id, published);
  }
  async function handleDelete(id: string) {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    await deletePost(id);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="text-xs text-foreground-subtle">
          {posts.length} posts &middot; {posts.filter((p) => p.published).length} published
        </p>
        <Link
          href="/admin/blog/new"
          className="bg-accent text-background text-sm font-medium px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
        >
          + New post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-foreground-muted text-sm py-16">No posts yet.</p>
      ) : (
        <div className="rounded-2xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-background-subtle">
                <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium">Title</th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium hidden md:table-cell">Category</th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium hidden md:table-cell">Date</th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-background-subtle/50 transition-colors">
                  <td className="px-5 py-3.5 text-foreground font-medium max-w-[200px] truncate">{post.title}</td>
                  <td className="px-5 py-3.5 text-foreground-muted hidden md:table-cell">{post.category ?? "—"}</td>
                  <td className="px-5 py-3.5 text-foreground-muted hidden md:table-cell">{post.date}</td>
                  <td className="px-5 py-3.5">
                    <button
                      onClick={() => handleToggle(post.id, post.published)}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium cursor-pointer transition-colors ${
                        post.published
                          ? "bg-accent/15 text-accent hover:bg-accent/25"
                          : "bg-border text-foreground-muted hover:bg-border-strong"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3 justify-end">
                      <Link href={`/admin/blog/${post.id}/edit`} className="text-xs text-foreground-muted hover:text-foreground transition-colors">
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-xs text-foreground-subtle hover:text-red-400 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ── Contacts tab ── */
function ContactsTab({ contacts }: { contacts: ContactSubmission[] }) {
  const unread = contacts.filter((c) => !c.read).length;

  async function handleToggleRead(id: string, read: boolean) {
    await markContactRead(id, read);
  }

  return (
    <div>
      <p className="text-xs text-foreground-subtle mb-5">
        {contacts.length} requests &middot; {unread} unread
      </p>

      {contacts.length === 0 ? (
        <p className="text-center text-foreground-muted text-sm py-16">No contact requests yet.</p>
      ) : (
        <div className="space-y-3">
          {contacts.map((c) => (
            <div
              key={c.id}
              className={`rounded-2xl border p-5 transition-colors ${
                c.read ? "border-border bg-background-elevated/50" : "border-accent/30 bg-background-elevated"
              }`}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-start gap-3">
                  {!c.read && <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />}
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.name}</p>
                    <a href={`mailto:${c.email}`} className="text-xs text-accent hover:underline">{c.email}</a>
                    {c.investment_range && (
                      <span className="ml-3 text-xs text-foreground-subtle bg-background-subtle px-2 py-0.5 rounded-full">
                        {c.investment_range}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-foreground-subtle">{formatDate(c.created_at)}</span>
                  <button
                    onClick={() => handleToggleRead(c.id, c.read)}
                    className="text-xs text-foreground-subtle hover:text-foreground transition-colors px-2.5 py-1 rounded-lg border border-border hover:border-border-strong"
                  >
                    {c.read ? "Mark unread" : "Mark read"}
                  </button>
                </div>
              </div>
              {c.message && (
                <p className="mt-3 text-sm text-foreground-muted leading-relaxed border-t border-border pt-3 ml-5">
                  {c.message}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Newsletter tab ── */
function NewsletterTab({ subscribers }: { subscribers: NewsletterSubscriber[] }) {
  const active = subscribers.filter((s) => s.active).length;

  return (
    <div>
      <p className="text-xs text-foreground-subtle mb-5">
        {active} active &middot; {subscribers.length} total
      </p>

      {subscribers.length === 0 ? (
        <p className="text-center text-foreground-muted text-sm py-16">No subscribers yet.</p>
      ) : (
        <div className="rounded-2xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-background-subtle">
                <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium">Email</th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium hidden sm:table-cell">Signed up</th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {subscribers.map((s) => (
                <tr key={s.id} className="hover:bg-background-subtle/50 transition-colors">
                  <td className="px-5 py-3.5 text-foreground">{s.email}</td>
                  <td className="px-5 py-3.5 text-foreground-muted hidden sm:table-cell">{formatDate(s.created_at)}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      s.active ? "bg-accent/15 text-accent" : "bg-border text-foreground-muted"
                    }`}>
                      {s.active ? "Active" : "Unsubscribed"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ── Main panel ── */
const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "blog", label: "Blog Posts", icon: FileText },
  { id: "contacts", label: "Contacts", icon: Mail },
  { id: "newsletter", label: "Newsletter", icon: Users },
];

interface AdminPanelProps {
  posts: BlogPost[];
  contacts: ContactSubmission[];
  subscribers: NewsletterSubscriber[];
  unreadContacts: number;
}

export function AdminPanel({ posts, contacts, subscribers, unreadContacts }: AdminPanelProps) {
  const [tab, setTab] = useState<Tab>("blog");
  const router = useRouter();

  async function handleLogout() {
    await adminLogout();
    router.replace("/admin/login");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border bg-background-elevated px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-accent" />
          <span className="text-sm font-medium text-foreground">Admin Panel</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors"
        >
          <LogOut size={14} />
          Sign out
        </button>
      </header>

      {/* Tab bar */}
      <div className="border-b border-border bg-background-elevated px-6">
        <div className="flex items-center gap-1">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm border-b-2 transition-colors relative ${
                tab === id
                  ? "border-accent text-accent font-medium"
                  : "border-transparent text-foreground-muted hover:text-foreground"
              }`}
            >
              <Icon size={14} />
              {label}
              {id === "contacts" && unreadContacts > 0 && (
                <span className="bg-accent text-background text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                  {unreadContacts}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {tab === "blog" && <BlogTab posts={posts} />}
        {tab === "contacts" && <ContactsTab contacts={contacts} />}
        {tab === "newsletter" && <NewsletterTab subscribers={subscribers} />}
      </main>
    </div>
  );
}
