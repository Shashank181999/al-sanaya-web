import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SocialSidebar } from "@/components/SocialSidebar";
import { ChatWidget } from "@/components/ChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://al-sanaya-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Al Sanaya Technical Equipment L.L.C",
    template: "%s — Al Sanaya",
  },
  description:
    "Trading and contracting partner for the supply, testing & commissioning of electrical and mechanical equipment to oil & gas, utilities and construction across the GCC.",
  keywords: [
    "Al Sanaya",
    "Technical Equipment",
    "Linkk busduct",
    "Megaduct",
    "busduct UAE",
    "electrical contracting GCC",
    "Abu Dhabi electrical supplier",
    "oil and gas equipment",
  ],
  authors: [{ name: "Al Sanaya Technical Equipment L.L.C" }],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "Al Sanaya Technical Equipment L.L.C",
    title: "Al Sanaya Technical Equipment L.L.C",
    description:
      "Supply, testing & commissioning of electrical and mechanical equipment across the GCC. Authorized partner for Linkk and Megaduct busduct systems.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Al Sanaya Technical Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Sanaya Technical Equipment L.L.C",
    description:
      "Supply, testing & commissioning of electrical and mechanical equipment across the GCC.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: siteUrl },
};

export const viewport = {
  themeColor: "#213f7e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Header />
        <SocialSidebar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
