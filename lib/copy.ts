export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Policies", href: "/policies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export const HERO = {
  eyebrow: "UK-registered · Stripe-secured",
  headline: "Grow Your Capital With Structured Policies You Can",
  headlineAccent: "Actually Track.",
  subhead:
    "Two clearly defined investment policies. Stripe-secured payments. A live investor dashboard showing exactly where your money stands — anytime, from day one.",
  primaryCta: "Apply as an Investor",
  secondaryCta: "Explore Policies",
  microcopy: [
    { icon: "ShieldCheck", text: "Verified onboarding" },
    { icon: "CreditCard", text: "Stripe-backed payments" },
    { icon: "CalendarRange", text: "24-month structured terms" },
    { icon: "Clock", text: "Optional early clearance" },
  ],
};

export const USP = {
  eyebrow: "Why Tisho",
  heading: "Investment, Without the Black Box.",
  body: "Most platforms ask you to wire money and wait. Tisho works the other way around — you choose the policy structure that fits your goals, watch your investment perform in real time, and get paid on a schedule you set.\n\nNo guessing. No silent quarters. No surprises.",
  features: [
    {
      icon: "Target",
      title: "Two policies, built around real investor goals",
      description:
        "Regular payouts or long-term growth. Pick what fits, not what's left over.",
    },
    {
      icon: "Activity",
      title: "A live dashboard, not a quarterly PDF",
      description:
        "Policy status, payment history, and upcoming payouts in one place.",
    },
    {
      icon: "FastForward",
      title: "Optional early clearance",
      description:
        "Need capital sooner? Request it directly from your dashboard, subject to policy terms.",
    },
  ],
};

export const POLICIES = {
  eyebrow: "Investment Policies",
  heading: "One Platform. Two Ways to Invest.",
  subheading: "One 24-Month Structure.",
  intro:
    "Every Tisho policy runs on a 24-month structured term, calculated on your initial capital. At the end of the term, you can withdraw your full proceeds or roll into a new policy. You can also hold multiple active policies simultaneously — useful for staggering payout cycles or splitting capital across both policy types.",
  cta: "Compare Policies →",
  items: [
    {
      badge: "Compact",
      badgeVariant: "muted" as const,
      title: "Compact Policy",
      subtitle: "Flexible, Regular Payouts",
      description:
        "For investors who want returns flowing in on a predictable schedule. Choose monthly, quarterly, bi-annual, or annual payout cadence. Best for investors looking to supplement income or compound on a defined timeline.",
      features: [
        "Monthly, quarterly, bi-annual, or annual payouts",
        "Returns calculated on initial capital",
        "24-month fixed term",
        "Optional early clearance via dashboard",
        "Multiple concurrent policies allowed",
      ],
      cta: "Apply for Compact Policy",
      accent: false,
    },
    {
      badge: "Comprehensive",
      badgeVariant: "accent" as const,
      title: "Comprehensive Policy",
      subtitle: "Structured Long-Term Growth",
      description:
        "For investors focused on building capital over a longer horizon. Returns accrue across the 24-month term, with full principal plus accrued returns released at maturity. Best for investors prioritising compounded growth over distributions.",
      features: [
        "Returns accrue across 24-month term",
        "Principal + returns released at maturity",
        "Higher target annual returns",
        "Optional early clearance via dashboard",
        "Reinvest or withdraw at maturity",
      ],
      cta: "Apply for Comprehensive Policy",
      accent: true,
    },
  ],
};

export const TIERS = {
  eyebrow: "Investment Tiers",
  heading: "Flexible Entry, From £5,000 to £5M+",
  intro:
    "Both policies scale across five tiers. Returns shown are target annual rates calculated on initial capital across the 24-month term. Final terms — including expected payout schedule and early clearance windows — are confirmed in your investor agreement.",
  disclaimer:
    "Target returns are projected, not guaranteed. All investments carry risk. See 'Risk & Returns' below and your investor agreement for full terms.",
  rows: [
    {
      tier: "Tier 1",
      capital: "Up to £5,000",
      compact: 6,
      comprehensive: 10,
    },
    {
      tier: "Tier 2",
      capital: "£5,001 – £50,000",
      compact: 7,
      comprehensive: 12,
    },
    {
      tier: "Tier 3",
      capital: "£50,001 – £500,000",
      compact: 8,
      comprehensive: 15,
    },
    {
      tier: "Tier 4",
      capital: "£500,001 – £5,000,000",
      compact: 9,
      comprehensive: 20,
    },
    {
      tier: "Tier 5",
      capital: "£5,000,000+",
      compact: 10,
      comprehensive: 25,
    },
  ],
};

