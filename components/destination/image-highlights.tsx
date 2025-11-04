import Image from "next/image";

interface ImageHighlightsProps { 
    tourImages: {
        id: number;
        src: string;
        alt: string;
    }[];
}

export function ImageHighlights({ tourImages }: ImageHighlightsProps) {
  if (!tourImages || tourImages.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-12" aria-label="Image Highlights">
      <div className="relative w-full overflow-hidden group flex">
        <div className="flex flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
          {tourImages.map((image) => (
            <div key={image.id} className="w-[40vw] sm:w-[30vw] md:w-[25vw] flex-shrink-0 mx-2">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover aspect-[4/3] rounded-lg"
              />
            </div>
          ))}
        </div>
    
        <div className="flex flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          {tourImages.map((image) => (
            <div key={`${image.id}-clone`} className="w-[40vw] sm:w-[30vw] md:w-[25vw] flex-shrink-0 mx-2">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover aspect-[4/3] rounded-lg"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}