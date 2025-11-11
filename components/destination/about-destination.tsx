"use client"; 

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type AboutDestinationProps = {
  title: string;  
  description: string[]; // accept an array of paragraphs for flexibility
  bookNowLink: string;
  funFactsLink: string;
};

export function AboutDestination({
  title,
  description,
  bookNowLink,
  funFactsLink,
}: AboutDestinationProps) {
  const router = useRouter();

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </button>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-semibold uppercase text-green-opaque mb-8">
          {title}
        </h3>

        {/* Description Paragraphs */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-yellow-opaque hover:bg-green-opaque text-green-opaque hover:text-yellow-opaque px-8 py-2.5">
            <Link href={bookNowLink}>BOOK NOW</Link>
          </Button>
          <Button asChild className="border border-yellow-opaque bg-transparent text-green-opaque hover:bg-yellow-opaque hover:text-green-opaque px-8 py-2.5">
            <Link href={funFactsLink}>FUN FACTS</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}