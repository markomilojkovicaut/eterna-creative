import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Eterna | No-Code App Development for Startups",
  description:
    "We build MVPs on Bubble.io. Fast, founder-friendly, and built to scale.",
  openGraph: {
    title: "Eterna | No-Code App Development for Startups",
    description:
      "We build MVPs on Bubble.io. Fast, founder-friendly, and built to scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} font-body`}>
      <body className="min-h-screen bg-bg-base">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
