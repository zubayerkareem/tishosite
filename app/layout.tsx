import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tisho Enterprises — Structured Investment Policies",
    template: "%s | Tisho Enterprises",
  },
  description:
    "Two clearly defined investment policies. Stripe-secured payments. A live investor dashboard showing exactly where your money stands.",
  keywords: [
    "investment",
    "structured policies",
    "UK investment",
    "investor dashboard",
    "Stripe payments",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://tishoenterprises.com",
    siteName: "Tisho Enterprises",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
