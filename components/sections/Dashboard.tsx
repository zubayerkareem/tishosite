"use client";

import Link from "next/link";
import { Check, TrendingUp, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { DASHBOARD } from "@/lib/copy";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-accent/15 blur-3xl -z-10 rounded-3xl" />

      <div className="bg-background-elevated border border-border rounded-2xl p-5 sm:p-6 space-y-4 sm:space-y-5">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-foreground-subtle uppercase tracking-widest mb-1">
              Policy Status
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 border border-accent/30 px-3 py-1 text-xs font-medium text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Active &mdash; Compact Policy
            </span>
          </div>
          <TrendingUp size={18} className="text-accent" />
        </div>

        {/* Stats row — 2 cols on mobile, 3 on sm+ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Accrued Return", value: "€1,240", sub: "+7% annually" },
            { label: "Next Payout", value: "Jul 1", sub: "18 days" },
            { label: "Days to Maturity", value: "312", sub: "of 730 total" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-background rounded-xl p-3 ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <p className="text-xs text-foreground-subtle mb-1 leading-tight">{stat.label}</p>
              <p className="text-base sm:text-lg font-medium text-foreground">{stat.value}</p>
              <p className="text-xs text-accent">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div className="bg-background rounded-xl p-3 sm:p-4">
          <p className="text-xs text-foreground-subtle mb-3">Return trajectory</p>
          <svg viewBox="0 0 200 60" className="w-full h-10 sm:h-12" aria-hidden="true">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C3F63C" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#C3F63C" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 55 C20 50, 40 45, 60 40 C80 35, 100 30, 120 22 C140 14, 160 10, 200 5"
              fill="none"
              stroke="#C3F63C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M0 55 C20 50, 40 45, 60 40 C80 35, 100 30, 120 22 C140 14, 160 10, 200 5 L200 60 L0 60 Z"
              fill="url(#chartGrad)"
            />
          </svg>
        </div>

        {/* Transactions */}
        <div>
          <p className="text-xs text-foreground-subtle uppercase tracking-widest mb-3">
            Recent
          </p>
          {[
            { label: "Q1 Payout", amount: "+€310.00", date: "Apr 1", incoming: true },
            { label: "Initial Investment", amount: "−€20,000", date: "Jan 15", incoming: false },
          ].map((tx, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 border-b border-border last:border-0"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center ${
                    tx.incoming ? "bg-accent/10" : "bg-border"
                  }`}
                >
                  {tx.incoming ? (
                    <ArrowDownLeft size={12} className="text-accent" />
                  ) : (
                    <ArrowUpRight size={12} className="text-foreground-subtle" />
                  )}
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">{tx.label}</p>
                  <p className="text-xs text-foreground-subtle">{tx.date}</p>
                </div>
              </div>
              <p className={`text-xs font-medium ${tx.incoming ? "text-accent" : "text-foreground-muted"}`}>
                {tx.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DashboardSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                eyebrow={DASHBOARD.eyebrow}
                title={DASHBOARD.heading}
                description={DASHBOARD.intro}
              />
            </motion.div>
            <motion.ul variants={fadeUp} className="mt-6 space-y-3">
              {DASHBOARD.questions.map((q, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={15} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground-muted">{q}</span>
                </li>
              ))}
            </motion.ul>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-foreground-muted">
              {DASHBOARD.closing}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Button variant="accent" asChild>
                <Link href="/contact-us">{DASHBOARD.cta}</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
