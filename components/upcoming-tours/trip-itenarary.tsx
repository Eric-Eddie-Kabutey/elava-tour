"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ItineraryDay } from "@/data/tour-dates";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

type TripItineraryProps = {
  itinerary: ItineraryDay[];
};

export function TripItinerary({ itinerary }: TripItineraryProps) {
  const [activeDay, setActiveDay] = useState(1);
  const [dialogContent, setDialogContent] = useState<ItineraryDay | null>(null);

  const currentDayData = itinerary.find((day) => day.day === activeDay);

  const handleReadMore = (dayData: ItineraryDay) => {
    setDialogContent(dayData);
  };

  const handlePrevDay = () => {
    setActiveDay((prev) => Math.max(1, prev - 1));
  };

  const handleNextDay = () => {
    setActiveDay((prev) => Math.min(itinerary.length, prev + 1));
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Trip Itinerary
        </h2>

        {/* Day Navigation */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevDay}
            disabled={activeDay === 1}
            aria-label="Previous day"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-6 overflow-x-auto pb-2">
            {itinerary.map((item) => (
              <button
                key={item.day}
                onClick={() => setActiveDay(item.day)}
                className={cn(
                  "py-2 text-gray-500 whitespace-nowrap",
                  activeDay === item.day && "border-b-2 border-custom-gold text-gray-900 font-semibold"
                )}
              >
                Day {item.day}
              </button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextDay}
            disabled={activeDay === itinerary.length}
            aria-label="Next day"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Itinerary Content */}
        {currentDayData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <Image
              src={currentDayData.imageUrl}
              alt={currentDayData.title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover aspect-[4/3]"
            />
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">{currentDayData.title}</h3>
              <p className="text-sm text-gray-500">{currentDayData.date}</p>
              <p className="text-md font-semibold">{currentDayData.location}</p>
              <h4 className="text-lg font-bold pt-2">{currentDayData.heading}</h4>
              <p className="text-gray-600 line-clamp-3">
                {currentDayData.description}
              </p>
              <Button
                variant="outline"
                className="border-custom-gold text-custom-gold hover:bg-custom-gold hover:text-white"
                onClick={() => handleReadMore(currentDayData)}
              >
                Read More
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* "Read More" Dialog (Popup) */}
      <Dialog open={!!dialogContent} onOpenChange={(isOpen) => !isOpen && setDialogContent(null)}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">{dialogContent?.heading}</DialogTitle>
            <DialogDescription>
              {dialogContent?.title} - Day {dialogContent?.day}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-gray-700 leading-relaxed whitespace-pre-wrap">
            {dialogContent?.description}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}