"use client";

import Link from "next/link";
import { Eye, Layers, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ABOUT } from "@/lib/copy";

const iconMap = { Eye, Layers, ShieldCheck };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 0%, rgba(195,246,60,0.07), transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow className="mb-4">{ABOUT.hero.eyebrow}</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter font-medium text-foreground mb-5 sm:mb-6"
            >
              {ABOUT.hero.heading}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-foreground-muted leading-relaxed"
            >
              {ABOUT.hero.body}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-24 md:py-32 bg-background-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[ABOUT.mission, ABOUT.vision].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
              >
                <h2 className="text-2xl md:text-3xl tracking-tight font-medium text-foreground mb-4">
                  {item.heading}
                </h2>
                <p className="text-base text-foreground-muted leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-2xl mb-16">
              <SectionHeader
                eyebrow="Our Approach"
                title="How we think about investment."
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {ABOUT.approach.map((item, i) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-background-elevated border border-border rounded-2xl p-6 md:p-8 hover:border-border-strong transition-colors duration-200"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey / Timeline */}
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
                eyebrow="Our Journey"
                title="The Journey of Tisho Enterprise."
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ABOUT.journey.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-background-elevated border border-border rounded-2xl p-6 hover:border-border-strong transition-colors"
                >
                  <span className="text-2xl sm:text-3xl font-medium text-accent tracking-tight">
                    {item.year}
                  </span>
                  <h3 className="text-base font-medium text-foreground mt-3 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
              <SectionHeader
                eyebrow="Our Advisors"
                title="Meet the minds behind our vision."
                align="center"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
              {ABOUT.team.map((member, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-background-elevated border border-border rounded-2xl p-6 md:p-8 text-center hover:border-border-strong transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 mx-auto mb-5 flex items-center justify-center">
                    <span className="text-xl font-medium text-accent">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-accent mb-3">{member.role}</p>
                  <p className="text-xs text-foreground-muted leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance */}
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
                eyebrow={ABOUT.compliance.eyebrow}
                title={ABOUT.compliance.heading}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="max-w-2xl bg-background-elevated border border-border rounded-2xl overflow-hidden"
            >
              {ABOUT.compliance.details.map((row, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-border last:border-0"
                >
                  <span className="text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium mb-1 sm:mb-0 w-48 shrink-0">
                    {row.label}
                  </span>
                  <span className="text-sm text-foreground">{row.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-lg font-medium text-foreground">
            Ready to talk investment goals?
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link href="/contact-us">Talk to investor relations â†’</Link>
          </Button>
        </div>
      </section>
    </>
  );
}


