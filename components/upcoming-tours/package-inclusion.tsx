import { PackageDetail } from "@/data/tour-dates";
import { InclusionItem } from "./inclusive-items";

type PackageInclusionsProps = {
  inclusions: PackageDetail[];
  exclusions: PackageDetail[];
};

export function PackageInclusions({ inclusions, exclusions }: PackageInclusionsProps) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Trip Includes Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-opaque mb-6">Trip Includes</h2>
          <div className="flex flex-col">
            {inclusions.map((item) => (
              <InclusionItem
                key={item.label}
                type="included"
                label={item.label}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Trip Does Not Include Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Does Not Include</h2>
          <div className="flex flex-col">
            {exclusions.map((item) => (
              <InclusionItem
                key={item.label}
                type="excluded"
                label={item.label}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}