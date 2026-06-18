"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Eyebrow } from "@/components/shared/Eyebrow";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const policies = [
  {
    badge: "Compact",
    badgeVariant: "muted" as const,
    href: "/policies/compact",
    eyebrow: "Regular Income",
    title: "Compact Policy",
    tagline: "Predictable returns. Paid on your schedule.",
    description:
      "Choose your payout cadence — monthly, quarterly, or bi-annual. Returns are distributed on the schedule you select throughout the 24-month term. Best for investors who want structured cashflow from their capital.",
    features: [
      "3 payout cadences to choose from",
      "Returns distributed throughout the term",
      "6% – 10% target annual return (by tier)",
      "24-month fixed term",
      "Early clearance available",
    ],
    stat: { label: "Target return (Tier 2)", value: "7% p.a." },
    accent: false,
    cta: "Explore Compact Policy",
  },
  {
    badge: "Comprehensive",
    badgeVariant: "accent" as const,
    href: "/policies/comprehensive",
    eyebrow: "Long-Term Growth",
    title: "Comprehensive Policy",
    tagline: "Build capital. Collect everything at maturity.",
    description:
      "Returns accrue throughout the 24-month term and are paid out in full at maturity — alongside your original principal. Higher target rates than the Compact Policy, designed for investors who don't need interim cashflow.",
    features: [
      "Returns accrue across the full 24-month term",
      "Principal + all returns paid at maturity",
      "10% – 25% target annual return (by tier)",
      "24-month fixed term",
      "Early clearance available",
    ],
    stat: { label: "Target return (Tier 2)", value: "12% p.a." },
    accent: true,
    cta: "Explore Comprehensive Policy",
  },
];

const comparison = [
  { label: "Term", compact: "24 months", comprehensive: "24 months" },
  { label: "Payout structure", compact: "Periodic (4 options)", comprehensive: "Single at maturity" },
  { label: "Target return, Tier 2", compact: "7% p.a.", comprehensive: "12% p.a." },
  { label: "Target return, Tier 5", compact: "10% p.a.", comprehensive: "25% p.a." },
  { label: "Best for", compact: "Income & cashflow", comprehensive: "Capital growth" },
  { label: "Early clearance", compact: "✓ Available", comprehensive: "✓ Available" },
  { label: "Multi-policy", compact: "✓ Yes", comprehensive: "✓ Yes" },
  { label: "Investor dashboard", compact: "✓ Full access", comprehensive: "✓ Full access" },
];

export default function PoliciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(195,246,60,0.08), transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow className="mb-4">Investment Policies</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter font-medium text-foreground mb-5 sm:mb-6"
            >
              One platform.{" "}
              <span className="text-accent">Two ways to invest.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              Both policies run on a fixed 24-month structured term. The difference
              is when and how you get paid. Choose the structure that fits your goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Policy cards */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {policies.map((policy, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl border p-6 md:p-8 lg:p-10 flex flex-col hover:border-border-strong transition-colors duration-200 ${
                  policy.accent
                    ? "bg-background-elevated border-accent/30"
                    : "bg-background-elevated border-border"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <Badge variant={policy.badgeVariant}>{policy.badge}</Badge>
                  <Eyebrow>{policy.eyebrow}</Eyebrow>
                </div>

                <h2 className="text-3xl md:text-4xl tracking-tight font-medium text-foreground mb-2">
                  {policy.title}
                </h2>
                <p className="text-accent text-sm font-medium mb-5">{policy.tagline}</p>
                <p className="text-base text-foreground-muted leading-relaxed mb-6">
                  {policy.description}
                </p>

                {/* Key stat */}
                <div className="bg-background rounded-xl p-4 mb-6">
                  <p className="text-xs text-foreground-subtle uppercase tracking-[0.15em] mb-1">
                    {policy.stat.label}
                  </p>
                  <p className="text-3xl font-medium text-accent">{policy.stat.value}</p>
                </div>

                <Separator className="mb-6" />

                <ul className="space-y-3 mb-8 flex-1">
                  {policy.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={15} className="text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={policy.accent ? "accent" : "ghost"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link href={policy.href} className="flex items-center justify-center gap-2">
                    {policy.cta}
                    <ArrowRight size={15} />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 md:py-32 bg-background-subtle border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-xl mb-12">
              <Eyebrow className="mb-4">Side by Side</Eyebrow>
              <h2 className="text-4xl md:text-5xl tracking-tight font-medium text-foreground">
                Policy comparison.
              </h2>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-background-elevated">
                      <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium w-1/3">Feature</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium">Compact</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs uppercase tracking-[0.15em] text-accent font-medium">Comprehensive</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, i) => (
                      <tr key={i} className="border-b border-border last:border-0 hover:bg-background-elevated/50 transition-colors">
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-foreground-subtle">{row.label}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-foreground-muted">{row.compact}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-foreground font-medium">{row.comprehensive}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-foreground-subtle italic">
                Target returns are projected, not guaranteed. All investments carry risk. Full terms in your investor agreement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-2xl mx-auto"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-5">
              Not sure which fits?
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl tracking-tight font-medium text-foreground mb-5">
              Talk to investor relations.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-foreground-muted mb-10">
              We'll walk you through which policy structure aligns with your goals
              and answer any questions before you apply.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link href="https://dashboard.tishoenterprises.com/">Get in Touch</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

