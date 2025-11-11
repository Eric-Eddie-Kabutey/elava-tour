'use client';

import { useState } from "react";
import { PricingPackage, TourDate } from "@/data/tour-dates";
import { PackageCard } from "./package-card";
import { BookingModal } from "./booking-modal";

type TripPackagesProps = {
  packages: PricingPackage[];
  tourDetails: TourDate & { destinationName: string; year: number };
};

export function TripPricingPackages({ packages, tourDetails }: TripPackagesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-green-opaque mb-8">
          Trip Packages
        </h2>
        <div className="space-y-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} onBookNow={() => setIsModalOpen(true)} />
          ))}
        </div>
      </div>

       {/* Render the modal, but it will only be visible when isModalOpen is true */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tourDetails={tourDetails}
      />
    </div>
  );
}