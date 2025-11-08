import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex min-h-[60vh] items-center justify-center">
        <Card className="max-w-md text-center">
          <CardHeader>
            <CardTitle className="text-2xl text-destructive">Vehicle Not Found</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">Sorry, the vehicle information you're looking for could not be found.</p>
            <div className="space-y-2">
              <Link href="/" className="inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90">
                Go Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
