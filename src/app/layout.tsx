import type { Metadata } from "next";
import { Be_Vietnam_Pro, Space_Grotesk, Inter } from "next/font/google";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { Providers } from "@/components/Providers";
import { SmoothAnchorScroll } from "@/components/SmoothAnchorScroll";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  adjustFontFallback: true,
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-be-vietnam",
  /* Solo pesos usados en UI (evita 100/300 sin uso). */
  weight: ["400", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "ARCHITECT_OS // Portfolio",
  description: "Minimal technopunk developer portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0e0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", "antialiased", spaceGrotesk.variable, beVietnam.variable, "font-sans", inter.variable)}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden min-h-screen">
        <Providers>
          <SmoothAnchorScroll />
          {children}
          <DeferredAnalytics />
        </Providers>
      </body>
    </html>
  );
}