export const FEATURES = {
  eyebrow: "Platform Features",
  heading: "Built For Investors Who Want Visibility.",
  items: [
    {
      icon: "LayoutDashboard",
      title: "Investor Dashboard",
      description:
        "Track policy status, accrued returns, and payout schedule in real time.",
    },
    {
      icon: "Lock",
      title: "Stripe-Secured Payments",
      description:
        "Every contribution and payout runs through Stripe's PCI-DSS Level 1 infrastructure.",
    },
    {
      icon: "Repeat",
      title: "Flexible Payout Schedules",
      description:
        "Monthly, quarterly, bi-annual, or annual on the Compact Policy.",
    },
    {
      icon: "CalendarClock",
      title: "24-Month Structured Term",
      description:
        "Clear start, clear maturity, no open-ended commitments.",
    },
    {
      icon: "Layers",
      title: "Reinvestment & Multi-Policy",
      description:
        "Roll into a new policy at maturity or hold multiple policies concurrently.",
    },
    {
      icon: "FastForward",
      title: "Early Clearance Option",
      description:
        "Request capital ahead of schedule, subject to policy terms.",
    },
    {
      icon: "BadgeCheck",
      title: "Verified Onboarding",
      description:
        "KYC-backed registration that protects you and the platform.",
    },
    {
      icon: "FileText",
      title: "Transparent Reporting",
      description:
        "Investor-facing statements, not internal summaries.",
    },
    {
      icon: "BarChart3",
      title: "Tiered Structure",
      description:
        "£5,000 entry to £5M+, with terms scaled to commitment level.",
    },
  ],
};

export const BENEFITS = {
  eyebrow: "Investor Benefits",
  heading: "What This Means For You.",
  intro:
    "Every feature exists to give you more control, more clarity, and fewer surprises.",
  items: [
    {
      title: "You always know where your money stands.",
      description:
        "No more chasing quarterly statements. The dashboard reflects your live policy status, 24/7.",
    },
    {
      title: "You get paid on a schedule that fits your life.",
      description:
        "Monthly cashflow? Annual lump sum? You set the cadence — we honour it.",
    },
    {
      title: "You have a defined exit.",
      description:
        "Every policy ends at month 24. No ambiguity, no rolling fine print. Withdraw, reinvest, or split across new policies.",
    },
    {
      title: "You're not locked in.",
      description:
        "Need capital back early? Request early clearance directly from your dashboard.",
    },
    {
      title: "You can scale at your own pace.",
      description:
        "Run multiple policies concurrently — same tier, different tiers, both policy types — to match your liquidity strategy.",
    },
    {
      title: "You're not the last to know.",
      description:
        "Payment notifications, policy updates, and milestone alerts hit your inbox the moment they happen.",
    },
    {
      title: "You're working with people, not a portal.",
      description:
        "Investor relations is handled by named team members — not a ticket queue.",
    },
  ],
};

export const DASHBOARD = {
  eyebrow: "Investor Dashboard",
  heading: "Track Every Update. Every Payment. Every Policy.",
  intro:
    "The Tisho investor dashboard answers the questions investors actually ask:",
  questions: [
    "How is my policy performing?",
    "When is my next payout?",
    "What's my total accrued return to date?",
    "How many days until maturity?",
    "Can I clear early?",
  ],
  closing: "All in one place. Available the moment you're verified.",
  cta: "Explore the Dashboard →",
};

export const RISK = {
  eyebrow: "Risk & Returns",
  heading: "Honest Numbers, Properly Framed.",
  body: "Tisho's target returns are projections based on policy structure and tier level — not guarantees. All investment carries risk, including the possibility of loss of capital. Returns are subject to operational performance and the terms set out in your individual investor agreement.",
  subhead: "Before you invest, Tisho recommends:",
  recommendations: [
    "Read your investor agreement in full",
    "Confirm the tier, term, and payout schedule that apply to your policy",
    "Understand the early clearance terms and any associated adjustments",
    "Verify Tisho's regulatory status independently (your dashboard provides direct links to all relevant filings and our company registration)",
  ],
  closing:
    "Tisho does not provide financial advice. If you're uncertain whether this product is appropriate for your situation, consult an independent financial adviser.",
};

