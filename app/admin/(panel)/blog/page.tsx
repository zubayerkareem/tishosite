import Link from "next/link";
import { getAllPostsAdmin } from "@/lib/blog";
import { togglePublish } from "@/app/actions/blog";
import { DeleteButton } from "./DeleteButton";

export default async function AdminBlogPage() {
  const posts = await getAllPostsAdmin();

  return (
    <>
      <header className="border-b border-border bg-background-elevated px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-medium text-foreground">Blog Posts</h1>
          <p className="text-xs text-foreground-muted mt-0.5">
            {posts.length} total &middot;{" "}
            {posts.filter((p) => p.published).length} published
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="bg-accent text-background text-sm font-medium px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
        >
          + New post
        </Link>
      </header>

      <main className="px-6 py-8">
        {posts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-foreground-muted text-sm mb-4">No posts yet.</p>
            <Link href="/admin/blog/new" className="text-accent text-sm hover:underline">
              Create your first post →
            </Link>
          </div>
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
                {posts.map((post) => {
                  async function handleToggle() {
                    "use server";
                    await togglePublish(post.id, post.published);
                  }
                  return (
                    <tr key={post.id} className="hover:bg-background-subtle/50 transition-colors">
                      <td className="px-5 py-4 text-foreground font-medium max-w-xs truncate">{post.title}</td>
                      <td className="px-5 py-4 text-foreground-muted hidden md:table-cell">{post.category ?? "—"}</td>
                      <td className="px-5 py-4 text-foreground-muted hidden md:table-cell">{post.date}</td>
                      <td className="px-5 py-4">
                        <form action={handleToggle}>
                          <button type="submit" className={`text-xs px-2.5 py-1 rounded-full font-medium cursor-pointer transition-colors ${
                            post.published
                              ? "bg-accent/15 text-accent hover:bg-accent/25"
                              : "bg-border text-foreground-muted hover:bg-border-strong"
                          }`}>
                            {post.published ? "Published" : "Draft"}
                          </button>
                        </form>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3 justify-end">
                          <Link href={`/admin/blog/${post.id}/edit`} className="text-xs text-foreground-muted hover:text-foreground transition-colors">
                            Edit
                          </Link>
                          <DeleteButton id={post.id} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
}
