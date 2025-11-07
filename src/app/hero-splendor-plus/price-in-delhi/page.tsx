import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IndianRupee, MapPin, Calendar, Star } from "lucide-react";

export default function HeroSplendorPlusPriceInDelhi() {
  const priceVariants = [
    { variant: "Hero Splendor Plus Standard", price: "₹74,990", onRoadPrice: "₹85,000" },
    { variant: "Hero Splendor Plus Kick Start", price: "₹73,490", onRoadPrice: "₹83,500" },
    { variant: "Hero Splendor Plus Self Start", price: "₹76,490", onRoadPrice: "₹86,500" },
  ];

  const specifications = [
    { label: "Engine", value: "97.2cc, Air-cooled, Single cylinder" },
    { label: "Power", value: "8.02 bhp @ 8000 rpm" },
    { label: "Torque", value: "8.05 Nm @ 6000 rpm" },
    { label: "Mileage", value: "80-90 kmpl" },
    { label: "Fuel Tank", value: "9.8 litres" },
    { label: "Kerb Weight", value: "112 kg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h1 className="font-bold text-4xl text-primary">Hero Splendor Plus Price in Delhi</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>Delhi, India</span>
            <Calendar className="ml-4 h-5 w-5" />
            <span>Updated: November 2025</span>
          </div>
        </div>

        {/* Price Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {priceVariants.map((variant, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <IndianRupee className="h-5 w-5" />
                  {variant.variant}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">Ex-showroom Price:</span>
                    <span className="font-semibold text-lg">{variant.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">On-road Price (Est.):</span>
                    <span className="font-bold text-primary text-xl">{variant.onRoadPrice}</span>
                  </div>
                </div>
                <Button className="w-full">Get Best Price</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-6 w-6" />
              Key Specifications
            </CardTitle>
            <CardDescription>Technical details of Hero Splendor Plus</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-center justify-between border-border/50 border-b py-2">
                  <span className="text-muted-foreground">{spec.label}:</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card>
          <CardHeader>
            <CardTitle>About Hero Splendor Plus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The Hero Splendor Plus is one of India&apos;s most popular commuter motorcycles, known for its exceptional fuel efficiency, reliability, and affordability. With its proven 97.2cc engine,
              the Splendor Plus delivers excellent mileage of up to 90 kmpl, making it perfect for daily commuting.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="font-bold text-2xl text-primary">90 kmpl</div>
                <div className="text-muted-foreground text-sm">Mileage</div>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="font-bold text-2xl text-primary">8.02 bhp</div>
                <div className="text-muted-foreground text-sm">Power</div>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="font-bold text-2xl text-primary">112 kg</div>
                <div className="text-muted-foreground text-sm">Weight</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="py-8 text-center">
            <h3 className="mb-4 font-bold text-2xl">Interested in Hero Splendor Plus?</h3>
            <p className="mb-6 text-muted-foreground">Get the best deals and offers from authorized Hero dealers in Delhi</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg">Find Dealers</Button>
              <Button size="lg" variant="outline">
                Book Test Ride
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
