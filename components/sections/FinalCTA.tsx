"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { FINAL_CTA } from "@/lib/copy";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function FinalCTA() {
  return (
    <section
      className="py-24 md:py-32"
      style={{
        background: "linear-gradient(to bottom, #002C14, #00351A)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <Eyebrow>Get Started</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium text-foreground mb-6"
          >
            {FINAL_CTA.heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-foreground-muted leading-relaxed mb-10"
          >
            {FINAL_CTA.subhead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact-us">{FINAL_CTA.primaryCta}</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/contact-us">{FINAL_CTA.secondaryCta}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


