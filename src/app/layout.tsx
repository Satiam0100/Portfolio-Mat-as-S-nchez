import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Be_Vietnam_Pro, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-be-vietnam",
  weight: ["100", "300", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "ARCHITECT_OS // Portfolio",
  description: "Minimal technopunk developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${beVietnam.variable} antialiased`}
    >
      <body className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
