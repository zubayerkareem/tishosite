"use client";

import Link from "next/link";
import { CalendarDays, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { BLOG_POSTS } from "@/lib/copy";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 20% 0%, rgba(195,246,60,0.06), transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="max-w-2xl"
          >
            <Eyebrow className="mb-4">Insights</Eyebrow>
            <h1 className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium text-foreground mb-4 sm:mb-5">
              Insights on structured investing.
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Policy deep dives, market context, and platform updates from the Tishoenterprises team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {BLOG_POSTS.map((post) => (
              <motion.article
                key={post.slug}
                variants={fadeUp}
                className="bg-background-elevated border border-border rounded-2xl overflow-hidden hover:border-border-strong transition-colors duration-200 group flex flex-col"
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-video bg-background-subtle border-b border-border flex items-center justify-center shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <span className="text-accent text-xs font-medium uppercase tracking-wider">
                      {post.category.split(" ").map((w: string) => w[0]).join("")}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Category */}
                  <Badge variant="muted" className="mb-4 self-start">
                    {post.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl tracking-tight font-medium text-foreground mb-2 group-hover:text-accent transition-colors flex-1">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-foreground-muted leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-foreground-subtle border-t border-border pt-4">
                    <span className="flex items-center gap-1.5">
                      <User size={11} className="shrink-0" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={11} className="shrink-0" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} className="shrink-0" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
