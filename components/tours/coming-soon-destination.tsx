import { comingSoonDestinations } from "@/data/upcoming-destination";
import { ComingSoonCard } from "./coming-destination-card";

export function ComingSoonSection() {
  return (
    <section className="bg-gray-50/50 py-16 sm:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-opaque tracking-wider">
            COMING SOON
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comingSoonDestinations.map((destination) => (
            <ComingSoonCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}