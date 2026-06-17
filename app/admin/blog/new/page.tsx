import Link from "next/link";
import { createPost } from "@/app/actions/blog";

const CATEGORIES = [
  "Policy Structure",
  "Market Notes",
  "Platform Updates",
  "Investor Stories",
  "Company News",
];

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background-elevated px-6 py-4 flex items-center gap-4">
        <Link
          href="/admin/blog"
          className="text-sm text-foreground-muted hover:text-foreground transition-colors"
        >
          ← Back
        </Link>
        <h1 className="text-lg font-medium text-foreground">New Post</h1>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <form action={createPost} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Title *
              </label>
              <input
                name="title"
                type="text"
                required
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                placeholder="Post title"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Slug{" "}
                <span className="normal-case text-foreground-subtle/70">
                  (auto-generated from title if blank)
                </span>
              </label>
              <input
                name="slug"
                type="text"
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                placeholder="my-post-slug"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Excerpt
              </label>
              <textarea
                name="excerpt"
                rows={2}
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent resize-none"
                placeholder="Short summary shown on the blog listing page"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Content
              </label>
              <textarea
                name="content"
                rows={16}
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent resize-y font-mono"
                placeholder="Write post content here. Separate paragraphs with a blank line."
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Category
              </label>
              <select
                name="category"
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
                defaultValue="Tisho Editorial"
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
                defaultValue={new Date().toISOString().split("T")[0]}
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
                placeholder="5 min read"
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
                Cover image URL{" "}
                <span className="normal-case text-foreground-subtle/70">
                  (optional)
                </span>
              </label>
              <input
                name="image_url"
                type="url"
                className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name="published"
                value="true"
                className="w-4 h-4 accent-[#C3F63C] cursor-pointer"
              />
              <span className="text-sm text-foreground-muted">
                Publish immediately
              </span>
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
                Create post
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
