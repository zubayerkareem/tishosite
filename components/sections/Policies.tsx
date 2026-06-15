"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { POLICIES } from "@/lib/copy";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Policies() {
  return (
    <section id="policies" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center mb-16">
            <SectionHeader
              eyebrow={POLICIES.eyebrow}
              title={
                <>
                  {POLICIES.heading}{" "}
                  <span className="text-foreground-muted">{POLICIES.subheading}</span>
                </>
              }
              description={POLICIES.intro}
              align="center"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {POLICIES.items.map((policy, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "bg-background-elevated border rounded-2xl p-6 md:p-8 flex flex-col transition-colors duration-200 hover:border-border-strong",
                  policy.accent
                    ? "border-accent/30"
                    : "border-border"
                )}
              >
                <div className="flex items-center justify-between mb-6">
                  <Badge variant={policy.badgeVariant}>{policy.badge}</Badge>
                </div>

                <h3 className="text-2xl md:text-3xl tracking-tight font-medium text-foreground mb-1">
                  {policy.title}
                </h3>
                <p className="text-sm text-accent font-medium mb-4">{policy.subtitle}</p>
                <p className="text-base text-foreground-muted leading-relaxed mb-6">
                  {policy.description}
                </p>

                <Separator className="mb-6" />

                <ul className="space-y-3 mb-8 flex-1">
                  {policy.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={16} className="text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={policy.accent ? "accent" : "ghost"}
                  className="w-full"
                  asChild
                >
                  <Link href="/contact-us">{policy.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


