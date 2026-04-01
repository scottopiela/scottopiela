import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Scott Opiela — 3x CMO · B2B SaaS Operator",
  author: "Scott Opiela",
  description: "PE-backed SaaS growth leader behind $3B+ in exits across MarTech, Retail/eCommerce, and IT/MSP. I run high-performance marketing with a focus on leverage, systems, and measurable outcomes — scaling growth efficiently through data and AI.",
  lang: "en",
  siteLogo: "/scott-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Companies", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/scottopiela" },
    { text: "virtualimage.com", href: "https://www.virtualimage.com" },
  ],
  socialImage: "/scott-big.jpg",
  canonicalURL: "https://scottopiela.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Scott Opiela",
    specialty: "3\u00d7 CMO \u00b7 Driving Efficient, Scalable Growth",
    summary: "PE-backed SaaS growth leader behind $3B+ in exits across MarTech, Retail/eCommerce, and IT/MSP. I run high-performance marketing with a focus on leverage, systems, and measurable outcomes \u2014 scaling growth efficiently through data and AI.",
    email: "mailto:scott@opiela.com",
  },
  experience: [
    {
      company: "Acoustic",
      position: "Chief Marketing Officer",
      startDate: "2021",
      endDate: "2026",
      summary: [
        "Led a global marketing organization across brand, product marketing, demand generation, and marketing operations in NA, EMEA, and APAC — transforming marketing into a measurable revenue engine for Acoustic's enterprise MarTech portfolio including Acoustic Campaign, Tealeaf, and DemandTec.",
        "Drove the company's full brand transformation and go-to-market repositioning, including the Acoustic brand evolution and the 2023 launch of Acoustic Connect — establishing a modern, differentiated market position in a competitive enterprise MarTech landscape.",
        "Consistently generated 50%+ of total ARR pipeline and bookings, positioning marketing as the primary driver of revenue growth and a core contributor to PE-backed enterprise value creation.",
        "Delivered above-benchmark performance across marketing contribution, team efficiency, and lead generation — with PR share of voice and social metrics outperforming larger public peer organizations.",
        "Served as the organization's AI champion — shaped company AI strategy and product roadmap direction, ensuring alignment between market needs, product innovation, and competitive positioning.",
        "Implemented performance measurement frameworks linking marketing investment to pipeline, revenue, and ROI — enabling data-driven decision making at the executive and board level.",
      ],
    },
    {
      company: "CommerceHub",
      position: "Chief Marketing Officer",
      startDate: "2018",
      endDate: "2021",
      summary: [
        "Held senior marketing leadership at a Nasdaq-listed B2B SaaS company, driving go-to-market strategy, product marketing, and demand generation across the world's largest retailers, brands, and supply chain partners.",
        "Partnered closely with the CEO and executive team to shape brand positioning, product launches, integrated campaigns, PR, and thought leadership — elevating market presence and sharpening strategic narrative.",
        "Drove measurable improvements in pipeline generation, conversion rates, and marketing efficiency — contributing to sustained revenue growth and expansion supporting $30B+ in annual Gross Merchandise Value.",
        "Secured Tier 1 media coverage across CNBC, Bloomberg, Fox News, the New York Times, and the Wall Street Journal — building brand authority at scale.",
        "Collaborated cross-functionally with Sales, Product, and Finance to align go-to-market strategy, refine positioning, and accelerate enterprise deal velocity in a public company environment.",
        "Contributed to the company's strategic growth trajectory and market positioning leading up to two successful exits: take-private by GTCR & Sycamore Partners (2018 — $1B) and acquisition by Insight Partners (2020 — $2B+).",
      ],
    },
    {
      company: "Autotask",
      position: "Chief Marketing Officer",
      startDate: "2001",
      endDate: "2017",
      summary: [
        "Led global marketing across NA, EMEA, and APAC — building and scaling a high-performance demand engine and go-to-market strategy that drove 10× ARR growth from ~$10M to $100M across a 16-year tenure, joining as Director of Marketing and promoted to CMO.",
        "Built a high-volume demand engine generating 5,000+ inquiries per month and a 200,000+ account CRM/ABM database — significantly expanding market reach, pipeline capacity, and category leadership.",
        "Consistently delivered 70%+ marketing-originated bookings and 90%+ marketing-influenced revenue with an LTV:CAC ratio exceeding 5:1 — establishing marketing as the primary and most efficient driver of growth.",
        "Partnered directly with PE sponsors JMI Equity and Vista Equity Partners to align marketing strategy with growth objectives, investment priorities, and value creation plans across multiple ownership cycles.",
        "Recognized with Vista Equity Partners' Value Creation Award in 2016 and 2017 for leading the portfolio in marketing-sourced revenue growth and performance.",
        "Contributed to $650M+ in total shareholder value creation across two successful PE-backed exits: acquired by Vista Equity Partners (June 2014 — $330M) and subsequently by Datto Corp (December 2017 — $320M+).",
      ],
    },
  ],
  projects: [
    {
      name: "Acoustic",
      summary: "Stepped in post-IBM spinout to rebuild Acoustic brand, positioning, and demand engine from scratch \u2014 leading a full-funnel marketing org through product relaunch and enterprise market re-entry.",
      linkPreview: "https://acoustic.com",
      linkSource: "https://acoustic.com",
      image: "/acoustic-logo.png",
    },
    {
      name: "CommerceHub",
      summary: "At CommerceHub, led go-to-market strategy, brand, communications, and demand generation, supporting enterprise growth and market leadership ahead of its multi-billion dollar acquisition by Insight Partners (2020).",
      linkPreview: "https://www.rithum.com",
      linkSource: "https://www.rithum.com",
      image: "/commercehub-logo.png",
    },
    {
      name: "Autotask",
      summary: "Led marketing through Autotask hyper-growth period, scaling its IT business management SaaS to thousands of MSP customers globally and establishing the company as the category leader ahead of its acquisition by Datto.",
      linkPreview: "https://www.kaseya.com",
      linkSource: "https://www.kaseya.com",
      image: "/autotask-logo.png",
    },
  ],
  about: {
    description: "Hi, I am Scott Opiela \u2014 a 3x Chief Marketing Officer with 30 years engineering demand systems for high-growth B2B SaaS companies. Most CMOs manage marketing. I build the engine. Across Acoustic, CommerceHub, and Autotask, I have led marketing organizations responsible for 10x ARR growth, $3B+ in shareholder exits, and demand programs that consistently outperform benchmarks at scale. If you are a B2B SaaS company looking to build \u2014 not just manage \u2014 lets talk.",
    image: "/scott-big.jpg",
  },
};
