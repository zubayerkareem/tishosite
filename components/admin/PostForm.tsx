"use client";

import { useState } from "react";
import Link from "next/link";
import { RichEditor } from "./RichEditor";
import { ImageUpload } from "./ImageUpload";
import type { BlogPost } from "@/lib/blog";

const CATEGORIES = [
  "Policy Structure",
  "Market Notes",
  "Platform Updates",
  "Investor Stories",
  "Company News",
];

interface PostFormProps {
  action: (formData: FormData) => void | Promise<void>;
  defaultValues?: Partial<BlogPost>;
  submitLabel?: string;
}

export function PostForm({
  action,
  defaultValues,
  submitLabel = "Create post",
}: PostFormProps) {
  const [content, setContent] = useState(defaultValues?.content ?? "");
  const [imageUrl, setImageUrl] = useState(defaultValues?.image_url ?? "");

  return (
    <form action={action} className="space-y-6">
      {/* Hidden fields synced from rich components */}
      <input type="hidden" name="content" value={content} readOnly />
      <input type="hidden" name="image_url" value={imageUrl} readOnly />

      {/* Featured Image */}
      <div>
        <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
          Featured Image
        </label>
        <ImageUpload
          defaultUrl={defaultValues?.image_url ?? undefined}
          onChange={setImageUrl}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Title */}
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
            Title *
          </label>
          <input
            name="title"
            type="text"
            required
            defaultValue={defaultValues?.title ?? ""}
            className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
            placeholder="Post title"
          />
        </div>

        {/* Slug */}
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
            defaultValue={defaultValues?.slug ?? ""}
            className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
            placeholder="my-post-slug"
          />
        </div>

        {/* Excerpt */}
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            rows={2}
            defaultValue={defaultValues?.excerpt ?? ""}
            className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent resize-none"
            placeholder="Short summary shown on the blog listing page"
          />
        </div>

        {/* Rich text content */}
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
            Content
          </label>
          <RichEditor
            defaultValue={defaultValues?.content ?? ""}
            onChange={setContent}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
            Category
          </label>
          <select
            name="category"
            defaultValue={defaultValues?.category ?? ""}
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

        {/* Author */}
        <div>
          <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
            Author
          </label>
          <input
            name="author"
            type="text"
            defaultValue={defaultValues?.author ?? "Tisho Editorial"}
            className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
            Date *
          </label>
          <input
            name="date"
            type="date"
            required
            defaultValue={
              defaultValues?.date ?? new Date().toISOString().split("T")[0]
            }
            className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
          />
        </div>

        {/* Read time */}
        <div>
          <label className="block text-xs uppercase tracking-[0.12em] text-foreground-subtle mb-2">
            Read time
          </label>
          <input
            name="read_time"
            type="text"
            defaultValue={defaultValues?.read_time ?? ""}
            placeholder="5 min read"
            className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            name="published"
            value="true"
            defaultChecked={defaultValues?.published ?? false}
            className="w-4 h-4 accent-[#C3F63C] cursor-pointer"
          />
          <span className="text-sm text-foreground-muted">
            {submitLabel === "Create post" ? "Publish immediately" : "Published"}
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
            {submitLabel}
          </button>
        </div>
      </div>
    </form>
  );
}
