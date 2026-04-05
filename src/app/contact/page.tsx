import { ContactPageClient } from "@/components/pages/ContactPageClient";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Shivang Mokariya for Node.js development, full-stack product work, backend APIs, and AI automation projects.",
  path: "/contact",
  keywords: ["hire Node.js developer", "contact full-stack developer"],
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactPageClient />
    </>
  );
}
