"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FOOTER } from "@/lib/copy";
import { subscribeNewsletter } from "@/app/actions/newsletter";

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "https://www.X.com/TishoEnterprise",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1FQzrJuBkG/?mibextid=wwXIfr",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="border-t border-border bg-background-subtle">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Newsletter row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-10 border-b border-border">
          <p className="text-foreground-muted text-sm max-w-xs">
            {FOOTER.newsletter.heading}
          </p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!email) return;
              await subscribeNewsletter(email);
              setEmail("");
              setSubscribed(true);
            }}
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
              {subscribed ? "Subscribed ✓" : FOOTER.newsletter.cta}
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
                alt="Tisho Enterprises"
                width={110}
                height={30}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-foreground-subtle leading-relaxed">
              {FOOTER.tagline}
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-foreground-subtle hover:text-foreground transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
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
