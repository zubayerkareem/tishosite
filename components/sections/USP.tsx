"use client";

import { Target, Activity, FastForward } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { USP } from "@/lib/copy";

const iconMap = { Target, Activity, FastForward };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function USPSection() {
  return (
    <section className="py-24 md:py-32 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} className="max-w-2xl mb-16">
            <SectionHeader
              eyebrow={USP.eyebrow}
              title={USP.heading}
              description={
                <>
                  Most platforms ask you to wire money and wait. Tisho works the
                  other way around &mdash; you choose the policy structure that fits your
                  goals, watch your investment perform in real time, and get paid on
                  a schedule you set.
                  <br />
                  <br />
                  No guessing. No silent quarters. No surprises.
                </>
              }
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {USP.features.map((feature, i) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-background-elevated border border-border rounded-2xl p-6 md:p-8 hover:border-border-strong transition-colors duration-200"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-2xl tracking-tight font-medium text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-foreground-muted leading-relaxed">
                    {feature.description}
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



