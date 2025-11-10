"use client";

import { useCallback } from "react";
import { type EmblaCarouselType } from "embla-carousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselControlsProps = {
  api: EmblaCarouselType | undefined;
  current: number;
  count: number;
};

export const CarouselControls = ({ api, current, count }: CarouselControlsProps) => {
  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  if (count === 0) return null; // Don't render if there are no slides

  // Calculate the progress of the dark line
  const progress = count > 1 ? (current / (count - 1)) * 100 : 0;

  return (
    <div className="w-full max-w-xs mx-auto mt-12">
      {/* Progress Bar and Dots */}
      <div className="relative h-10 flex items-center">
        {/* Gray background line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300" />
        {/* Dark progress line */}
        <div
          className="absolute top-1/2 left-0 h-px bg-green-opaque transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
        {/* Dots container */}
        <div className="relative w-full flex justify-between">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-3 w-3 rounded-full transition-colors duration-300",
                index <= current ? "bg-yellow-opaque" : "bg-gray-300"
              )}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Add a larger invisible click area for better UX */}
              <span className="absolute -inset-2" />
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className={cn("bg-gray-300 hover:bg-gray-400 rounded-lg h-12 w-12", current === 0 && "opacity-50 cursor-not-allowed")}
          disabled={current === 0}
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <div className="w-12 h-px bg-gray-300 border-dashed border-t-2 border-gray-300" />

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className={cn("bg-yellow-opaque text-white hover:bg-gray-800 rounded-lg h-12 w-12", current === count - 1 && "opacity-50 cursor-not-allowed")}
          disabled={current === count - 1}
        >
          <ArrowRight className="h-5 w-5" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
};