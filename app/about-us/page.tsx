"use client";

import Link from "next/link";
import Image from "next/image";
import { Eye, Layers, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ABOUT } from "@/lib/copy";

const iconMap = { Eye, Layers, ShieldCheck };

const team = [
  {
    name: "Tonny Rutakirwa",
    role: "Founder",
    bio: "Serial entrepreneur and visionary behind Tisho Enterprises. Drives the company's strategic direction and long-term growth across markets.",
    image: "/team/tonny.jpg",
    linkedin: "https://www.linkedin.com/in/tonnyrutakirwa",
  },
  {
    name: "Sharon Rutakirwa",
    role: "Chief Executive Officer",
    bio: "Leads day-to-day operations and investor relations. Ensures every investor experience reflects Tisho's commitment to transparency and reliability.",
    image: "/team/sharon.jpg",
    linkedin: "https://www.linkedin.com/in/shallon-agaba",
  },
  {
    name: "Ignatius Mutungi",
    role: "Chief Development Officer",
    bio: "Oversees platform development and product strategy. Responsible for building the infrastructure that powers our investor dashboard and policy systems.",
    image: "/team/ignatius.jpg",
    linkedin: "https://www.linkedin.com/in/ignatius-mutungi-639269149",
  },
];

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
                title="The Journey of Tisho Enterprises."
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
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-background-elevated border border-border rounded-2xl overflow-hidden hover:border-border-strong transition-colors group"
                >
                  {/* Photo */}
                  <div className="relative w-full aspect-[4/4.5] overflow-hidden bg-background-subtle">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-medium text-foreground mb-0.5">
                          {member.name}
                        </h3>
                        <p className="text-xs text-accent">{member.role}</p>
                      </div>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="mt-0.5 text-foreground-subtle hover:text-accent transition-colors shrink-0"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                    <p className="text-xs text-foreground-muted leading-relaxed mt-3">
                      {member.bio}
                    </p>
                  </div>
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
            <Link href="https://dashboard.tishoenterprises.com/">Talk to investor relations →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}


