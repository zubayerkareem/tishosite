import Link from "next/link";
import { createPost } from "@/app/actions/blog";
import { PostForm } from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <>
      <header className="border-b border-border bg-background-elevated px-6 py-4 flex items-center gap-4">
        <Link href="/admin/blog" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
          ← Back
        </Link>
        <h1 className="text-lg font-medium text-foreground">New Post</h1>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-8">
        <PostForm action={createPost} submitLabel="Create post" />
      </main>
    </>
  );
}
