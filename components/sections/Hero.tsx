"use client";

import Link from "next/link";
import {
  ShieldCheck,
  CreditCard,
  CalendarRange,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HERO } from "@/lib/copy";

const iconMap = {
  ShieldCheck,
  CreditCard,
  CalendarRange,
  Clock,
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(195,246,60,0.08), transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-28 sm:py-32 md:py-40">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeUp} className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-1.5 text-xs text-foreground-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              {HERO.eyebrow}
            </div>
          </motion.div>

          {/* Headline — 3xl mobile → 5xl sm → 7xl md+ */}
          <motion.h1
            variants={fadeUp}
            className="text-[2.25rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter font-medium text-foreground mb-5 sm:mb-6 text-balance"
          >
            {HERO.headline}{" "}
            <span className="text-accent">{HERO.headlineAccent}</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-foreground-muted leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto"
          >
            {HERO.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12"
          >
            <Button variant="accent" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="https://dashboard.tishoenterprises.com/">{HERO.primaryCta}</Link>
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/#policies">{HERO.secondaryCta}</Link>
            </Button>
          </motion.div>

          {/* Microcopy — stack on xs, row on sm+ */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5"
          >
            {HERO.microcopy.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <span key={i} className="flex items-center gap-2 text-xs sm:text-sm text-foreground-muted">
                  {i > 0 && (
                    <span className="hidden sm:inline text-foreground-subtle">·</span>
                  )}
                  <Icon size={13} className="text-accent shrink-0" />
                  {item.text}
                </span>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
