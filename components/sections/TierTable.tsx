"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TIERS } from "@/lib/copy";

function AnimatedNumber({ target, inView }: { target: number; inView: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <>{val}</>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function TierTable() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
              eyebrow={TIERS.eyebrow}
              title={TIERS.heading}
              description={TIERS.intro}
            />
          </motion.div>

          <motion.div variants={fadeUp} ref={ref}>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-background-elevated">
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium">
                      Tier
                    </th>
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium">
                      Capital (USD/EUR)
                    </th>
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium">
                      Compact (Target Annual)
                    </th>
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium">
                      Comprehensive (Target Annual)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TIERS.rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border last:border-0 hover:bg-background-elevated/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-accent/10 to-transparent text-accent border border-accent/20">
                          {row.tier}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground-muted">
                        {row.capital}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-2xl font-medium text-accent">
                          <AnimatedNumber target={row.compact} inView={inView} />
                        </span>
                        <span className="text-sm text-accent/70">%</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-2xl font-medium text-accent">
                          <AnimatedNumber target={row.comprehensive} inView={inView} />
                        </span>
                        <span className="text-sm text-accent/70">%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-foreground-subtle italic">
              * {TIERS.disclaimer}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


