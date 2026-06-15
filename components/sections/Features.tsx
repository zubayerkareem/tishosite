"use client";

import {
  LayoutDashboard,
  Lock,
  Repeat,
  CalendarClock,
  Layers,
  FastForward,
  BadgeCheck,
  FileText,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FEATURES } from "@/lib/copy";

const iconMap = {
  LayoutDashboard,
  Lock,
  Repeat,
  CalendarClock,
  Layers,
  FastForward,
  BadgeCheck,
  FileText,
  BarChart3,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Features() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        >
          <motion.div variants={fadeUp} className="max-w-2xl mb-16">
            <SectionHeader
              eyebrow={FEATURES.eyebrow}
              title={FEATURES.heading}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {FEATURES.items.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              const row = Math.floor(i / 3);
              const totalRows = Math.ceil(FEATURES.items.length / 3);
              const isLastRow = row === totalRows - 1;
              const col = i % 3;

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={[
                    "flex items-start gap-4 p-6 md:p-8",
                    !isLastRow ? "border-b border-border" : "",
                    col < 2 ? "md:border-r md:border-border" : "",
                  ].join(" ")}
                >
                  <Icon size={20} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