export const TESTIMONIALS = {
  eyebrow: "Investor Voices",
  heading: "What Our Investors Say.",
  items: [
    {
      quote:
        "The professionalism and transparency stood out most. Registration, verification, and payment were all straightforward and well organized.",
      name: "Michael T.",
      role: "Business Owner",
    },
    {
      quote:
        "The Compact Policy has been great so far. Updates and payment notifications always arrive on time.",
      name: "Sarah M.",
      role: "Property Investor",
    },
    {
      quote:
        "Working with Tisho feels like a partnership — our feature requests quickly made it into their backlog.",
      name: "Ricardo P.",
      role: "Entrepreneur",
    },
    {
      quote:
        "I started with the Comprehensive Policy and the process was smooth start to finish. The dashboard makes everything easy to track.",
      name: "Daniel K.",
      role: "Founder",
    },
  ],
};

export const FAQ_ITEMS = [
  {
    question: "Who is Tisho Enterprise?",
    answer:
      "Tisho is a UK-registered investment platform offering structured policies for individual and institutional investors. We manage capital through two policy structures designed around different investor goals — regular payouts (Compact) or long-term capital growth (Comprehensive).",
  },
  {
    question: "How long is each policy?",
    answer:
      "Every Tisho policy runs on a fixed 24-month structured term, calculated on your initial capital. At month 24 the contract terminates, and you can withdraw your proceeds or reinvest into a new policy.",
  },
  {
    question: "Can I hold more than one policy at a time?",
    answer:
      "Yes. You can run as many active policies as you like — same tier, different tiers, or a mix of Compact and Comprehensive. Useful if you want to stagger payout cycles or split capital across both approaches.",
  },
  {
    question: "What happens at the end of the 24-month term?",
    answer:
      "On the Compact Policy, your final scheduled payout closes the policy. On the Comprehensive Policy, your full principal plus accrued returns is released — withdraw it, or roll it into a new policy.",
  },
  {
    question: "How are payments processed?",
    answer:
      "All inbound investments and outbound payouts run through Stripe, which is PCI-DSS Level 1 certified. Your card and bank details are never stored on Tisho's servers.",
  },
  {
    question: "What is the minimum investment?",
    answer:
      "Tier 1 starts at any amount up to £5,000. From there, tiers scale up to £5M+. Specific terms for each tier are confirmed in your investor agreement.",
  },
  {
    question: "Can I withdraw my capital early?",
    answer:
      "Yes — Tisho offers early clearance on both policies. Submit a request through your dashboard and our team will process it according to your policy's clearance terms. Early clearance may carry adjustments to expected returns; these are disclosed upfront in your agreement.",
  },
  {
    question: "How often do I get paid?",
    answer:
      "On the Compact Policy, you choose: monthly, quarterly, bi-annual, or annual. On the Comprehensive Policy, returns accrue across the 24-month term and are paid out at maturity along with your principal.",
  },
  {
    question: "Are the returns shown guaranteed?",
    answer:
      "No. The tier rates shown are target returns, projected based on policy structure. Actual returns are subject to operational performance and the terms in your investor agreement. All investment carries risk, including possible loss of capital.",
  },
  {
    question: "How do I track my investment?",
    answer:
      "Every verified investor gets access to the Tisho dashboard. You'll see policy status, transaction history, upcoming payouts, days to maturity, and downloadable statements — anytime.",
  },
  {
    question: "Is my investment protected?",
    answer:
      "Tisho operates under UK corporate compliance frameworks. Regulatory disclosures and risk statements are provided during onboarding and included in every investor agreement. Investments carry risk — full disclosure is provided before you commit.",
  },
  {
    question: "What does onboarding involve?",
    answer:
      "Three steps: (1) register your account, (2) complete identity verification (KYC), (3) sign your investor agreement and fund your policy via Stripe. Most investors complete onboarding within 48 hours.",
  },
  {
    question: "Who do I contact if something's unclear?",
    answer:
      "You'll get a named point of contact in investor relations during onboarding. Real humans, real response times — not a support queue.",
  },
];

export const FINAL_CTA = {
  heading: "Ready to Put Your Capital to Work?",
  subhead:
    "Join investors growing capital through structured, transparent, professionally managed policies — backed by a live dashboard, Stripe-secured payments, fixed 24-month terms, and optional early clearance.",
  primaryCta: "Apply as an Investor",
  secondaryCta: "Get in Touch",
};

