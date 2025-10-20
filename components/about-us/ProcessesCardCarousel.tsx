"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {EmblaOptionsType} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { featuresData } from "@/data/processes"; 
import { useMediaQuery } from "@/hooks/use-media-query"; 

import { CarouselControls } from "./CarouselControls";

// Define the responsive options for Embla
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TWEEN_FACTOR = 4.2;
const mobileOptions: EmblaOptionsType = { loop: false, align: 'start', slidesToScroll: 1 };
const desktopOptions: EmblaOptionsType = { loop: false, align: 'start', slidesToScroll: 1 };

export const ProcessesCarousel = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  
  // Conditionally select options based on screen size
  const options = isDesktop ? desktopOptions : mobileOptions;

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // This state management logic is almost identical to the previous version
  useEffect(() => {
    if (!emblaApi) return;

    setCount(emblaApi.scrollSnapList().length);
    setCurrent(emblaApi.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);


  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container w-[85%] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Process</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            A clear and simple path from idea to impact.
          </p>
        </div>

        {/* Embla Carousel Structure */}
        <div className="overflow-hidden my-4" ref={emblaRef}>
          <div className="py-4 flex items-stretch -ml-4">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col flex-shrink-0 flex-grow-0 basis-[90%] pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div
                  className="p-2 group h-full rounded-2xl shadow-lg flex flex-col bg-white transition-all duration-300 ease-in-out hover:bg-blue-600 hover:-translate-y-2"
                >
                  <div className="w-full h-[320px] bg-[#f5f5f5] flex items-center justify-center p-2 rounded-md">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className="w-[90%] mx-auto h-fit object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col p-10 pt-6">
                    <div className="w-fit px-3 py-1 flex items-center gap-3 mb-4 group-hover:bg-white rounded-lg">
                      <div className="flex items-center justify-center  rounded-full transition-colors duration-300 group-hover:text-blue-500">
                        Process
                      </div>
                      <span className="font-medium text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
                        {feature.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white">{feature.title}</h3>
                    <p className="leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-blue-100">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Controls: This part is identical to the previous version */}
        {/* <div className="flex items-center justify-center gap-6 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className={cn("bg-gray-200 hover:bg-gray-300 rounded-lg h-12 w-12", current === 0 && "opacity-50")}
              disabled={current === 0}
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Previous slide</span>
            </Button>
            
            <div className="flex items-center gap-3">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn( "h-2.5 w-2.5 rounded-full transition-all duration-300", current === index ? "bg-gray-900 w-5" : "bg-gray-300")}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className={cn("bg-black text-white hover:bg-gray-800 rounded-lg h-12 w-12", current === count - 1 && "opacity-50")}
              disabled={current === count - 1}
            >
              <ArrowRight className="h-5 w-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div> */}
        <CarouselControls api={emblaApi} current={current} count={count} />
      </div>
    </section>
  );
};