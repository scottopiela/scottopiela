import scottSmall from "./assets/scott-small.jpg";
import scottBig from "./assets/scott-big.jpg";
import acousticLogo from "./assets/acoustic-logo.png";
import commercehubLogo from "./assets/commercehub-logo.png";
import autotaskLogo from "./assets/autotask-logo.png";

export const SITE_CONFIG = {
  title: "Scott Opiela — 3× CMO · B2B SaaS Operator",
  description:
    "B2B SaaS marketing executive based in the United States. I engineer demand systems that compound — specializing in enterprise demand generation, revenue operations, and $3B+ exits.",
  lang: "en",
  author: "Scott Opiela",
  siteLogo: scottSmall,
  socialImage: "scott-big.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Companies", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/scottopiela" },
    { text: "virtualimage.com", href: "https://www.virtualimage.com" },
  ],
};

export const SITE_CONTENT = {
  hero: {
    name: "Scott Opiela",
    specialty: "3× CMO · B2B SaaS Operator",
    summary:
      "B2B SaaS marketing executive based in the United States. I engineer demand systems that compound — specializing in enterprise demand generation, revenue operations, and $3B+ exits.",
    ctaUrl: "https://virtualimage.com/start-growing.html",
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
        "Scaled marketing through CommerceHub's growth phase and NYSE IPO, building demand systems that supported 10× ARR expansion across retail and brand verticals.",
        "Engineered enterprise demand generation programs that consistently outperformed pipeline benchmarks, fueling the company's trajectory toward a $3B+ shareholder exit.",
        "Built and led a high-performance marketing team across brand, product marketing, content, and demand generation.",
      ],
    },
    {
      company: "Autotask",
      position: "Chief Marketing Officer",
      startDate: "2010",
      endDate: "2015",
      summary: [
        "Led marketing through Autotask's hyper-growth period as the company scaled its IT business management SaaS platform to thousands of MSP customers globally.",
        "Designed and executed demand programs that compounded quarter over quarter, establishing Autotask as the category leader ahead of its acquisition by Datto.",
      ],
    },
  ],
  projects: [
    {
      name: "Acoustic",
      summary:
        "Stepped in post-IBM spinout to rebuild Acoustic's brand, positioning, and demand engine from scratch — leading a full-funnel marketing org through product relaunch and enterprise market re-entry.",
      image: acousticLogo,
      linkPreview: "https://acoustic.com",
      linkSource: "https://acoustic.com",
    },
    {
      name: "CommerceHub",
      summary:
        "Scaled marketing through CommerceHub's growth phase and NYSE IPO, engineering demand systems that supported 10× ARR expansion and helped position the company for a $3B+ shareholder exit.",
      image: commercehubLogo,
      linkPreview: "https://commercehub.com",
      linkSource: "https://commercehub.com",
    },
    {
      name: "Autotask",
      summary:
        "Led marketing through Autotask's hyper-growth period, scaling its IT business management SaaS to thousands of MSP customers globally and establishing the company as the category leader ahead of its acquisition by Datto.",
      image: autotaskLogo,
      linkPreview: "https://autotask.com",
      linkSource: "https://autotask.com",
    },
  ],
  about: {
    description:
      "Hi, I'm Scott Opiela — a 3× Chief Marketing Officer with 30 years engineering demand systems for high-growth B2B SaaS companies. Most CMOs manage marketing. I build the engine.\n\nAcross Acoustic, CommerceHub, and Autotask, I've led marketing organizations responsible for 10× ARR growth, $3B+ in shareholder exits, and demand programs that consistently outperform benchmarks at scale.\n\nIf you're a B2B SaaS company looking to build — not just manage — let's talk.",
    image: scottBig,
  },
};
