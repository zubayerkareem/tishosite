import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

        {/* Featured image */}
        {post.image_url && (
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-10 border border-border">
            <Image
              src={post.image_url}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}

        {/* HTML content from Tiptap */}
        {post.content ? (
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : (
          <p className="text-foreground-muted">Content coming soon.</p>
        )}
      </div>
    </article>
  );
}
