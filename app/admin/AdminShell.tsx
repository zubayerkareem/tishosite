"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileText, Mail, Users, LogOut, LayoutDashboard, ChevronLeft, ChevronRight } from "lucide-react";
import { adminLogout } from "@/app/actions/auth";
import { togglePublish, deletePost } from "@/app/actions/blog";
import { markContactRead } from "@/app/actions/contact";
import type { Paginated, BlogPost } from "@/lib/blog";
import type { ContactSubmission } from "@/lib/contacts";
import type { NewsletterSubscriber } from "@/lib/newsletter";

type Tab = "blog" | "contacts" | "newsletter";

const PAGE_SIZE = 10;

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/* ── Pagination ── */
function Pagination({ tab, page, total }: { tab: Tab; page: number; total: number }) {
  const totalPages = Math.ceil(total / PAGE_SIZE);
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
      <p className="text-xs text-foreground-subtle">
        Page {page} of {totalPages} &middot; {total} total
      </p>
      <div className="flex items-center gap-2">
        {page > 1 ? (
          <Link
            href={`/admin?tab=${tab}&page=${page - 1}`}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-border text-foreground-muted hover:text-foreground hover:border-border-strong transition-colors"
          >
            <ChevronLeft size={12} /> Prev
          </Link>
        ) : (
          <span className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-border text-foreground-subtle opacity-40 cursor-not-allowed">
            <ChevronLeft size={12} /> Prev
          </span>
        )}

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
            .reduce<(number | "...")[]>((acc, p, i, arr) => {
              if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("...");
              acc.push(p);
              return acc;
            }, [])
            .map((p, i) =>
              p === "..." ? (
                <span key={`ellipsis-${i}`} className="text-xs px-1 text-foreground-subtle">…</span>
              ) : (
                <Link
                  key={p}
                  href={`/admin?tab=${tab}&page=${p}`}
                  className={`text-xs w-7 h-7 flex items-center justify-center rounded-lg transition-colors ${
                    p === page
                      ? "bg-accent text-background font-medium"
                      : "border border-border text-foreground-muted hover:text-foreground hover:border-border-strong"
                  }`}
                >
                  {p}
                </Link>
              )
            )}
        </div>

        {page < totalPages ? (
          <Link
            href={`/admin?tab=${tab}&page=${page + 1}`}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-border text-foreground-muted hover:text-foreground hover:border-border-strong transition-colors"
          >
            Next <ChevronRight size={12} />
          </Link>
        ) : (
          <span className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-border text-foreground-subtle opacity-40 cursor-not-allowed">
            Next <ChevronRight size={12} />
          </span>
        )}
      </div>
    </div>
  );
}

/* ── Blog tab ── */
function BlogTab({ posts, tab, page }: { posts: Paginated<BlogPost>; tab: Tab; page: number }) {
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
        <h2 className="text-base font-semibold text-foreground">Blog Posts</h2>
        <Link
          href="/admin/blog/new"
          className="bg-accent text-background text-sm font-medium px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
        >
          + New post
        </Link>
      </div>

      {posts.data.length === 0 ? (
        <div className="text-center py-20 text-foreground-muted text-sm">No posts yet.</div>
      ) : (
        <>
          <div className="rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-background-subtle">
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium">Title</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium hidden lg:table-cell">Category</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium hidden md:table-cell">Date</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium">Status</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {posts.data.map((post) => (
                  <tr key={post.id} className="hover:bg-background-subtle/50 transition-colors">
                    <td className="px-5 py-3.5 text-foreground font-medium max-w-[220px] truncate">{post.title}</td>
                    <td className="px-5 py-3.5 text-foreground-muted hidden lg:table-cell">{post.category ?? "—"}</td>
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
          <Pagination tab={tab} page={page} total={posts.total} />
        </>
      )}
    </div>
  );
}

/* ── Contacts tab ── */
function ContactsTab({ contacts, tab, page }: { contacts: Paginated<ContactSubmission>; tab: Tab; page: number }) {
  async function handleToggleRead(id: string, read: boolean) {
    await markContactRead(id, read);
  }

  return (
    <div>
      <h2 className="text-base font-semibold text-foreground mb-5">Contact Requests</h2>

      {contacts.data.length === 0 ? (
        <div className="text-center py-20 text-foreground-muted text-sm">No contact requests yet.</div>
      ) : (
        <>
          <div className="space-y-3">
            {contacts.data.map((c) => (
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
          <Pagination tab={tab} page={page} total={contacts.total} />
        </>
      )}
    </div>
  );
}

/* ── Newsletter tab ── */
function NewsletterTab({ newsletter, tab, page }: { newsletter: Paginated<NewsletterSubscriber>; tab: Tab; page: number }) {
  return (
    <div>
      <h2 className="text-base font-semibold text-foreground mb-5">Newsletter Subscribers</h2>

      {newsletter.data.length === 0 ? (
        <div className="text-center py-20 text-foreground-muted text-sm">No subscribers yet.</div>
      ) : (
        <>
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
                {newsletter.data.map((s) => (
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
          <Pagination tab={tab} page={page} total={newsletter.total} />
        </>
      )}
    </div>
  );
}

/* ── Shell ── */
interface AdminShellProps {
  tab: Tab;
  page: number;
  posts: Paginated<BlogPost>;
  contacts: Paginated<ContactSubmission>;
  newsletter: Paginated<NewsletterSubscriber>;
  unreadContacts: number;
}

const NAV: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "blog", label: "Blog Posts", icon: FileText },
  { id: "contacts", label: "Contacts", icon: Mail },
  { id: "newsletter", label: "Newsletter", icon: Users },
];

export function AdminShell({ tab, page, posts, contacts, newsletter, unreadContacts }: AdminShellProps) {
  const router = useRouter();

  async function handleLogout() {
    await adminLogout();
    router.replace("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 flex flex-col border-r border-border bg-background-elevated">
        {/* Brand */}
        <div className="px-5 py-5 border-b border-border">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <LayoutDashboard size={14} className="text-background" />
            </div>
            <span className="text-sm font-semibold text-foreground">Admin Panel</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {NAV.map(({ id, label, icon: Icon }) => (
            <Link
              key={id}
              href={`/admin?tab=${id}&page=1`}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors ${
                tab === id
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-foreground-muted hover:text-foreground hover:bg-background-subtle"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Icon size={15} />
                {label}
              </span>
              {id === "contacts" && unreadContacts > 0 && (
                <span className="bg-accent text-background text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none min-w-[18px] text-center">
                  {unreadContacts}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Sign out */}
        <div className="px-3 py-4 border-t border-border">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-sm text-foreground-muted hover:text-foreground hover:bg-background-subtle transition-colors"
          >
            <LogOut size={15} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="border-b border-border px-8 py-4 bg-background-elevated shrink-0">
          <h1 className="text-sm text-foreground-subtle">
            {tab === "blog" && `Blog Posts${posts.total > 0 ? ` · ${posts.total} total` : ""}`}
            {tab === "contacts" && `Contact Requests${contacts.total > 0 ? ` · ${contacts.total} total` : ""}`}
            {tab === "newsletter" && `Newsletter${newsletter.total > 0 ? ` · ${newsletter.total} subscribers` : ""}`}
          </h1>
        </header>

        <main className="flex-1 px-8 py-7 overflow-auto">
          {tab === "blog" && <BlogTab posts={posts} tab={tab} page={page} />}
          {tab === "contacts" && <ContactsTab contacts={contacts} tab={tab} page={page} />}
          {tab === "newsletter" && <NewsletterTab newsletter={newsletter} tab={tab} page={page} />}
        </main>
      </div>
    </div>
  );
}
