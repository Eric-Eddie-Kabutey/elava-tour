import { PackageDetail, PricingPackage, TourDate } from "@/data/tour-dates";
import { PackageInclusions } from "./package-inclusion";
import { TripPricingPackages } from "./trip-pricing-packages";

type TripPackageProps = {
  id: string; // For scrolling
  inclusions: PackageDetail[];
    exclusions: PackageDetail[];
    pricing: PricingPackage[];
  tourDetails: TourDate & { destinationName: string; year: number };
};

export function TripPackage({ id, inclusions, exclusions, pricing, tourDetails }: TripPackageProps) {
  return (
    <div id={id}>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Trip Package Details</h2>
          <p className="text-lg">
            Pricing, inclusions, exclusions, and the booking form will be displayed here.
          </p>
        </div>
      </section>

      {/* Render the new component here */}
      <PackageInclusions inclusions={inclusions} exclusions={exclusions} />

    {/* TODO! Temp rendering */}
    <TripPricingPackages packages={pricing} tourDetails={tourDetails} />
    </div>
  );
}