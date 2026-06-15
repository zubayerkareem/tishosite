"use client";

import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RISK } from "@/lib/copy";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Risk() {
  return (
    <section className="py-24 md:py-32 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-4">{RISK.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl tracking-tight font-medium text-foreground mb-6">
              {RISK.heading}
            </h2>
            <p className="text-base text-foreground-muted leading-relaxed mb-10">
              {RISK.body}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="text-left bg-background-elevated border border-border rounded-2xl p-6 md:p-8">
            <p className="text-sm font-medium text-foreground mb-5">{RISK.subhead}</p>
            <ul className="space-y-4">
              {RISK.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertCircle size={15} className="text-foreground-subtle mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground-muted leading-relaxed">{rec}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 text-sm text-foreground-subtle leading-relaxed">
            {RISK.closing}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}


