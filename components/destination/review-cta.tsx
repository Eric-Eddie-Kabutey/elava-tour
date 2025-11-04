import Link from "next/link";
import { Button } from "@/components/ui/button";

type ReviewsCtaProps = {  
  linkHref?: string;
};

export function ReviewsCta({ linkHref = "/testimonials" }: ReviewsCtaProps) {
  return (
    // The main section with the custom-gold background
    <section className="bg-[#aa8924] text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        {/* A max-width wrapper to keep content centered and readable on large screens */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            OUR REVIEWS
          </h2>
          <p className="text-lg mb-8">
            Click the widget below to see the recommendations from our previous
            tours.
          </p>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 font-semibold uppercase tracking-wide px-10 py-3 text-base"
          >
            <Link href={linkHref}>View Testimonials</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}