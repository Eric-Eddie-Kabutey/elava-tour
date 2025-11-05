import { PricingPackage } from "@/data/tour-dates";
import { PackageCard } from "./package-card";

type TripPackagesProps = {
  packages: PricingPackage[];
};

export function TripPricingPackages({ packages }: TripPackagesProps) {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Trip Packages
        </h2>
        <div className="space-y-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}