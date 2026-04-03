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
  title: "SHIVANG_MOKARIYA // KERNEL_PORTFOLIO",
  description:
    "Full-Stack Developer & AI Automation Engineer. Architecting digital environments with structural logic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
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