export const FOOTER = {
  tagline: "Structured investment policies. Transparent tracking. Secure payments.",
  company: [
    { label: "About", href: "/about-us" },
    { label: "Policies", href: "/#policies" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Risk Disclosure", href: "#" },
  ],
  contact: {
    email: "info@TishoEnterprises.com",
    phone: "+44 (0) 7481 860959",
    address: "86-90 Paul Street, London, EC2A 4NE",
  },
  newsletter: {
    heading: "Get investment updates and policy news in your inbox.",
    placeholder: "Business email",
    cta: "Subscribe",
  },
  compliance:
    "Tisho Enterprise is a UK-registered company. The information on this site does not constitute financial advice or a personal recommendation. All investments carry risk and may lose value. Target returns are projected, not guaranteed. Past performance does not guarantee future results. Full terms and risk disclosures are provided in your investor agreement. If you are unsure whether this product is suitable for you, please consult an independent financial adviser.",
  copyright: `© ${new Date().getFullYear()} Tisho Enterprise Ltd. All rights reserved. Company No. 15682802.`,
};

export const ABOUT = {
  hero: {
    eyebrow: "About Tisho",
    heading: "Built for investors who want to see where their money is.",
    body: "Tisho Enterprise is a UK-registered investment platform built on the principle that investors deserve full visibility — not quarterly snapshots. We combine structured policy design with real-time tracking and Stripe-backed payments to create a platform where clarity is built in, not bolted on.",
  },
  mission: {
    heading: "Our Mission",
    body: "To create secure and reliable investment opportunities that help individuals and businesses grow with confidence. We believe transparency and structure are the foundations of trust — so we've made both non-negotiable.",
  },
  vision: {
    heading: "Our Vision",
    body: "To become a trusted global investment company known for innovation, transparency, and long-term value. We're building the platform we wish had existed when we started investing.",
  },
  approach: [
    {
      icon: "Eye",
      title: "Transparency",
      description:
        "Every policy term, return rate, and payment schedule is disclosed upfront and tracked in your dashboard — no hidden clauses.",
    },
    {
      icon: "Layers",
      title: "Structure",
      description:
        "Two policies, five tiers, fixed 24-month terms. You always know what you signed up for.",
    },
    {
      icon: "ShieldCheck",
      title: "Security",
      description:
        "Stripe PCI-DSS Level 1 payments. KYC-verified onboarding. UK corporate compliance frameworks.",
    },
  ],
  journey: [
    {
      year: "2021",
      title: "Company was established",
      description:
        "We started our journey with a vision to build a secure and transparent investment platform for everyone.",
    },
    {
      year: "2022",
      title: "Platform development",
      description:
        "Our system and investment structure were improved to provide a smoother and more reliable user experience.",
    },
    {
      year: "2023",
      title: "Growing investor trust",
      description:
        "We successfully expanded our community by focusing on transparency, support, and secure investment solutions.",
    },
    {
      year: "2025",
      title: "New investment opportunities",
      description:
        "We continue working toward smarter financial solutions and long-term growth opportunities for our community.",
    },
  ],
  team: [
    {
      name: "Tonny Rutakirwa",
      role: "Founder",
      bio: "Visionary behind Tisho Enterprise's structured investment approach.",
    },
    {
      name: "Sharon Rutakirwa",
      role: "CEO",
      bio: "Leads platform strategy and investor relations with a focus on transparency.",
    },
    {
      name: "Ignatius Mutungi",
      role: "CDO",
      bio: "Drives digital infrastructure and the investor dashboard experience.",
    },
  ],
  compliance: {
    eyebrow: "Compliance & Registration",
    heading: "Built on a Verifiable Foundation.",
    details: [
      { label: "Company Name", value: "Tisho Enterprise Ltd" },
      { label: "Company Number", value: "15682802" },
      { label: "Registered Address", value: "86-90 Paul Street, London, EC2A 4NE" },
      { label: "Payment Infrastructure", value: "Stripe (PCI-DSS Level 1 Certified)" },
      { label: "KYC Framework", value: "Identity verification on all accounts" },
      { label: "Jurisdiction", value: "England & Wales" },
    ],
  },
};

export const CONTACT = {
  hero: {
    eyebrow: "Contact Us",
    heading: "We respond to every enquiry within one business day.",
    body: "Whether you're ready to invest or still weighing your options, our team is here to help. Send us a message and a named member of our investor relations team will get back to you.",
  },
  info: {
    email: "info@TishoEnterprises.com",
    phone: "+44 (0) 7481 860959",
    address: "86-90 Paul Street, London, EC2A 4NE",
    hours: "Monday – Friday, 9am – 6pm GMT",
  },
  investmentRanges: [
    { label: "Up to £5,000 (Tier 1)", value: "tier-1" },
    { label: "£5,001 – £50,000 (Tier 2)", value: "tier-2" },
    { label: "£50,001 – £500,000 (Tier 3)", value: "tier-3" },
    { label: "£500,001 – £5,000,000 (Tier 4)", value: "tier-4" },
    { label: "£5,000,000+ (Tier 5)", value: "tier-5" },
    { label: "Still deciding", value: "undecided" },
  ],
  faq: [
    {
      question: "How quickly can I get started?",
      answer:
        "Most investors complete onboarding — registration, KYC, and policy sign-up — within 48 hours of first contact.",
    },
    {
      question: "Do I need to be a UK resident?",
      answer:
        "No. Tisho is UK-registered but accepts investors internationally, subject to applicable regulations in your jurisdiction.",
    },
    {
      question: "What happens after I submit this form?",
      answer:
        "A named member of our investor relations team will respond within one business day to discuss your goals and guide you through next steps.",
    },
    {
      question: "Can I speak to someone before committing?",
      answer:
        "Absolutely. Use the enquiry form to request a call, and we'll arrange a time that works for you.",
    },
  ],
};

export const BLOG_POSTS = [
  {
    slug: "understanding-structured-investment-policies",
    category: "Policy Structure",
    title: "Understanding Structured Investment Policies",
    excerpt:
      "Structured policies offer defined terms, predictable returns, and clear exit points. Here's what that means in practice for investors.",
    author: "Tisho Editorial",
    date: "2025-11-12",
    readTime: "5 min read",
    image: "/blog/structured-policies.jpg",
  },
  {
    slug: "compact-vs-comprehensive-which-fits-your-goals",
    category: "Policy Structure",
    title: "Compact vs. Comprehensive: Which Fits Your Goals?",
    excerpt:
      "Monthly income or long-term growth? The two Tisho policies are built around different investor priorities. A breakdown.",
    author: "Tisho Editorial",
    date: "2025-10-28",
    readTime: "4 min read",
    image: "/blog/compact-vs-comprehensive.jpg",
  },
  {
    slug: "why-payment-infrastructure-matters",
    category: "Platform Updates",
    title: "Why Payment Infrastructure Matters for Investors",
    excerpt:
      "Stripe's PCI-DSS Level 1 certification isn't just a credential. It changes how we think about trust and transparency in fintech.",
    author: "Tisho Editorial",
    date: "2025-10-05",
    readTime: "6 min read",
    image: "/blog/payment-infrastructure.jpg",
  },
  {
    slug: "what-24-month-terms-mean-for-your-capital",
    category: "Market Notes",
    title: "What 24-Month Fixed Terms Mean for Your Capital",
    excerpt:
      "Fixed-term investing has distinct advantages over open-ended approaches. We explore the structural benefits and what to consider.",
    author: "Tisho Editorial",
    date: "2025-09-18",
    readTime: "5 min read",
    image: "/blog/fixed-terms.jpg",
  },
  {
    slug: "early-clearance-explained",
    category: "Policy Structure",
    title: "Early Clearance Explained: When and How to Use It",
    excerpt:
      "Early clearance gives investors flexibility without requiring open-ended policies. Here's how it works and what to expect.",
    author: "Tisho Editorial",
    date: "2025-09-02",
    readTime: "4 min read",
    image: "/blog/early-clearance.jpg",
  },
  {
    slug: "investor-dashboard-walkthrough",
    category: "Platform Updates",
    title: "Inside the Investor Dashboard: A Full Walkthrough",
    excerpt:
      "From policy status to payout schedules, the Tisho dashboard is built to answer the questions investors actually ask. A guided tour.",
    author: "Tisho Editorial",
    date: "2025-08-15",
    readTime: "7 min read",
    image: "/blog/dashboard-walkthrough.jpg",
  },
];

// ─── Policy Detail Pages ────────────────────────────────────────────────────

export const COMPACT_POLICY = {
  badge: "Compact Policy",
  eyebrow: "Regular Income Policy",
  heading: "Predictable returns. Paid on your schedule.",
  subhead:
    "The Compact Policy is built for investors who want structured, recurring income from their capital — without locking it away indefinitely. Set your cadence, watch your dashboard, collect your returns.",
  primaryCta: "Apply for Compact Policy",
  secondaryCta: "Compare Policies",

  stats: [
    { label: "Term length", value: "24", unit: "months" },
    { label: "Entry from", value: "£5K", unit: "" },
    { label: "Target return (Tier 2)", value: "7", unit: "% p.a." },
    { label: "Payout options", value: "4", unit: "cadences" },
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "Four steps from application to first payout.",
    steps: [
      {
        number: "01",
        title: "Apply & verify",
        description:
          "Register your account and complete identity verification (KYC). Most investors are verified within 48 hours.",
      },
      {
        number: "02",
        title: "Select your tier & cadence",
        description:
          "Choose your investment amount (which determines your tier and target return rate) and pick your payout frequency — monthly, quarterly, bi-annual, or annual.",
      },
      {
        number: "03",
        title: "Sign your agreement & fund via Stripe",
        description:
          "Review and sign your investor agreement, then fund your policy through Stripe's PCI-DSS Level 1 infrastructure. Your policy activates the same day.",
      },
      {
        number: "04",
        title: "Track, receive, repeat",
        description:
          "Your dashboard goes live immediately. Payouts are delivered to your account on the schedule you selected. At month 24, withdraw your principal or roll into a new policy.",
      },
    ],
  },

  cadences: {
    eyebrow: "Payout Cadences",
    heading: "Choose how often you get paid.",
    description:
      "The Compact Policy gives you four cadence options. You lock in your choice when you sign your investor agreement — it holds for the full 24-month term.",
    options: [
      {
        label: "Monthly",
        icon: "CalendarDays",
        description: "Returns paid every calendar month. Ideal for investors using proceeds for ongoing expenses or reinvestment into other instruments.",
        highlight: false,
      },
      {
        label: "Quarterly",
        icon: "CalendarRange",
        description: "Payments every three months. A popular balance between regular cashflow and reduced administrative overhead.",
        highlight: true,
      },
      {
        label: "Bi-Annual",
        icon: "Calendar",
        description: "Two payments per year, six months apart. Works well for investors who prefer fewer, larger distributions.",
        highlight: false,
      },
      {
        label: "Annual",
        icon: "CalendarCheck",
        description: "One payment per year. Suitable for investors who want to track performance annually and don't need interim cashflow.",
        highlight: false,
      },
    ],
  },

  tiers: {
    eyebrow: "Return Tiers",
    heading: "Target returns by investment level.",
    description:
      "Returns are calculated annually on your initial capital across the 24-month term. The tier is determined by your opening investment amount and stays fixed for the life of the policy.",
    rows: [
      { tier: "Tier 1", capital: "Up to £5,000", rate: 6, suitable: "Entry-level investors" },
      { tier: "Tier 2", capital: "£5,001 – £50,000", rate: 7, suitable: "Individual investors" },
      { tier: "Tier 3", capital: "£50,001 – £500,000", rate: 8, suitable: "Established portfolios" },
      { tier: "Tier 4", capital: "£500,001 – £5,000,000", rate: 9, suitable: "High-net-worth individuals" },
      { tier: "Tier 5", capital: "£5,000,000+", rate: 10, suitable: "Institutional & family office" },
    ],
  },

  forWho: {
    eyebrow: "Is This For You?",
    heading: "The Compact Policy fits if you need cashflow.",
    fits: [
      "You want regular income from invested capital",
      "You have a defined investment horizon and prefer scheduled payouts",
      "You want to supplement income without selling assets",
      "You plan to run multiple policies at staggered payout cycles",
      "You prefer transparency over a black-box approach",
    ],
    doesntFit: [
      "You want maximum long-term growth and don't need interim cashflow",
      "You're comfortable with capital locked until maturity",
      "You're prioritising compounding above all else",
    ],
    alternative: "Comprehensive Policy",
    alternativeHref: "/policies/comprehensive",
  },

  earlyExit: {
    eyebrow: "Early Clearance",
    heading: "Need your capital back sooner?",
    body: "Both Tisho policies include an early clearance option. Submit a request through your investor dashboard — our team reviews it and processes it in accordance with the clearance terms set out in your agreement. Early clearance may carry an adjustment to your accrued returns; the specific terms are disclosed in your investor agreement before you commit.",
  },

  dashboard: {
    eyebrow: "Your Dashboard",
    heading: "Everything you need. Nothing you don't.",
    features: [
      "Live policy status and health indicator",
      "Payout schedule with countdown to next payment",
      "Accrued return tracker across the 24-month term",
      "Transaction history with downloadable statements",
      "Days-to-maturity counter",
      "Early clearance request button",
    ],
  },

  faq: [
    {
      question: "What happens to my capital at month 24?",
      answer:
        "Your final scheduled payout closes the policy. At that point your principal is returned and the policy terminates. You can withdraw the full amount or immediately open a new policy at the same or different tier.",
    },
    {
      question: "Can I change my payout cadence mid-term?",
      answer:
        "No. Your cadence is locked when you sign your investor agreement. You can choose a different cadence when you open your next policy at the end of the 24-month term.",
    },
    {
      question: "What if I miss a payout notification?",
      answer:
        "Payouts are processed automatically — you don't need to do anything to trigger them. If a payment doesn't arrive, log in to your dashboard and contact investor relations. Every payment is logged in your transaction history.",
    },
    {
      question: "Can I run a Compact and a Comprehensive policy at the same time?",
      answer:
        "Yes. You can hold any combination of active policies simultaneously — multiple Compact policies at different tiers, a mix of Compact and Comprehensive, or however else you want to structure your capital allocation.",
    },
    {
      question: "How is the return calculated on monthly payouts?",
      answer:
        "Returns are calculated as an annual percentage of your initial capital, then divided into equal instalments according to your chosen cadence. For example, a Tier 2 investor (7% p.a.) on a monthly cadence would receive approximately 0.583% of their opening capital each month.",
    },
  ],
};

export const COMPREHENSIVE_POLICY = {
  badge: "Comprehensive Policy",
  eyebrow: "Long-Term Growth Policy",
  heading: "Build capital. Collect everything at maturity.",
  subhead:
    "The Comprehensive Policy is designed for investors focused on maximising capital growth across a 24-month horizon. Returns accrue throughout the term and are released in full at maturity — alongside your original principal.",
  primaryCta: "Apply for Comprehensive Policy",
  secondaryCta: "Compare Policies",

  stats: [
    { label: "Term length", value: "24", unit: "months" },
    { label: "Entry from", value: "£5K", unit: "" },
    { label: "Target return (Tier 2)", value: "12", unit: "% p.a." },
    { label: "Payout", value: "1×", unit: "at maturity" },
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "Capital in. Returns accrue. Maturity pays everything out.",
    steps: [
      {
        number: "01",
        title: "Apply & verify",
        description:
          "Register your account and complete identity verification (KYC). Most investors are verified within 48 hours.",
      },
      {
        number: "02",
        title: "Select your tier",
        description:
          "Your investment amount determines your tier and locks in your target annual return rate. No cadence selection needed — all returns accrue until month 24.",
      },
      {
        number: "03",
        title: "Sign your agreement & fund via Stripe",
        description:
          "Review and sign your investor agreement, then fund your policy through Stripe's PCI-DSS Level 1 infrastructure. Your 24-month term begins on the day your policy activates.",
      },
      {
        number: "04",
        title: "Monitor via dashboard. Collect at maturity.",
        description:
          "Your dashboard shows your accrued return building in real time. At month 24, your full principal plus all accrued returns is released. Withdraw, reinvest, or split across new policies.",
      },
    ],
  },

  accrual: {
    eyebrow: "How Returns Accrue",
    heading: "Your return builds continuously across 24 months.",
    description:
      "Unlike the Compact Policy — where returns are distributed periodically — the Comprehensive Policy holds your accrued returns within the policy. You can see them building in your dashboard at any time, but they're paid out as a single sum at maturity.",
    illustration: [
      { month: "Month 0", event: "Policy activates. Capital placed.", accent: false },
      { month: "Month 6", event: "Dashboard shows 6 months of accrued return.", accent: false },
      { month: "Month 12", event: "Halfway mark — 12 months of returns visible.", accent: false },
      { month: "Month 18", event: "Dashboard shows 18 months of accrued return.", accent: false },
      { month: "Month 24", event: "Full principal + all accrued returns released.", accent: true },
    ],
  },

  tiers: {
    eyebrow: "Return Tiers",
    heading: "Higher returns for longer commitment.",
    description:
      "The Comprehensive Policy offers significantly higher target returns than the Compact Policy — reflecting the structure of holding returns until maturity. All rates are annual, calculated on initial capital across the 24-month term.",
    rows: [
      { tier: "Tier 1", capital: "Up to £5,000", compact: 6, rate: 10, uplift: "+4%" },
      { tier: "Tier 2", capital: "£5,001 – £50,000", compact: 7, rate: 12, uplift: "+5%" },
      { tier: "Tier 3", capital: "£50,001 – £500,000", compact: 8, rate: 15, uplift: "+7%" },
      { tier: "Tier 4", capital: "£500,001 – £5,000,000", compact: 9, rate: 20, uplift: "+11%" },
      { tier: "Tier 5", capital: "£5,000,000+", compact: 10, rate: 25, uplift: "+15%" },
    ],
  },

  forWho: {
    eyebrow: "Is This For You?",
    heading: "The Comprehensive Policy fits if growth is the goal.",
    fits: [
      "You don't need interim cashflow from this capital",
      "You want to maximise total returns over 24 months",
      "You're building a long-term capital position",
      "You want full visibility of accruing returns without needing distributions",
      "You plan to reinvest the full maturity payout into a larger tier or new policy",
    ],
    doesntFit: [
      "You need regular income from this capital during the 24-month term",
      "You want flexibility to receive partial payouts mid-term",
      "You may need to access capital before month 24",
    ],
    alternative: "Compact Policy",
    alternativeHref: "/policies/compact",
  },

  earlyExit: {
    eyebrow: "Early Clearance",
    heading: "You're not locked in — but plan ahead.",
    body: "The Comprehensive Policy includes an early clearance option. If you need capital ahead of the 24-month maturity, you can submit a clearance request from your dashboard. Early clearance may carry an adjustment to your accrued returns — the specific terms are disclosed in full in your investor agreement before you commit. We recommend reviewing these terms carefully before applying.",
  },

  comparison: {
    eyebrow: "Policy Comparison",
    heading: "Compact vs. Comprehensive — at a glance.",
    rows: [
      { label: "Term", compact: "24 months", comprehensive: "24 months" },
      { label: "Payout structure", compact: "Periodic (4 cadences)", comprehensive: "Single at maturity" },
      { label: "Target return (Tier 2)", compact: "7% p.a.", comprehensive: "12% p.a." },
      { label: "Best for", compact: "Income & cashflow", comprehensive: "Capital growth" },
      { label: "Early clearance", compact: "Available", comprehensive: "Available (terms apply)" },
      { label: "Multi-policy", compact: "Yes", comprehensive: "Yes" },
      { label: "Dashboard tracking", compact: "Full", comprehensive: "Full" },
    ],
  },

  dashboard: {
    eyebrow: "Your Dashboard",
    heading: "Watch your capital compound in real time.",
    features: [
      "Live accrued return counter — updated continuously",
      "Days-to-maturity countdown with exact payout date",
      "Projected total payout at maturity (principal + returns)",
      "Policy status and activation date",
      "Transaction history with downloadable statements",
      "Early clearance request with projected adjustment preview",
    ],
  },

  faq: [
    {
      question: "What exactly is paid out at maturity?",
      answer:
        "Your full opening principal plus all accrued returns across the 24-month term. For example, a Tier 2 investor placing £20,000 at 12% p.a. would receive £20,000 + (£20,000 × 12% × 2) = £24,800 at month 24, subject to the terms in their agreement.",
    },
    {
      question: "Why is the Comprehensive return higher than the Compact?",
      answer:
        "Because returns are held within the policy rather than paid out periodically, Tisho can offer a higher target rate. The structure benefits investors who don't need interim distributions — the trade-off is that you don't access your returns until maturity.",
    },
    {
      question: "Can I see my accrued returns before maturity?",
      answer:
        "Yes, in full — your dashboard shows your live accrued return counter at all times. Seeing the number grow is one of the core features of the Comprehensive Policy experience.",
    },
    {
      question: "What happens at month 24 if I don't do anything?",
      answer:
        "Your policy matures and the payout is processed automatically to your registered account. You'll receive a notification before and on the maturity date. If you want to reinvest, simply open a new policy after receiving your funds.",
    },
    {
      question: "Can I hold both a Compact and a Comprehensive policy simultaneously?",
      answer:
        "Yes. Many investors run both — using the Comprehensive Policy to build capital over the full 24-month term, while a Compact Policy generates regular income from a separate portion of their portfolio.",
    },
    {
      question: "Is there a minimum or maximum investment?",
      answer:
        "Tier 1 starts at any amount up to £5,000. There is no enforced upper limit — Tier 5 accommodates investments of £5M+. Final terms for all tiers are confirmed in your investor agreement.",
    },
  ],
};

