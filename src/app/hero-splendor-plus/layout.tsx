import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero Splendor Plus: Price, Variants & Specifications | AutoDisplay",
  description: "Hero Splendor Plus price in India. Check latest variants, on-road prices, specifications, features, mileage, and reviews. Find the best deals in your city.",
  keywords: ["Hero Splendor Plus", "Hero Splendor Plus price", "Hero motorcycle", "bike price India", "Hero Splendor specifications", "motorcycle variants", "bike mileage", "Hero dealer"],
  openGraph: {
    title: "Hero Splendor Plus: Latest Price & Specifications",
    description: "Check Hero Splendor Plus price, variants, specifications, and features. Get accurate on-road prices for your city.",
    type: "website",
  },
};

export default function HeroSplendorPlusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
