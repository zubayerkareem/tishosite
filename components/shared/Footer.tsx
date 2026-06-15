"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FOOTER } from "@/lib/copy";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border bg-background-subtle">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Newsletter row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-10 border-b border-border">
          <p className="text-foreground-muted text-sm max-w-xs">
            {FOOTER.newsletter.heading}
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2 sm:gap-3 w-full md:w-auto"
          >
            <Input
              type="email"
              placeholder={FOOTER.newsletter.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 md:w-56 lg:w-64"
            />
            <Button variant="accent" type="submit" className="shrink-0">
              {FOOTER.newsletter.cta}
            </Button>
          </form>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-10 sm:py-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/">
              <Image
                src="/TISHO ENTERPRISES LOGO/svg side white.svg"
                alt="Tisho Enterprise"
                width={110}
                height={30}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-foreground-subtle leading-relaxed">
              {FOOTER.tagline}
            </p>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium">
              Company
            </p>
            <ul className="space-y-3">
              {FOOTER.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium">
              Legal
            </p>
            <ul className="space-y-3">
              {FOOTER.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.15em] text-foreground-subtle font-medium">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${FOOTER.contact.email}`}
                  className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                >
                  {FOOTER.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${FOOTER.contact.phone.replace(/\s/g, "")}`}
                  className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                >
                  {FOOTER.contact.phone}
                </a>
              </li>
              <li className="text-sm text-foreground-subtle">
                {FOOTER.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">{FOOTER.copyright}</p>
          <p className="text-xs text-foreground-subtle max-w-2xl md:text-right leading-relaxed">
            {FOOTER.compliance}
          </p>
        </div>
      </div>
    </footer>
  );
}
