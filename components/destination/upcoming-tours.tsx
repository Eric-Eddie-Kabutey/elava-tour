"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DestinationDates } from "@/data/tour-dates"; 

type UpcomingToursProps = {
  tourData: DestinationDates[]; // The full array of all tour dates
  countryName: string;         // The name of the country to display
};

export function UpcomingTours({ tourData, countryName }: UpcomingToursProps) {    
      
  const destination = tourData.find(
    (d) => d.destinationName.toLowerCase().replace(/ /g, "-") === countryName
  );
  
  if (!destination) {
      // Render a "No dates available" message here
      console.log(`No tour dates found for country: ${countryName}`);
    return null;
  }

  return (
    <Drawer>
      <section className="bg-[#aa8924] text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            UPCOMING TOUR DATES
          </h2>
          <p className="text-gray-200 mb-12">
            Select a date below and book a trip to this destination.
          </p>

          <div className="space-y-12">
            {destination.years.map((yearData) => (
              <div key={yearData.year}>
                <h3 className="text-3xl font-semibold tracking-wider mb-6">
                  {yearData.year}
                </h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  {yearData.dates.map((dateRange, index) => (
                    <DrawerTrigger asChild key={index}>
                      <Button
                        variant="outline"
                        className="bg-white text-[#aa8924] font-semibold text-base px-6 py-5 rounded-md hover:bg-gray-100 hover:text-[#aa8928] min-w-[200px]"
                      >
                        {dateRange}
                      </Button>
                    </DrawerTrigger>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DrawerContent className="bg-white">
        <div className="mx-auto w-full max-w-sm text-center">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold">
              You&apos;ve Selected a Tour to {destination.destinationName}
            </DrawerTitle>
            <DrawerDescription className="text-lg">
              Ready to book your trip? Contact us to finalize your adventure!
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button className="bg-red-600 hover:bg-red-700">
              Proceed to Booking
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}