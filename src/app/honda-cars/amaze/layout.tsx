import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honda Amaze - Price, Variants & Specifications | AutoDisplay",
  description: "Honda Amaze price in India. Check latest variants, on-road prices, specifications, features, mileage, and reviews. Find the best deals in your city.",
  keywords: ["Honda Amaze", "Honda Amaze price", "Honda sedan", "compact sedan India", "Honda Amaze specifications", "Honda Amaze variants", "Honda Amaze mileage", "Honda dealer"],
  openGraph: {
    title: "Honda Amaze - Latest Price & Specifications",
    description: "Check Honda Amaze price, variants, specifications, and features. Get accurate on-road prices for your city.",
    type: "website",
  },
};

export default function HondaAmazeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
