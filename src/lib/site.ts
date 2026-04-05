export const SITE_URL = "https://shivangmokariya.dev";
export const SITE_NAME = "Shivang Mokariya";
export const SITE_TITLE_SUFFIX = "Shivang Mokariya";
export const DEFAULT_OG_IMAGE = "/opengraph-image";
export const DEFAULT_TWITTER_IMAGE = "/twitter-image";
export const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION || undefined;

export const DEFAULT_DESCRIPTION =
  "Portfolio of Shivang Mokariya, a Node.js Developer, Full-Stack Developer, and AI & Automation Engineer building scalable backend APIs, web platforms, and automation systems.";

export const DEFAULT_KEYWORDS = [
  "Shivang Mokariya",
  "Node.js Developer",
  "Full-Stack Developer",
  "AI Automation Engineer",
  "Backend APIs",
  "NestJS",
  "Express.js",
  "TypeScript",
  "MongoDB",
  "AWS",
];

export const PUBLIC_ROUTES = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/about",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/work",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/skills",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/contact",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/logs",
    priority: 0.4,
    changeFrequency: "monthly" as const,
  },
];

export const PRIMARY_NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/work", label: "WORK" },
  { href: "/skills", label: "SKILLS" },
  { href: "/contact", label: "CONTACT" },
];

export const SECONDARY_NAV_LINKS = [{ href: "/logs", label: "LOGS" }];
