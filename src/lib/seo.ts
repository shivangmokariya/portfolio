import type { Metadata } from "next";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  DEFAULT_TWITTER_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  index?: boolean;
  type?: "website" | "profile";
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  index = true,
  type = "website",
}: MetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const mergedKeywords = Array.from(
    new Set([...DEFAULT_KEYWORDS, ...keywords]),
  );

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: absoluteUrl(DEFAULT_OG_IMAGE),
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(DEFAULT_TWITTER_IMAGE)],
    },
    robots: {
      index,
      follow: true,
      googleBot: {
        index,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: "Shivang Mokariya Portfolio",
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Node.js Developer, Full-Stack Developer, AI & Automation Engineer",
  description: DEFAULT_DESCRIPTION,
  knowsAbout: [
    "Node.js",
    "NestJS",
    "Express.js",
    "TypeScript",
    "MongoDB",
    "AWS",
    "Backend APIs",
    "Automation Engineering",
  ],
};

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: `${SITE_NAME} Profile`,
  url: absoluteUrl("/about"),
  description: DEFAULT_DESCRIPTION,
  mainEntity: {
    "@type": "Person",
    name: SITE_NAME,
    jobTitle:
      "Node.js Developer, Full-Stack Developer, AI & Automation Engineer",
    url: SITE_URL,
  },
};

export const workCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Projects and Work | ${SITE_NAME}`,
  url: absoluteUrl("/work"),
  description:
    "Selected software engineering and automation projects by Shivang Mokariya.",
  hasPart: [
    {
      "@type": "CreativeWork",
      name: "Multi-vendor management platform",
      description:
        "A centralized vendor management platform with nested hierarchy support and enterprise-grade control flows.",
      url: absoluteUrl("/work#vendor-management-platform"),
      keywords: ["Node.js", "PostgreSQL", "RBAC", "Backend APIs"],
    },
    {
      "@type": "CreativeWork",
      name: "RBAC and authentication systems",
      description:
        "Secure role-based access control systems with JWT-based authentication and permission mapping.",
      url: absoluteUrl("/work#rbac-authentication-systems"),
      keywords: ["Authentication", "JWT", "Express.js", "Security"],
    },
    {
      "@type": "CreativeWork",
      name: "Automated billing engine",
      description:
        "A billing engine focused on high-throughput invoicing, idempotency, and distributed reliability.",
      url: absoluteUrl("/work#automated-billing-engine"),
      keywords: ["TypeScript", "Redis", "Billing", "Distributed Systems"],
    },
  ],
};
