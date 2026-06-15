"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { BLOG_POSTS } from "@/lib/copy";

const CATEGORIES = ["All", "Policy Structure", "Market Notes", "Platform Updates"];

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
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

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
              Policy deep dives, market context, and platform updates from the Tisho team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section className="pb-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  "rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
                  activeCategory === cat
                    ? "bg-accent text-background"
                    : "border border-border-strong text-foreground-muted hover:border-accent hover:text-accent",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                variants={fadeUp}
                className="bg-background-elevated border border-border rounded-2xl overflow-hidden hover:border-border-strong transition-colors duration-200 group"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-background-subtle border-b border-border flex items-center justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <span className="text-accent text-xs font-medium">
                      {post.category.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <Badge variant="muted" className="mb-4">
                    {post.category}
                  </Badge>

                  <h3 className="text-xl tracking-tight font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-sm text-foreground-muted leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-foreground-subtle">
                    <span className="flex items-center gap-1.5">
                      <User size={12} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={12} />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-foreground-muted py-16">
              No posts in this category yet.
            </p>
          )}

          {/* Pagination placeholder */}
          <div className="flex justify-center gap-2 mt-16">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={[
                  "min-w-[44px] h-11 px-3 rounded-full text-sm font-medium transition-colors",
                  page === 1
                    ? "bg-accent text-background"
                    : "border border-border-strong text-foreground-muted hover:border-accent hover:text-accent",
                ].join(" ")}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


