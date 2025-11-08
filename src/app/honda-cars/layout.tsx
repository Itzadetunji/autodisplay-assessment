import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honda Cars - Models, Price & Specifications | AutoDisplay",
  description: "Honda Cars in India. Check latest models, on-road prices, specifications, features, and reviews. Find Honda cars price in your city.",
  keywords: ["Honda cars", "Honda car price", "Honda models India", "Honda specifications", "Honda Amaze", "Honda City", "Honda dealer", "car price India"],
  openGraph: {
    title: "Honda Cars - Latest Models & Prices in India",
    description: "Explore Honda cars price, models, specifications, and features. Get accurate on-road prices for Honda vehicles in your city.",
    type: "website",
  },
};

export default function HondaCarsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
