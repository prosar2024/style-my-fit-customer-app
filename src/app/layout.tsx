import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/ui/molecules/Navbar";
import ScrollToTop from "@/components/ui/atoms/scollToTop";
import "./globals.css";
import Footer from "@/components/ui/molecules/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fit My Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar />
          <div className="h-2 bg-gradient-to-r from-brand-100 to-brand-200"></div>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
