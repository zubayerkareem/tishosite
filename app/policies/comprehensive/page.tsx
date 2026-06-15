"use client";

import Link from "next/link";
import {
  Check,
  X,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COMPREHENSIVE_POLICY } from "@/lib/copy";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function AnimatedNumber({ target, inView }: { target: number; inView: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 900;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <>{val}</>;
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Stronger gradient for comprehensive */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 40% 0%, rgba(195,246,60,0.11), transparent 55%), radial-gradient(circle at 90% 60%, rgba(195,246,60,0.05), transparent 40%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <Badge variant="accent">{COMPREHENSIVE_POLICY.badge}</Badge>
            <Eyebrow>{COMPREHENSIVE_POLICY.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter font-medium text-foreground mb-5 sm:mb-6"
          >
            {COMPREHENSIVE_POLICY.heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-10 max-w-2xl"
          >
            {COMPREHENSIVE_POLICY.subhead}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact-us">{COMPREHENSIVE_POLICY.primaryCta}</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/policies/compact">{COMPREHENSIVE_POLICY.secondaryCta}</Link>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
          >
            {COMPREHENSIVE_POLICY.stats.map((stat, i) => (
              <div key={i} className="bg-background-elevated px-4 sm:px-6 py-4 sm:py-5">
                <p className="text-xs text-foreground-subtle uppercase tracking-[0.15em] mb-2">
                  {stat.label}
                </p>
                <p className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-base text-accent ml-1">{stat.unit}</span>
                  )}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── How It Works ───────────────────────────────────────────────────────────
function HowItWorks() {
  const { howItWorks } = COMPREHENSIVE_POLICY;
  return (
    <section className="py-24 md:py-32 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="max-w-2xl mb-16">
            <SectionHeader
              eyebrow={howItWorks.eyebrow}
              title={howItWorks.heading}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="relative">
                {i < howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border z-0 -translate-y-1/2" />
                )}
                <div className="bg-background-elevated border border-border rounded-2xl p-5 sm:p-6 relative z-10 hover:border-border-strong transition-colors h-full">
                  <span className="text-4xl font-medium text-accent/30 tracking-tighter mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-base font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Accrual Timeline ───────────────────────────────────────────────────────
function AccrualTimeline() {
  const { accrual } = COMPREHENSIVE_POLICY;
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="max-w-2xl mb-14">
            <SectionHeader
              eyebrow={accrual.eyebrow}
              title={accrual.heading}
              description={accrual.description}
            />
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl">
            {/* Track */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <motion.div className="space-y-0">
              {accrual.illustration.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative flex items-start gap-8 pb-0"
                >
                  {/* Node */}
                  <div
                    className={cn(
                      "relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                      item.accent
                        ? "border-accent bg-accent/10"
                        : "border-border bg-background-elevated"
                    )}
                  >
                    {item.accent ? (
                      <TrendingUp size={16} className="text-accent" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-border-strong" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={cn(
                      "flex-1 pb-10 border-b border-border last:border-0",
                      item.accent && "pb-0 border-0"
                    )}
                  >
                    <p
                      className={cn(
                        "text-xs uppercase tracking-[0.15em] font-medium mb-1",
                        item.accent ? "text-accent" : "text-foreground-subtle"
                      )}
                    >
                      {item.month}
                    </p>
                    <p
                      className={cn(
                        "text-base leading-relaxed",
                        item.accent
                          ? "font-medium text-foreground"
                          : "text-foreground-muted"
                      )}
                    >
                      {item.event}
                    </p>
                    {item.accent && (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-4 py-2 text-sm text-accent font-medium">
                        <TrendingUp size={14} />
                        Principal + all accrued returns paid out
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Tier Table with Compact comparison ─────────────────────────────────────
function TierBreakdown() {
  const { tiers } = COMPREHENSIVE_POLICY;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="max-w-2xl mb-12">
            <SectionHeader
              eyebrow={tiers.eyebrow}
              title={tiers.heading}
              description={tiers.description}
            />
          </motion.div>

          <motion.div variants={fadeUp} ref={ref}>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-background-elevated">
                    {["Tier", "Capital Range", "Compact Return", "Comprehensive Return", "Uplift"].map(
                      (h, i) => (
                        <th
                          key={h}
                          className={cn(
                            "px-6 py-4 text-left text-xs uppercase tracking-[0.15em] font-medium",
                            i === 3 ? "text-accent" : "text-foreground-subtle"
                          )}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {tiers.rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border last:border-0 hover:bg-background-elevated/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-accent/10 to-transparent text-accent border border-accent/20">
                          {row.tier}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-foreground-muted">
                        {row.capital}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-foreground-subtle">
                        {row.compact}%
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-2xl font-medium text-accent">
                          <AnimatedNumber target={row.rate} inView={inView} />
                        </span>
                        <span className="text-sm text-accent/70">% p.a.</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium px-2 py-0.5">
                          {row.uplift}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-foreground-subtle italic">
              Target returns are projected, not guaranteed. All investments carry risk. Final terms confirmed in your investor agreement.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── For Who ────────────────────────────────────────────────────────────────
function ForWho() {
  const { forWho } = COMPREHENSIVE_POLICY;
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="max-w-xl mb-14">
            <SectionHeader eyebrow={forWho.eyebrow} title={forWho.heading} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Fits */}
            <motion.div
              variants={fadeUp}
              className="bg-background-elevated border border-accent/20 rounded-2xl p-6 md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-accent font-medium mb-5">
                Good fit
              </p>
              <ul className="space-y-3">
                {forWho.fits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-accent" />
                    </span>
                    <span className="text-sm text-foreground-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Doesn't fit */}
            <motion.div
              variants={fadeUp}
              className="bg-background-elevated border border-border rounded-2xl p-6 md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium mb-5">
                May not be the right fit
              </p>
              <ul className="space-y-3 mb-8">
                {forWho.doesntFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-border flex items-center justify-center shrink-0 mt-0.5">
                      <X size={11} className="text-foreground-subtle" />
                    </span>
                    <span className="text-sm text-foreground-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <Separator className="mb-6" />
              <p className="text-xs text-foreground-subtle mb-3">
                Consider instead:
              </p>
              <Button variant="ghost" size="sm" asChild>
                <Link href={forWho.alternativeHref} className="flex items-center gap-2">
                  {forWho.alternative}
                  <ArrowRight size={14} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Side-by-side comparison ─────────────────────────────────────────────────
function Comparison() {
  const { comparison } = COMPREHENSIVE_POLICY;
  return (
    <section className="py-24 md:py-32 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="max-w-2xl mb-12">
            <SectionHeader
              eyebrow={comparison.eyebrow}
              title={comparison.heading}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-background-elevated">
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium w-1/3">
                      Feature
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium">
                      Compact
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs uppercase tracking-[0.15em] text-accent font-medium">
                      Comprehensive
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border last:border-0 hover:bg-background-elevated/50 transition-colors"
                    >
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-foreground-subtle">
                        {row.label}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-foreground-muted">
                        {row.compact}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-foreground font-medium">
                        {row.comprehensive}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Early Exit ─────────────────────────────────────────────────────────────
function EarlyExit() {
  const { earlyExit } = COMPREHENSIVE_POLICY;
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-3">{earlyExit.eyebrow}</Eyebrow>
            <h2 className="text-2xl md:text-3xl tracking-tight font-medium text-foreground mb-4">
              {earlyExit.heading}
            </h2>
            <p className="text-base text-foreground-muted leading-relaxed">
              {earlyExit.body}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Dashboard ──────────────────────────────────────────────────────────────
function DashboardFeatures() {
  const { dashboard } = COMPREHENSIVE_POLICY;
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Mockup — left on comprehensive */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-accent/12 blur-3xl -z-10 rounded-3xl" />
            <div className="bg-background-elevated border border-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-foreground-subtle mb-1 uppercase tracking-widest">Comprehensive Policy</p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 border border-accent/30 px-3 py-1 text-xs font-medium text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Active — Accruing
                  </span>
                </div>
                <TrendingUp size={18} className="text-accent" />
              </div>

              {/* Projected payout */}
              <div className="bg-background rounded-xl p-4 border border-accent/20">
                <p className="text-xs text-foreground-subtle mb-1">Projected maturity payout</p>
                <p className="text-3xl font-medium text-foreground">€24,800</p>
                <p className="text-xs text-accent mt-1">€20,000 principal + €4,800 accrued returns</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Accrued to date", value: "€2,400", sub: "Month 12 of 24" },
                  { label: "Days to maturity", value: "364", sub: "Exact: Jun 14 2026" },
                ].map((s, i) => (
                  <div key={i} className="bg-background rounded-xl p-3">
                    <p className="text-xs text-foreground-subtle mb-1">{s.label}</p>
                    <p className="text-xl font-medium text-foreground">{s.value}</p>
                    <p className="text-xs text-accent">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* Accrual chart */}
              <div className="bg-background rounded-xl p-4">
                <div className="flex justify-between text-xs text-foreground-subtle mb-3">
                  <span>Accrual trajectory</span>
                  <span>On track</span>
                </div>
                <svg viewBox="0 0 240 64" className="w-full h-14" aria-hidden="true">
                  <defs>
                    <linearGradient id="compGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C3F63C" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#C3F63C" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Past (solid) */}
                  <path
                    d="M0 60 C30 58, 60 52, 120 40"
                    fill="none"
                    stroke="#C3F63C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Future (dashed) */}
                  <path
                    d="M120 40 C160 28, 200 14, 240 4"
                    fill="none"
                    stroke="#C3F63C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                    opacity="0.5"
                  />
                  {/* Fill */}
                  <path
                    d="M0 60 C30 58, 60 52, 120 40 C160 28, 200 14, 240 4 L240 64 L0 64 Z"
                    fill="url(#compGrad)"
                  />
                  {/* Midpoint dot */}
                  <circle cx="120" cy="40" r="4" fill="#C3F63C" />
                  <circle cx="120" cy="40" r="7" fill="#C3F63C" opacity="0.2" />
                </svg>
                <div className="flex justify-between text-xs text-foreground-subtle mt-1">
                  <span>Month 0</span>
                  <span className="text-accent font-medium">Now (Month 12)</span>
                  <span>Month 24</span>
                </div>
              </div>

              {/* Term progress */}
              <div className="bg-background rounded-xl p-3">
                <div className="flex justify-between text-xs text-foreground-subtle mb-2">
                  <span>Term progress</span>
                  <span>50% complete</span>
                </div>
                <div className="h-1.5 rounded-full bg-border overflow-hidden">
                  <div className="h-full rounded-full bg-accent" style={{ width: "50%" }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                eyebrow={dashboard.eyebrow}
                title={dashboard.heading}
              />
            </motion.div>
            <motion.ul variants={fadeUp} className="mt-8 space-y-4">
              {dashboard.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={15} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground-muted">{f}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="mt-8">
              <Button variant="ghost" asChild>
                <Link href="/contact-us" className="flex items-center gap-2">
                  <LayoutDashboard size={15} />
                  Access your dashboard after onboarding
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────────────────
function PolicyFAQ() {
  return (
    <section className="py-24 md:py-32 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <SectionHeader
              eyebrow="FAQ"
              title="Comprehensive Policy — common questions."
              align="center"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <Accordion type="single" collapsible>
              {COMPREHENSIVE_POLICY.faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Final CTA ──────────────────────────────────────────────────────────────
function PolicyCTA() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="accent" className="mb-6">Comprehensive Policy</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[1.875rem] sm:text-4xl md:text-5xl tracking-tighter font-medium text-foreground mb-4 sm:mb-5"
          >
            Put your capital to work.{" "}
            <span className="text-accent">Collect everything at maturity.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-foreground-muted leading-relaxed mb-10">
            Apply today. Verify in 48 hours. Watch your accrued returns build
            from day one — paid out in full at month 24.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact-us">
                <ShieldCheck size={16} />
                {COMPREHENSIVE_POLICY.primaryCta}
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/policies/compact" className="flex items-center gap-2">
                Compare with Compact
                <ArrowRight size={15} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function ComprehensivePolicyPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <AccrualTimeline />
      <TierBreakdown />
      <ForWho />
      <Comparison />
      <EarlyExit />
      <DashboardFeatures />
      <PolicyFAQ />
      <PolicyCTA />
    </>
  );
}

