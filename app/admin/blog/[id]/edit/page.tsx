import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostByIdAdmin } from "@/lib/blog";
import { updatePost } from "@/app/actions/blog";
import { PostForm } from "@/components/admin/PostForm";

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
        <PostForm
          action={update}
          defaultValues={post}
          submitLabel="Save changes"
        />
      </main>
    </div>
  );
}
