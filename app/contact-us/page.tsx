"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { submitContact } from "@/app/actions/contact";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT } from "@/lib/copy";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    range: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    await submitContact(form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-background-elevated border border-accent/30 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={28} className="text-accent" />
        </div>
        <h3 className="text-xl font-medium text-foreground mb-2">Enquiry received.</h3>
        <p className="text-sm text-foreground-muted">
          A member of our investor relations team will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs text-foreground-subtle mb-2 uppercase tracking-[0.15em]">
          Your name
        </label>
        <Input
          placeholder="Enter here"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-xs text-foreground-subtle mb-2 uppercase tracking-[0.15em]">
          Email address
        </label>
        <Input
          type="email"
          placeholder="Enter here"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-xs text-foreground-subtle mb-2 uppercase tracking-[0.15em]">
          Investment range
        </label>
        <Select onValueChange={(v) => setForm({ ...form, range: v })}>
          <SelectTrigger>
            <SelectValue placeholder="Select a tier" />
          </SelectTrigger>
          <SelectContent>
            {CONTACT.investmentRanges.map((r) => (
              <SelectItem key={r.value} value={r.value}>
                {r.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-xs text-foreground-subtle mb-2 uppercase tracking-[0.15em]">
          Tell us about your inquiry
        </label>
        <Textarea
          placeholder="Enter here"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      <Button variant="accent" size="lg" type="submit" className="w-full">
        Submit Request
      </Button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 70% 0%, rgba(195,246,60,0.06), transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow className="mb-4">{CONTACT.hero.eyebrow}</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium text-foreground mb-4 sm:mb-5"
            >
              {CONTACT.hero.heading}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-foreground-muted leading-relaxed">
              {CONTACT.hero.body}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2-column layout */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-foreground-subtle mb-6">
                Send a message
              </p>
              <ContactForm />
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <div className="bg-background-elevated border border-border rounded-2xl p-6 md:p-8 space-y-5 sm:space-y-6">
                <p className="text-xs uppercase tracking-[0.15em] text-foreground-subtle">
                  Contact information
                </p>

                {[
                  {
                    Icon: Mail,
                    label: "Email",
                    value: CONTACT.info.email,
                    href: `mailto:${CONTACT.info.email}`,
                  },
                  {
                    Icon: Phone,
                    label: "Phone",
                    value: CONTACT.info.phone,
                    href: `tel:${CONTACT.info.phone.replace(/\s/g, "")}`,
                  },
                  {
                    Icon: MapPin,
                    label: "Address",
                    value: CONTACT.info.address,
                    href: undefined,
                  },
                  {
                    Icon: Clock,
                    label: "Hours",
                    value: CONTACT.info.hours,
                    href: undefined,
                  },
                ].map(({ Icon, label, value, href }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground-subtle mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-foreground hover:text-accent transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-foreground-subtle">
                    Response time expectation: within 1 business day. For urgent
                    investor matters, please call directly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="py-16 md:py-24 bg-background-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <SectionHeader
                eyebrow="Common Questions"
                title="Before you reach out."
                align="center"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Accordion type="single" collapsible>
                {CONTACT.faq.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}


