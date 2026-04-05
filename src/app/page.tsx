import { HomePageClient } from "@/components/pages/HomePageClient";
import { StructuredData } from "@/components/StructuredData";
import { buildMetadata, personJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Node.js Developer, Full-Stack Developer & AI Automation Engineer",
  description:
    "Explore the portfolio of Shivang Mokariya, a Node.js Developer, Full-Stack Developer, and AI & Automation Engineer building backend APIs, web platforms, and automation systems.",
  path: "/",
  keywords: [
    "portfolio",
    "personal website",
    "backend developer",
    "automation engineer",
  ],
});

export default function HomePage() {
  return (
    <>
      <StructuredData data={[websiteJsonLd, personJsonLd]} />
      <HomePageClient />
    </>
  );
}
