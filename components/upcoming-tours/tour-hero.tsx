"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BrochureDownloadModal } from "./brochure-download-modal";

type TourHeroProps = {
  title: string;
  imageUrl: string;
  brochureUrl: string;
  bookingSectionId: string; // The ID of the section to scroll to
};

export function TourHero({
  title,
  imageUrl,
  brochureUrl,
  bookingSectionId,
}: TourHeroProps) {
     const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
    

  const handleBookNowClick = () => {
    const section = document.getElementById(bookingSectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <section className="relative w-full h-[60vh] md:h-[75vh] text-white">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={`Hero image for ${title}`}
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="relative h-full container max-w-6xl mx-auto px-4">
        <div className="absolute bottom-10 left-4 right-4 flex flex-col md:flex-row justify-between items-end gap-8">
          
          {/* Bottom Left: Title */}
          <h1 className="text-4xl md:text-4xl font-semibold text-shadow-md">
            {title}
          </h1>

          {/* Bottom Right: Action Card */}
          <div className="bg-white text-gray-800 -mb-28 md:-mb-12 p-6 rounded-lg shadow-2xl w-full max-w-xs mx-auto md:mx-0 text-center">
            <h2 className="text-xl font-semibold mb-4">Get Started</h2>
            <div className="flex flex-col gap-3">
              <Button
                onClick={handleBookNowClick}
                className="bg-custom-gold hover:bg-custom-gold/90 text-white font-bold py-3"
              >
                Book Now
              </Button>
              <Button
                onClick={() => setIsBrochureModalOpen(true)}
                className="bg-custom-gold hover:bg-custom-gold/90 text-white font-bold py-3"
              >
                  Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      {/* conditional render brochure download modal */}
      <BrochureDownloadModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        tourTitle={title}
        brochureUrl={brochureUrl}
      />

    </>
  );
}