"use client";

import { deletePost } from "@/app/actions/blog";

export function DeleteButton({ id }: { id: string }) {
  async function handleDelete() {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    await deletePost(id);
  }

  return (
    <button
      onClick={handleDelete}
      className="text-xs text-foreground-subtle hover:text-red-400 transition-colors"
    >
      Delete
    </button>
  );
}
