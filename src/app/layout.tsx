import Navbar from "@/components/navbar";
import QueryProvider from "@/providers/query-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoDisplay",
  description: "Car and bike price listings and local on-road estimates for Indian cities.",
  applicationName: "AutoDisplay",
  keywords: ["car prices", "bike prices", "auto dealers", "on-road price", "India"],
  authors: [{ name: "AutoDisplay", url: "https://autodisplay-assessment.vercel.app/" }],
  openGraph: {
    title: "AutoDisplay, local on-road prices",
    description: "Find accurate on-road prices and specs for cars and bikes in Indian cities.",
    url: "https://autodisplay-assessment.vercel.app/",
    siteName: "AutoDisplay",
    images: [
      {
        url: "https://autodisplay-assessment.vercel.app/_next/image?url=%2Fvehicles%2Fhero-splendor.png&w=640&q=75",
        width: 1200,
        height: 700,
        alt: "Hero Splendor",
      },
      {
        url: "https://autodisplay-assessment.vercel.app/_next/image?url=%2Fvehicles%2Fhonda-amaze.png&w=640&q=75",
        width: 800,
        height: 600,
        alt: "Hero Amaze",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}>
        <QueryProvider>
          <Navbar />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
