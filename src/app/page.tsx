import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-stretch justify-between gap-12 rounded-xl bg-white px-16 py-28 sm:items-start dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="font-bold text-3xl">Welcome To AutoDisplay 👋🏾</h1>
        </div>
        <div className="flex w-full flex-col items-stretch gap-4 font-medium text-base sm:flex-row">
          <Link href="/hero-splendor-plus/price-in-delhi" className="flex flex-1 flex-col gap-4">
            <Image src="/vehicles/hero-splendor.png" width={426} height={230} alt="Hero Splendor" className="flex-1 rounded-md object-cover" loading="eager" />
            <Button size="lg" variant="outline" className="h-fit py-1.5">
              Hero Splendor
            </Button>
          </Link>
          <Link href="/honda-cars/amaze/price-in-kolkata" className="flex flex-1 flex-col gap-4">
            <Image src="/vehicles/honda-amaze.png" width={426} height={230} alt="Hero Splendor" className="flex-1 rounded-md object-cover" loading="eager" />
            <Button size="lg" variant="outline" className="h-fit py-1.5">
              Honda Amaze
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
