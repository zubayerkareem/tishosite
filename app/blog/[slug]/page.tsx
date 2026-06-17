import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, User, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderContent(content: string) {
  return content
    .split(/\n\n+/)
    .filter(Boolean)
    .map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-2xl font-medium text-foreground tracking-tight mt-10 mb-4"
          >
            {block.slice(3)}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3
            key={i}
            className="text-xl font-medium text-foreground tracking-tight mt-8 mb-3"
          >
            {block.slice(4)}
          </h3>
        );
      }
      if (block.startsWith("- ") || block.startsWith("* ")) {
        const items = block.split("\n").filter(Boolean);
        return (
          <ul key={i} className="list-disc list-inside space-y-1.5 text-foreground-muted text-base leading-relaxed my-4">
            {items.map((item, j) => (
              <li key={j}>{item.replace(/^[-*]\s/, "")}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="text-base text-foreground-muted leading-relaxed my-4">
          {block}
        </p>
      );
    });
}

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Tishoenterprises`,
    description: post.excerpt ?? undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          All posts
        </Link>

        {/* Meta */}
        <Badge variant="muted" className="mb-5">
          {post.category ?? "Blog"}
        </Badge>

        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter font-medium text-foreground leading-[1.1] mb-6">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-lg text-foreground-muted leading-relaxed mb-8">
            {post.excerpt}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-foreground-subtle pb-8 border-b border-border mb-10">
          <span className="flex items-center gap-1.5">
            <User size={12} />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays size={12} />
            {formatDate(post.date)}
          </span>
          {post.read_time && (
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.read_time}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="prose-container">
          {post.content ? renderContent(post.content) : (
            <p className="text-foreground-muted">Content coming soon.</p>
          )}
        </div>
      </div>
    </article>
  );
}
