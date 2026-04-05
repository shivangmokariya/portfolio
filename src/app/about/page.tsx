import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";
import {
  breadcrumbJsonLd,
  buildMetadata,
  profilePageJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Shivang Mokariya, a Node.js Developer, Full-Stack Developer, and AI & Automation Engineer focused on scalable web platforms and backend systems.",
  path: "/about",
  keywords: [
    "about Shivang Mokariya",
    "backend engineer",
    "full-stack engineer portfolio",
  ],
  type: "profile",
});

const principles = [
  {
    title: "Backend systems first",
    description:
      "I enjoy building reliable Node.js services, TypeScript APIs, and business logic that can support real growth.",
  },
  {
    title: "Full-stack delivery",
    description:
      "I care about the full user journey, from database design and API contracts to the frontend experience that ships to production.",
  },
  {
    title: "Automation with intent",
    description:
      "I use AI and automation where they create leverage, especially in workflow orchestration, tooling, and team productivity.",
  },
];

export default function AboutPage() {
  return (
    <div className="p-6 md:p-12 max-w-6xl">
      <StructuredData
        data={[
          profilePageJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />

      <header className="max-w-4xl mb-12">
        <p className="font-mono text-primary-container text-xs uppercase tracking-[0.2em] mb-4">
          Profile / Engineering background
        </p>
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-6">
          About Shivang Mokariya
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          I am a Node.js Developer, Full-Stack Developer, and AI &amp; Automation
          Engineer focused on building software that is both technically solid and
          practical for teams to operate. My work spans backend APIs, admin
          platforms, workflow automation, and modern web interfaces.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="border border-outline-variant/20 bg-surface-container-low p-6"
          >
            <h2 className="font-headline text-2xl font-bold mb-3">
              {principle.title}
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              {principle.description}
            </p>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <article className="border border-outline-variant/20 bg-surface-container p-8">
          <h2 className="font-headline text-2xl font-bold mb-4">Core focus areas</h2>
          <ul className="space-y-3 text-sm text-on-surface-variant leading-relaxed">
            <li>Node.js, NestJS, and Express.js applications for backend APIs and business platforms.</li>
            <li>TypeScript-driven full-stack systems with clear contracts, predictable behavior, and maintainable code.</li>
            <li>MongoDB, PostgreSQL, and Redis for high-availability application data and caching layers.</li>
            <li>AWS-ready architecture and automation workflows for real-world deployment needs.</li>
          </ul>
        </article>

        <article className="border border-outline-variant/20 bg-surface-container p-8">
          <h2 className="font-headline text-2xl font-bold mb-4">How I work</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
            I prefer clean architecture, clear documentation, and thoughtful
            interfaces between services. Whether I am building a custom admin
            panel, integrating payments, or designing an automation workflow, I
            try to keep performance, accessibility, and long-term maintainability
            in view from the beginning.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/work"
              className="text-primary-container hover:underline font-mono text-xs uppercase"
            >
              View projects and implementation examples
            </Link>
            <Link
              href="/skills"
              className="text-primary-container hover:underline font-mono text-xs uppercase"
            >
              Review technical skills and stack
            </Link>
          </div>
        </article>
      </section>

      <section className="border border-outline-variant/20 bg-surface-container-low p-8 max-w-4xl">
        <h2 className="font-headline text-2xl font-bold mb-4">
          Looking for a developer for backend, full-stack, or automation work?
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
          If you need help with a Node.js product, backend API architecture,
          TypeScript application delivery, or AI workflow automation, the best
          next step is to share your project details through the contact page.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-5 py-3 font-headline font-bold text-sm"
        >
          Contact Shivang
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" strokeLinecap="round" />
            <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
