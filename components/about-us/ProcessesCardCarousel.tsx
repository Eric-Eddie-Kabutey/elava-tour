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
      <div className="max-container w-[95%] mx-auto px-4 xl:px-0 2xl:px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-opaque">Our Process</h2>
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
                className="flex flex-col flex-shrink-0 flex-grow-0 basis-[90%] pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div
                  className="p-2 group h-full rounded-2xl shadow-lg flex flex-col bg-white transition-all duration-300 ease-in-out hover:bg-yellow-opaque hover:-translate-y-2"
                >
                  <div className="w-full md:h-[320px] sm:h-[250px] h-[300px] bg-[#f5f5f5] flex items-center justify-center p-2 rounded-md">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className="w-[85%] mx-auto h-fit object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col xl:p-10 md:p-5 p-3 pt-6">
                    <div className="w-fit px-3 py-1 flex items-center gap-3 mb-4 group-hover:bg-white rounded-lg">
                      <div className="flex items-center justify-center  rounded-full transition-colors duration-300 group-hover:text-green-opaque w-8 h-8 bg-blue-100 group-hover:bg-yellow-opaque">
                        Process {" "}
                      </div>
                      <span className="font-medium text-green-opaque transition-colors duration-300 group-hover:text-blue-700">
                         {feature.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-green-opaque">{feature.title}</h3>
                    <p className="leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
        <CarouselControls api={emblaApi} current={current} count={count} />
      </div>
    </section>
  );
};