"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/shared/Eyebrow";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function BlogPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(195,246,60,0.07), transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-xl mx-auto"
        >
          {/* Icon */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <BookOpen size={24} className="text-accent" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-4">Insights</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl tracking-tighter font-medium text-foreground mb-5"
          >
            Coming <span className="text-accent">Soon.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-10"
          >
            We&rsquo;re putting together articles on structured investing, policy deep dives,
            and market context from the Tisho team. Check back shortly.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft size={15} />
                Back to home
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
