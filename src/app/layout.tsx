import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { Scanline } from "@/components/Scanline";
import { MobileNav } from "@/components/MobileNav";
import { CustomCursor } from "@/components/CustomCursor";
import { UIProvider } from "@/context/UIContext";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  GOOGLE_SITE_VERIFICATION,
  SITE_NAME,
  SITE_TITLE_SUFFIX,
  SITE_URL,
} from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Shivang Mokariya | Node.js Developer, Full-Stack Developer & AI Automation Engineer",
    template: `%s | ${SITE_TITLE_SUFFIX}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "Shivang Mokariya | Node.js Developer, Full-Stack Developer & AI Automation Engineer",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Shivang Mokariya portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Shivang Mokariya | Node.js Developer, Full-Stack Developer & AI Automation Engineer",
    description: DEFAULT_DESCRIPTION,
    images: ["/twitter-image"],
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-surface text-on-surface font-body antialiased`}
      >
        <UIProvider>
          <Navbar />
          <div className="flex min-h-screen pt-14">
            <Sidebar />
            <main className="flex-1 lg:ml-64">{children}</main>
          </div>
          <Footer />
          <MobileNav />
          <Scanline />
          <CustomCursor />
        </UIProvider>
      </body>
    </html>
  );
}
