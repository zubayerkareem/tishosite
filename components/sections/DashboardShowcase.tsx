"use client";

import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const features = [
  {
    id: "payment-history",
    icon: TrendingUp,
    label: "Payment History",
    title: "Every transaction. Complete clarity.",
    description:
      "View all investments and received payments in one filterable table. Export to CSV any time. Both Compact and Comprehensive policy entries shown together — fully searchable by date, type, and status.",
    stat: "£66,506+ invested across active policies",
    image: "/dashboard/payment-history.png",
    imageAlt: "Tisho dashboard — Payment History page showing investment entries",
  },
  {
    id: "refer-earn",
    icon: Users,
    label: "Refer & Earn",
    title: "Earn £100 for every investor you refer.",
    description:
      "Share your unique referral link via WhatsApp, email, or any channel. When a friend signs up and makes their first investment, £100 is credited to your balance — instantly, with no cap on how many friends you can refer.",
    stat: "Flat £100 per successful referral, no limit",
    image: "/dashboard/refer-earn.png",
    imageAlt: "Tisho dashboard — Refer & Earn page with referral link and history",
  },
  {
    id: "withdrawals",
    icon: ArrowUpRight,
    label: "Withdrawals",
    title: "Request withdrawals in seconds.",
    description:
      "Submit a withdrawal request directly from your dashboard. Choose your registered payout method, add a reason, and track each request from pending through to approved — with full timestamp history.",
    stat: "Requests reviewed and resolved within 24–48 hours",
    image: "/dashboard/withdrawals.png",
    imageAlt: "Tisho dashboard — Withdrawals page showing resolved withdrawal request",
  },
  {
    id: "support",
    icon: MessageCircle,
    label: "Support",
    title: "Talk directly to the Tisho team.",
    description:
      "Open a support thread any time. Each conversation is tracked — messages, timestamps, and resolution status — so nothing gets lost. Our investor relations team responds to every thread personally.",
    stat: "Open, resolved, and tracked — no email chains",
    image: "/dashboard/support.png",
    imageAlt: "Tisho dashboard — Support page showing threaded conversation",
  },
];

export function DashboardShowcase() {
  const [active, setActive] = useState(0);
  const current = features[active];

  return (
    <section className="py-24 md:py-32 bg-background-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-2xl mb-14"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-4">Investor Dashboard</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[1.875rem] sm:text-4xl md:text-5xl tracking-tighter font-medium text-foreground mb-4"
          >
            Your portfolio, fully in your hands.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-foreground-muted leading-relaxed">
            Every investor gets a private dashboard from day one. Track returns,
            manage payouts, refer friends, and contact our team — all from one place.
          </motion.p>
        </motion.div>

        {/* Main layout: tabs left, screenshot right */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12 items-start">

          {/* Feature tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0"
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <button
                  key={f.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 shrink-0 lg:shrink",
                    "border",
                    active === i
                      ? "bg-background border-accent/40 text-foreground"
                      : "bg-transparent border-transparent text-foreground-muted hover:bg-background hover:border-border hover:text-foreground"
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                      active === i ? "bg-accent/15 text-accent" : "bg-background-elevated text-foreground-subtle"
                    )}
                  >
                    <Icon size={15} />
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">{f.label}</span>
                  {active === i && (
                    <div className="hidden lg:block ml-auto w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Right column: screenshot + description */}
          <div className="flex flex-col gap-6">

            {/* Browser-framed screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/30"
            >
              {/* Browser chrome */}
              <div className="bg-background-elevated border-b border-border px-4 py-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-border" />
                  <div className="w-3 h-3 rounded-full bg-border" />
                  <div className="w-3 h-3 rounded-full bg-border" />
                </div>
                <div className="flex-1 bg-background rounded-md px-3 py-1 text-xs text-foreground-subtle font-mono">
                  dashboard.tishoenterprises.com
                </div>
              </div>

              {/* Screenshot with animated swap */}
              <div className="relative w-full aspect-[16/8.5] bg-background overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 1.01 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.35, ease }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={current.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 75vw"
                      priority={active === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Feature description card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-desc"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease }}
                className="bg-background-elevated border border-border rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="flex-1">
                  <p className="text-base font-medium text-foreground mb-2">{current.title}</p>
                  <p className="text-sm text-foreground-muted leading-relaxed">{current.description}</p>
                </div>
                <div className="shrink-0 bg-background rounded-xl px-4 py-3 text-center min-w-[160px]">
                  <p className="text-xs text-foreground-subtle mb-1 leading-tight">{current.label}</p>
                  <p className="text-xs font-medium text-accent leading-snug">{current.stat}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-border"
        >
          <p className="text-sm text-foreground-muted max-w-md">
            Dashboard access is activated the moment your investment is confirmed.
            No setup, no waiting.
          </p>
          <Button variant="accent" asChild>
            <Link href="https://dashboard.tishoenterprises.com/">
              Access Your Dashboard
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
