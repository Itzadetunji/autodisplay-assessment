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
  authors: [{ name: "AutoDisplay", url: "https://your-site.example" }],
  openGraph: {
    title: "AutoPrice — local on-road prices",
    description: "Find accurate on-road prices and specs for cars and bikes in Indian cities.",
    url: "https://example.com",
    siteName: "AutoPrice",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AutoPrice preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "icon", url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
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
