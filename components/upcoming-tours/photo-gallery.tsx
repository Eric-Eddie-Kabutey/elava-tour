"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/tour-dates";

// Import the lightbox and its styles
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


// Import the zoom plugin
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/zoom.css";

type PhotoGalleryProps = {
  images: GalleryImage[];
};

export function PhotoGallery({ images }: PhotoGalleryProps) {
  // Use -1 to represent that the lightbox is closed
  const [index, setIndex] = useState(-1);

  return (
    <section className="bg-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Photo Gallery
        </h2>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <button
              key={image.id}
              className="relative aspect-video w-full h-full overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              onClick={() => setIndex(i)} // Open the lightbox at the clicked image's index
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </button>
          ))}
        </div>

        {/* Lightbox Component */}
        <Lightbox
          // State to open/close the lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          
          // The image to display
          index={index}
          
          // The array of all images
          slides={images}
          
          // Enable the zoom plugin
          plugins={[Zoom]}
        />
      </div>
    </section>
  );
}