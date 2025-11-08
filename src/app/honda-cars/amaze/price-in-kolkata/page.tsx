import { Calendar, Check, IndianRupee, MapPin } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { connectToDatabase } from "@/lib/mongodb";
import VehicleModel from "@/models/Vehicle";
import type { VehicleDocument } from "@/types/vehicle";

async function getVehicleData(): Promise<VehicleDocument | null> {
  try {
    await connectToDatabase();

    const vehicle: VehicleDocument | null = await VehicleModel.findOne({
      slug: "honda-amaze",
    }).lean();

    return vehicle;
  } catch (error) {
    console.error("Error fetching Honda Amaze:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const vehicle = await getVehicleData();

  if (!vehicle) {
    return {
      title: "Vehicle Not Found | AutoDisplay",
      description: "The requested vehicle information could not be found.",
    };
  }

  // Remember to get the maxPrice and minPrice using the math functions

  const minPrice = Math.min(...vehicle.variants.map((v) => v.prices?.kolkata?.exShowroom || 0));
  const maxPrice = Math.max(...vehicle.variants.map((v) => v.prices?.kolkata?.exShowroom || 0));

  return {
    title: `${vehicle.modelName} Price in Kolkata 2024 - ₹${minPrice.toLocaleString("en-IN")} to ₹${maxPrice.toLocaleString("en-IN")} | AutoDisplay`,
    description: `${vehicle.modelName} price in Kolkata starts from ₹${minPrice.toLocaleString("en-IN")} (ex-showroom). Check on-road price, variants, specifications, features and latest offers. ${vehicle.about.slice(0, 100)}...`,
    keywords: [
      `${vehicle.modelName} price`,
      `${vehicle.modelName} Kolkata price`,
      `${vehicle.modelName} West Bengal price`,
      `${vehicle.modelName} on-road price`,
      `${vehicle.modelName} variants`,
      `${vehicle.modelName} specifications`,
      "Honda Amaze price Kolkata",
      "car price Kolkata",
      "Honda cars",
      "sedan price",
    ],
    openGraph: {
      title: `${vehicle.modelName} Price in Kolkata 2024 - Starting ₹${minPrice.toLocaleString("en-IN")}`,
      description: `${vehicle.modelName} price in Kolkata starts from ₹${minPrice.toLocaleString("en-IN")} (ex-showroom).`,
      url: "https://autodisplay-assessment.vercel.app/honda-cars/amaze/price-in-kolkata",
      siteName: "AutoDisplay",
      images: [
        {
          url: "https://autodisplay-assessment.vercel.app/vehicles/honda-amaze.png",
          width: 800,
          height: 800,
          alt: `${vehicle.modelName}`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${vehicle.modelName} Price in Kolkata - ₹${minPrice.toLocaleString("en-IN")}+`,
      description: `Check ${vehicle.modelName} variants, specifications, and on-road prices in Kolkata. ${vehicle.variants.length} variants available.`,
      images: ["https://autodisplay-assessment.vercel.app/vehicles/honda-amaze.png"],
    },
  };
}

export default async function HondaAmazePriceInKolkata() {
  const vehicle = await getVehicleData();

  if (!vehicle) {
    notFound();
  }

  const variants = vehicle.variants;

  // Get all unique features from all variants
  const getAllUniqueFeatures = (variants: VehicleDocument["variants"]) => {
    const allFeatures = variants.flatMap((v) => v.features);
    return Array.from(new Set(allFeatures));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h1 className="font-bold text-4xl text-primary">{vehicle.modelName} Price in Kolkata</h1>
          <div className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Kolkata, West Bengal</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="ml-4 h-5 w-5" />
              <span>
                Updated:{" "}
                {new Intl.DateTimeFormat("en-IN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                  timeZone: "Asia/Kolkata",
                }).format(new Date(vehicle?.updatedAt))}
              </span>
            </div>
          </div>
        </div>

        <Card className="overflow-hidden py-0">
          <div className="relative h-[400px] w-full overflow-hidden rounded-md">
            <Image src="/vehicles/honda-amaze.png" alt={vehicle.modelName} fill className="rounded-md object-contain p-8" priority />
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {variants.map((variant, index) => {
            const variantPrice = variant.prices?.kolkata;

            return (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <IndianRupee className="h-5 w-5" />
                    {vehicle.modelName} {variant.name}
                    {variant.transmission && <span className="text-muted-foreground text-sm">({variant.transmission})</span>}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-end space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">Ex-showroom Price:</span>
                      <span className="font-semibold text-lg">₹{variantPrice?.exShowroom.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">On-road Price (Est.):</span>
                      <span className="font-bold text-primary text-xl">₹{variantPrice?.onRoadPrice.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Comparison Table */}
        <Card>
          <CardHeader>
            <CardTitle>Features Comparison</CardTitle>
            <CardDescription>Compare features across all Honda Amaze variants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="sticky left-0 z-10 bg-background p-4 text-left font-semibold">Feature</th>
                    {variants.map((variant, index) => (
                      <th key={index} className="min-w-[120px] p-4 text-center font-semibold">
                        {variant.name}
                        <br />
                        <span className="font-normal text-muted-foreground text-xs">({variant.transmission})</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {getAllUniqueFeatures(variants).map((feature, featureIndex) => (
                    <tr key={featureIndex} className="border-b hover:bg-muted/50">
                      <td className="sticky left-0 z-10 bg-background p-4 text-sm">{feature}</td>
                      {variants.map((variant, variantIndex) => (
                        <td key={variantIndex} className="p-4 text-center">
                          {variant.features.includes(feature) ? <Check className="mx-auto h-5 w-5 text-green-600" /> : <span className="text-muted-foreground">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Specifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">Key Specifications</CardTitle>
            <CardDescription>Technical details of Honda Amaze 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {specifications(vehicle).map((spec, index) => (
                <div key={index} className="flex items-center justify-between border-border/50 border-b py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">{spec.label}:</span>
                  </div>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <Card>
          <CardHeader>
            <CardTitle>About {vehicle.modelName}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{vehicle.about}</p>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="flex flex-col justify-center rounded-lg bg-muted/50 p-4 text-center">
                <div className="font-bold text-2xl text-primary">{vehicle.performance.mileage}</div>
                <div className="text-muted-foreground text-sm">Mileage</div>
              </div>
              <div className="flex flex-col justify-center rounded-lg bg-muted/50 p-4 text-center">
                <div className="font-bold text-2xl text-primary">{vehicle.performance.power.split("@")[0].trim()}</div>
                <div className="text-muted-foreground text-sm">Power</div>
              </div>
              <div className="flex flex-col justify-center rounded-lg bg-muted/50 p-4 text-center">
                <div className="font-bold text-2xl text-primary">{variants.length}</div>
                <div className="text-muted-foreground text-sm">Variants</div>
              </div>
              <div className="flex flex-col justify-center rounded-lg bg-muted/50 p-4 text-center">
                <div className="font-bold text-2xl text-primary">{vehicle.engine.displacement}</div>
                <div className="text-muted-foreground text-sm">Engine</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const specifications = (vehicle: VehicleDocument) => [
  { label: "Engine", value: vehicle.engine.displacement },
  { label: "Engine Type", value: vehicle.engine.type },
  { label: "Power", value: vehicle.performance.power },
  { label: "Torque", value: vehicle.performance.torque },
  { label: "Mileage", value: vehicle.performance.mileage },
  { label: "Category", value: vehicle.category.charAt(0).toUpperCase() + vehicle.category.slice(1) },
];
