import Image from "next/image";

type DestinationPageHeroProps = {
  title: string;
  imageUrl: string;
  altText?: string; // Optional alt text for better accessibility
};

export function DestinationPageHero({ title, imageUrl, altText }: DestinationPageHeroProps) {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] mt-28">
      {/* Background Image using next/image */}
      <Image
        src={imageUrl}
        alt={altText || `Panoramic view of ${title}`}
        fill
        className="object-cover"
        // The `priority` prop helps load this important image faster
        priority 
      />

      {/* Dark Overlay and Centered Title */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
        <h1 className="text-5xl font-bold tracking-widest text-white uppercase md:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
}