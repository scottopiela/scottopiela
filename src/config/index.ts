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
    summary: "PE-backed SaaS growth leader behind $3B+ in exits. I run high-performance marketing with a focus on leverage, systems, and measurable outcomes \u2014 scaling growth efficiently through data and AI.",
    email: "mailto:scott@opiela.com",
  },
  experience: [
    {
      company: "Acoustic",
      position: "Chief Marketing Officer",
      startDate: "2021",
      endDate: "2026",
      summary: [
        "Led a global marketing organization across brand, product, demand, and operations, transforming marketing into a measurable revenue engine in a PE-backed SaaS environment.",
        "Drove company-wide brand transformation and go-to-market repositioning, including the launch of Acoustic Connect, establishing a modern and differentiated market position.",
        "Generated >50% of total ARR pipeline and bookings, positioning marketing as a primary driver of revenue growth and enterprise value creation.",
        "Improved marketing effectiveness and efficiency through systems, data, and performance frameworks, aligning investment to pipeline, revenue, and ROI at the executive and board level.",
      ],
    },
    {
      company: "CommerceHub",
      position: "Chief Marketing Officer",
      startDate: "2018",
      endDate: "2021",
      summary: [
        "Led key areas of marketing at CommerceHub, spanning go-to-market strategy, product marketing, and demand generation in support of enterprise growth.",
        "Worked closely with the CEO and executive team to shape positioning, launches, campaigns, PR, and thought leadership that elevated market presence and sharpened strategic narrative.",
        "Improved pipeline performance, conversion, and marketing efficiency by aligning investment and execution to revenue growth, deal velocity, and public company expectations.",
        "Helped strengthen CommerceHub\u2019s market leadership and growth trajectory ahead of its multi-billion dollar acquisition by Insight Partners in 2020.",
      ],
    },
    {
      company: "Autotask",
      position: "Chief Marketing Officer",
      startDate: "2001",
      endDate: "2017",
      summary: [
        "Led global marketing across North America, EMEA, and APAC, building a scalable demand engine that supported 10\u00d7 ARR growth to $100M.",
        "Established marketing as the primary growth driver, delivering >70% marketing-sourced bookings and >90% influenced revenue with strong unit economics (LTV:CAC >5).",
        "Built and scaled a high-performance demand engine, expanding pipeline through a 200K+ account database and consistent high-volume lead generation.",
        "Partnered with executive leadership and private equity sponsors (JMI, Vista) to align marketing with value creation, contributing to $650M+ in shareholder outcomes and two successful exits.",
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
