import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Scott Opiela — 3x CMO · B2B SaaS Operator",
  author: "Scott Opiela",
  description: "B2B SaaS marketing executive based in the United States. I engineer demand systems that compound — specializing in enterprise demand generation, revenue operations, and $3B+ exits.",
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
  canonicalURL: "https://scottopiela.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Scott Opiela",
    specialty: "3x CMO · B2B SaaS Operator",
    summary: "B2B SaaS marketing executive based in the United States. I engineer demand systems that compound — specializing in enterprise demand generation, revenue operations, and $3B+ exits.",
    email: "https://virtualimage.com/start-growing.html",
  },
  experience: [
    {
      company: "Acoustic",
      position: "Chief Marketing Officer",
      startDate: "2019",
      endDate: "2022",
      summary: [
        "Repositioned Acoustic post-IBM spinout, establishing brand identity and go-to-market for a standalone enterprise marketing cloud serving Fortune 500 customers.",
        "Rebuilt demand generation infrastructure from the ground up, engineering pipeline programs that drove measurable ARR growth in a highly competitive MarTech landscape.",
        "Led full-funnel marketing org — brand, content, and digital demand gen — aligning closely with sales leadership to accelerate revenue and retention.",
      ],
    },
    {
      company: "CommerceHub",
      position: "Chief Marketing Officer",
      startDate: "2015",
      endDate: "2019",
      summary: [
        "Scaled marketing through CommerceHub growth phase and NYSE IPO, building demand systems that supported 10x ARR expansion across retail and brand verticals.",
        "Engineered enterprise demand generation programs that consistently outperformed pipeline benchmarks, fueling the company trajectory toward a $3B+ shareholder exit.",
        "Built and led a high-performance marketing team across brand, product marketing, content, and demand generation.",
      ],
    },
    {
      company: "Autotask",
      position: "Chief Marketing Officer",
      startDate: "2010",
      endDate: "2015",
      summary: [
        "Led marketing through Autotask hyper-growth period as the company scaled its IT business management SaaS platform to thousands of MSP customers globally.",
        "Designed and executed demand programs that compounded quarter over quarter, establishing Autotask as the category leader ahead of its acquisition by Datto.",
      ],
    },
  ],
  projects: [
    {
      name: "Acoustic",
      summary: "Stepped in post-IBM spinout to rebuild Acoustic brand, positioning, and demand engine from scratch — leading a full-funnel marketing org through product relaunch and enterprise market re-entry.",
      linkPreview: "https://acoustic.com",
      linkSource: "https://acoustic.com",
      image: "/acoustic-logo.png",
    },
    {
      name: "CommerceHub",
      summary: "Scaled marketing through CommerceHub growth phase and NYSE IPO, engineering demand systems that supported 10x ARR expansion and helped position the company for a $3B+ shareholder exit.",
      linkPreview: "https://commercehub.com",
      linkSource: "https://commercehub.com",
      image: "/commercehub-logo.png",
    },
    {
      name: "Autotask",
      summary: "Led marketing through Autotask hyper-growth period, scaling its IT business management SaaS to thousands of MSP customers globally and establishing the company as the category leader ahead of its acquisition by Datto.",
      linkPreview: "https://autotask.com",
      linkSource: "https://autotask.com",
      image: "/autotask-logo.png",
    },
  ],
  about: {
    description: "Hi, I am Scott Opiela — a 3x Chief Marketing Officer with 30 years engineering demand systems for high-growth B2B SaaS companies. Most CMOs manage marketing. I build the engine. Across Acoustic, CommerceHub, and Autotask, I have led marketing organizations responsible for 10x ARR growth, $3B+ in shareholder exits, and demand programs that consistently outperform benchmarks at scale. If you are a B2B SaaS company looking to build — not just manage — lets talk.",
    image: "/scott-big.jpg",
  },
};
