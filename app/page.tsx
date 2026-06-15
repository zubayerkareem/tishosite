import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { USPSection } from "@/components/sections/USP";
import { Policies } from "@/components/sections/Policies";
import { TierTable } from "@/components/sections/TierTable";
import { Features } from "@/components/sections/Features";
import { Benefits } from "@/components/sections/Benefits";
import { DashboardSection } from "@/components/sections/Dashboard";
import { Risk } from "@/components/sections/Risk";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Tisho Enterprise — Structured Investment Policies",
  description:
    "Grow your capital with structured policies you can actually track. Two clearly defined investment policies. Stripe-secured payments. A live investor dashboard.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <USPSection />
      <Policies />
      <TierTable />
      <Features />
      <Benefits />
      <DashboardSection />
      <Risk />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
