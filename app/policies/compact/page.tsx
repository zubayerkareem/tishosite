"use client";

import Link from "next/link";
import {
  CalendarDays,
  CalendarRange,
  Calendar,
  CalendarCheck,
  Check,
  X,
  ShieldCheck,
  LayoutDashboard,
  ArrowRight,
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
import { COMPACT_POLICY } from "@/lib/copy";
import { cn } from "@/lib/utils";

const cadenceIconMap = {
  CalendarDays,
  CalendarRange,
  Calendar,
  CalendarCheck,
};

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
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 60% 0%, rgba(195,246,60,0.09), transparent 55%)",
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
            <Badge variant="muted">{COMPACT_POLICY.badge}</Badge>
            <Eyebrow>{COMPACT_POLICY.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter font-medium text-foreground mb-5 sm:mb-6"
          >
            {COMPACT_POLICY.heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-10 max-w-2xl"
          >
            {COMPACT_POLICY.subhead}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="accent" size="lg" asChild>
              <Link href="https://dashboard.tishoenterprises.com/">{COMPACT_POLICY.primaryCta}</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/policies/comprehensive">{COMPACT_POLICY.secondaryCta}</Link>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
          >
            {COMPACT_POLICY.stats.map((stat, i) => (
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
  const { howItWorks } = COMPACT_POLICY;
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
                {/* Connector line */}
                {i < howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border z-0 -translate-y-1/2" />
                )}
                <div className="bg-background-elevated border border-border rounded-2xl p-6 relative z-10 hover:border-border-strong transition-colors h-full">
                  <span className="text-3xl sm:text-4xl font-medium text-accent/30 tracking-tighter mb-4 block">
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

// ─── Cadences ───────────────────────────────────────────────────────────────
function Cadences() {
  const { cadences } = COMPACT_POLICY;
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="max-w-2xl mb-4">
            <SectionHeader
              eyebrow={cadences.eyebrow}
              title={cadences.heading}
              description={cadences.description}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {cadences.options.map((opt, i) => {
              const Icon =
                cadenceIconMap[opt.icon as keyof typeof cadenceIconMap];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "rounded-2xl p-6 border transition-colors duration-200",
                    opt.highlight
                      ? "bg-accent/5 border-accent/30 hover:border-accent/50 p-5 sm:p-6"
                      : "bg-background-elevated border-border hover:border-border-strong"
                  )}
                >
                  {opt.highlight && (
                    <span className="inline-block text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full px-2 py-0.5 mb-4">
                      Most popular
                    </span>
                  )}
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {opt.label}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {opt.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Tier Table ─────────────────────────────────────────────────────────────
function TierBreakdown() {
  const { tiers } = COMPACT_POLICY;
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
                    {["Tier", "Capital Range", "Target Annual Return", "Typically Suits"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium"
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
                      <td className="px-6 py-4">
                        <span className="text-2xl font-medium text-accent">
                          <AnimatedNumber target={row.rate} inView={inView} />
                        </span>
                        <span className="text-sm text-accent/70">% p.a.</span>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-foreground-muted">
                        {row.suitable}
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
  const { forWho } = COMPACT_POLICY;
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
              className="bg-background-elevated border border-border rounded-2xl p-6 md:p-8"
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

// ─── Early Exit ─────────────────────────────────────────────────────────────
function EarlyExit() {
  const { earlyExit } = COMPACT_POLICY;
  return (
    <section className="py-16 bg-background-subtle border-y border-border">
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
  const { dashboard } = COMPACT_POLICY;
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
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
                <Link href="https://dashboard.tishoenterprises.com/" className="flex items-center gap-2">
                  <LayoutDashboard size={15} />
                  Access your dashboard after onboarding
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/10 blur-3xl -z-10 rounded-3xl" />
            <div className="bg-background-elevated border border-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-foreground-subtle mb-1 uppercase tracking-widest">Compact Policy</p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 border border-accent/30 px-3 py-1 text-xs font-medium text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Active — Monthly cadence
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Next payout", value: "Jul 1", sub: "18 days away" },
                  { label: "Accrued this period", value: "£116", sub: "of £140 expected" },
                ].map((s, i) => (
                  <div key={i} className="bg-background rounded-xl p-3">
                    <p className="text-xs text-foreground-subtle mb-1">{s.label}</p>
                    <p className="text-xl font-medium text-foreground">{s.value}</p>
                    <p className="text-xs text-accent">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="bg-background rounded-xl p-4">
                <div className="flex justify-between text-xs text-foreground-subtle mb-2">
                  <span>Term progress</span>
                  <span>Month 5 of 24</span>
                </div>
                <div className="h-1.5 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: "20.8%" }}
                  />
                </div>
              </div>

              {/* Payout history */}
              <div>
                <p className="text-xs text-foreground-subtle uppercase tracking-widest mb-3">Payout history</p>
                {[
                  { label: "May payout", amount: "+£140.00", date: "Jun 1" },
                  { label: "Apr payout", amount: "+£140.00", date: "May 1" },
                  { label: "Mar payout", amount: "+£140.00", date: "Apr 1" },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="text-xs font-medium text-foreground">{tx.label}</p>
                      <p className="text-xs text-foreground-subtle">{tx.date}</p>
                    </div>
                    <p className="text-xs font-medium text-accent">{tx.amount}</p>
                  </div>
                ))}
              </div>
            </div>
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
              title="Compact Policy — common questions."
              align="center"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <Accordion type="single" collapsible>
              {COMPACT_POLICY.faq.map((item, i) => (
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
            <Badge variant="muted" className="mb-6">Compact Policy</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[1.875rem] sm:text-4xl md:text-5xl tracking-tighter font-medium text-foreground mb-4 sm:mb-5"
          >
            Start earning on a schedule{" "}
            <span className="text-accent">you set.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-foreground-muted leading-relaxed mb-10">
            Apply today. Verify in 48 hours. Your first payout arrives on the
            schedule you choose.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link href="https://dashboard.tishoenterprises.com/">
                <ShieldCheck size={16} />
                {COMPACT_POLICY.primaryCta}
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/policies/comprehensive" className="flex items-center gap-2">
                Compare with Comprehensive
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
export default function CompactPolicyPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Cadences />
      <TierBreakdown />
      <ForWho />
      <EarlyExit />
      <DashboardFeatures />
      <PolicyFAQ />
      <PolicyCTA />
    </>
  );
}

