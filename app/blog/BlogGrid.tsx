"use client";

import Link from "next/link";
import { CalendarDays, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-foreground-muted text-center py-16">
        No posts published yet. Check back soon.
      </p>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.07 } } }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {posts.map((post) => (
        <motion.article
          key={post.id}
          variants={fadeUp}
          className="bg-background-elevated border border-border rounded-2xl overflow-hidden hover:border-border-strong transition-colors duration-200 group flex flex-col"
        >
          {/* Thumbnail */}
          <div className="aspect-video bg-background-subtle border-b border-border flex items-center justify-center shrink-0">
            {post.image_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-accent text-xs font-medium uppercase tracking-wider">
                  {(post.category ?? "BL")
                    .split(" ")
                    .map((w: string) => w[0])
                    .join("")}
                </span>
              </div>
            )}
          </div>

          <div className="p-6 flex flex-col flex-1">
            <Badge variant="muted" className="mb-4 self-start">
              {post.category ?? "Blog"}
            </Badge>

            <h3 className="text-lg sm:text-xl tracking-tight font-medium text-foreground mb-2 group-hover:text-accent transition-colors flex-1">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>

            {post.excerpt && (
              <p className="text-sm text-foreground-muted leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-foreground-subtle border-t border-border pt-4">
              <span className="flex items-center gap-1.5">
                <User size={11} className="shrink-0" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays size={11} className="shrink-0" />
                {formatDate(post.date)}
              </span>
              {post.read_time && (
                <span className="flex items-center gap-1.5">
                  <Clock size={11} className="shrink-0" />
                  {post.read_time}
                </span>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
