import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostByIdAdmin } from "@/lib/blog";
import { updatePost } from "@/app/actions/blog";

const CATEGORIES = [
  "Policy Structure",
  "Market Notes",
  "Platform Updates",
  "Investor Stories",
  "Company News",
];

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostByIdAdmin(id);

  if (!post) notFound();

  const update = updatePost.bind(null, id);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background-elevated px-6 py-4 flex items-center gap-4">
        <Link
          href="/admin/blog"
          className="text-sm text-foreground-muted hover:text-foreground transition-colors"
        >
          ← Back
        </Link>
        <h1 className="text-lg font-medium text-foreground">Edit Post</h1>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <form action={update} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Title *
              </label>
              <input
                name="title"
                type="text"
                required
                defaultValue={post.title}
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Slug
              </label>
              <input
                name="slug"
                type="text"
                defaultValue={post.slug}
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Excerpt
              </label>
              <textarea
                name="excerpt"
                rows={2}
                defaultValue={post.excerpt ?? ""}
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Content
              </label>
              <textarea
                name="content"
                rows={16}
                defaultValue={post.content ?? ""}
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent resize-y font-mono"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Category
              </label>
              <select
                name="category"
                defaultValue={post.category ?? ""}
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              >
                <option value="">Select category</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Author
              </label>
              <input
                name="author"
                type="text"
                defaultValue={post.author}
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Date *
              </label>
              <input
                name="date"
                type="date"
                required
                defaultValue={post.date}
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Read time
              </label>
              <input
                name="read_time"
                type="text"
                defaultValue={post.read_time ?? ""}
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Cover image URL
              </label>
              <input
                name="image_url"
                type="url"
                defaultValue={post.image_url ?? ""}
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name="published"
                value="true"
                defaultChecked={post.published}
                className="w-4 h-4 accent-[#C3F63C] cursor-pointer"
              />
              <span className="text-sm text-foreground-muted">Published</span>
            </label>

            <div className="flex items-center gap-3">
              <Link
                href="/admin/blog"
                className="text-sm text-foreground-muted hover:text-foreground transition-colors px-4 py-2"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="bg-accent text-background text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
              >
                Save changes
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
