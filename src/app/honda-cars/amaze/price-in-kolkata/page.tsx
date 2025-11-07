import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IndianRupee, MapPin, Calendar, Star, Car, Fuel, Users, Gauge } from "lucide-react";

export default function HondaAmazePriceInKolkata() {
  const priceVariants = [
    { variant: "Honda Amaze E MT", price: "₹7,20,000", onRoadPrice: "₹8,15,000" },
    { variant: "Honda Amaze S MT", price: "₹8,00,000", onRoadPrice: "₹9,05,000" },
    { variant: "Honda Amaze VX MT", price: "₹9,00,000", onRoadPrice: "₹10,15,000" },
    { variant: "Honda Amaze VX CVT", price: "₹9,70,000", onRoadPrice: "₹10,95,000" },
  ];

  const specifications = [
    { label: "Engine", value: "1.2L i-VTEC Petrol", icon: <Car className="h-4 w-4" /> },
    { label: "Power", value: "89.5 bhp @ 6000 rpm", icon: <Gauge className="h-4 w-4" /> },
    { label: "Torque", value: "110 Nm @ 4800 rpm", icon: <Gauge className="h-4 w-4" /> },
    { label: "Mileage", value: "18.3 kmpl (MT) / 19.46 kmpl (CVT)", icon: <Fuel className="h-4 w-4" /> },
    { label: "Fuel Tank", value: "35 litres", icon: <Fuel className="h-4 w-4" /> },
    { label: "Seating", value: "5 persons", icon: <Users className="h-4 w-4" /> },
  ];

  const features = [
    "Honda SENSING Suite",
    "8-inch Touchscreen Infotainment",
    "Wireless Phone Charging",
    "Automatic Climate Control",
    "LED Headlights & DRLs",
    "6 Airbags",
    "Honda Connect 2.0",
    "Rear AC Vents",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h1 className="font-bold text-4xl text-primary">Honda Amaze Price in Kolkata</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>Kolkata, West Bengal</span>
            <Calendar className="ml-4 h-5 w-5" />
            <span>Updated: November 2025</span>
          </div>
        </div>

        {/* Price Cards */}
        <div className="grid gap-6 md:grid-cols-2">
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
                <Button className="w-full">Get Best Quote</Button>
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
            <CardDescription>Technical details of Honda Amaze 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-center justify-between border-border/50 border-b py-3">
                  <div className="flex items-center gap-2">
                    {spec.icon}
                    <span className="text-muted-foreground">{spec.label}:</span>
                  </div>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>Premium features available in Honda Amaze</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 rounded-lg bg-muted/50 p-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <Card>
          <CardHeader>
            <CardTitle>About Honda Amaze</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The Honda Amaze is a premium compact sedan that offers the perfect blend of style, comfort, and performance. With its spacious interiors, advanced safety features, and Honda&apos;s
              legendary reliability, the Amaze stands out in the competitive sedan segment.
            </p>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="font-bold text-2xl text-primary">19.46</div>
                <div className="text-muted-foreground text-sm">kmpl Mileage</div>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="font-bold text-2xl text-primary">89.5</div>
                <div className="text-muted-foreground text-sm">bhp Power</div>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="font-bold text-2xl text-primary">6</div>
                <div className="text-muted-foreground text-sm">Airbags</div>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="font-bold text-2xl text-primary">420L</div>
                <div className="text-muted-foreground text-sm">Boot Space</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Kolkata Specific Info */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Honda Amaze in Kolkata
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Kolkata, being a major metropolitan city, has excellent Honda service network with multiple dealerships across the city. The Honda Amaze is particularly popular among Kolkata customers
              for its comfort and fuel efficiency in city traffic.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">Popular Areas</h4>
                <p className="text-muted-foreground text-sm">Salt Lake, Park Street, Howrah, Jadavpur</p>
              </div>
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">Service Centers</h4>
                <p className="text-muted-foreground text-sm">15+ authorized service centers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="py-8 text-center">
            <h3 className="mb-4 font-bold text-2xl">Ready to Buy Honda Amaze?</h3>
            <p className="mb-6 text-muted-foreground">Get the best deals and financing options from authorized Honda dealers in Kolkata</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg">Find Dealers in Kolkata</Button>
              <Button size="lg" variant="outline">
                Schedule Test Drive
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
