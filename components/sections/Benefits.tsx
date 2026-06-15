"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BENEFITS } from "@/lib/copy";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left — sticky heading */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <SectionHeader
              eyebrow={BENEFITS.eyebrow}
              title={BENEFITS.heading}
              description={BENEFITS.intro}
            />
          </motion.div>

          {/* Right — benefit rows */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {BENEFITS.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex gap-4 sm:gap-5 py-5 sm:py-6 border-b border-border last:border-0"
              >
                <div className="w-1 shrink-0 rounded-full bg-accent mt-1 self-stretch" />
                <div>
                  <p className="font-medium text-foreground mb-1">{item.title}</p>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
