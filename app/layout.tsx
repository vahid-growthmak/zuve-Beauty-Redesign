import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { CartSheet } from "@/components/site/cart-sheet";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zuve Beauty — Salon-Quality Press-On Nails, Reusable & Made in India",
  description:
    "An editorial press-on nail house. Reusable soft-gel manicures, considered shapes, and a curated edit of seasonal shades. Free shipping above ₹1,500.",
  openGraph: {
    title: "Zuve Beauty",
    description: "An editorial press-on nail house. Reusable soft-gel manicures.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans bg-bone text-ink antialiased">
        <AnnouncementBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <CartSheet />
        <WhatsAppFab />
      </body>
    </html>
  );
}
