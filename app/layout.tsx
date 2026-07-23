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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eternacreative.com"
  ),
  title: "Eterna | AI-native product studio",
  description:
    "Custom applications, websites, and AI automations - spec first, flat scope, from idea to revenue.",
  openGraph: {
    title: "Eterna | AI-native product studio",
    description:
      "Custom applications, websites, and AI automations - spec first, flat scope, from idea to revenue.",
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
