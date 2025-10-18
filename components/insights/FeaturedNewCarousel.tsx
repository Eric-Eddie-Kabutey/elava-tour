"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel  from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay"; 

import { postsData } from "@/data/news"; 
import { FeaturedNewsCard } from "./FeaturedNewsCard";

// Embla options: infinite loop, show one slide at a time
const emblaOptions: EmblaOptionsType = {
  loop: true,
  align: 'start',
};

// Filter the data to get only featured posts
const featuredPosts = postsData.filter(post => post.featured);

export const FeaturedNewsCarousel = () => {
  const autoplayOptions = {
    delay: 4000, // The delay in milliseconds between slides
    stopOnInteraction: false, // Continue autoplay after user interaction
    stopOnMouseEnter: true, // Pause autoplay when the user hovers over the carousel
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [Autoplay(autoplayOptions)]);
  
  // State to track the carousel's status
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [current, setCurrent] = useState(0);

  // Hook into the Embla API to keep our state in sync
  useEffect(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
    
    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);


  // Don't render the carousel if there are no featured posts
  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-[#f0f8ff]">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex-shrink-0 flex-grow-0 basis-full min-w-0 p-2"
                >
                  <FeaturedNewsCard post={post} />
                </div>
              ))}
            </div>
          </div>                   
        </div>
      </div>
    </section>
  );
};