import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DestinationDates } from "@/data/tour-dates";

type UpcomingToursProps = {
  upcomingTourData: DestinationDates[];  
  countrySlug: string;
};

export function UpcomingTours({ upcomingTourData, countrySlug }: UpcomingToursProps) {        
  // Find the destination data using the unique slug
    const destination = upcomingTourData.find(
    (d) => d.destinationSlug.toLowerCase() === countrySlug.toLowerCase()
    );
        

  // Handle case where no dates are found
  if (!destination) {
    return (
      <section className="bg-yellow-opaque text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
            <p className="text-yellow-opaque text-xl md:text-2xl">No upcoming tour dates available for this destination.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-yellow-opaque text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-opaque uppercase tracking-wider mb-4">
          UPCOMING TOUR DATES
        </h2>
        <p className="text-white mb-12">
          Select a date below and book a trip to this destination.
        </p>

        <div className="space-y-12">
          {destination.years.map((yearData) => (
            <div key={yearData.year}>
              <h3 className="text-3xl font-semibold tracking-wider mb-6">
                {yearData.year}
              </h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                {yearData.dates.map((date) => (
                  // The button now wraps a Link component
                  <Button
                    asChild
                    key={date.id}
                    variant="outline"
                    className="bg-green-opaque text-yellow-opaque font-semibold text-base px-5 py-4 hover:bg-gray-100 hover:text-green-opaque min-w-[200px]"
                  >
                    <Link href={`/upcoming-tours/${date.slug}`}>
                      {date.displayDate}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}