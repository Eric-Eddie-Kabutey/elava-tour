import Hero from "@/components/home/Hero";
import AffiliateProgram from "@/components/home/affiliate-program";
import Destinations from "@/components/home/destinations";
import HandpickedCarousel from "@/components/home/handpicked-carousel";
import Testimonial from "@/components/home/testimonial";
import FloatingButton from "@/reusable/floating-button";

export default function Home() {
  return (
    <>
      <div className="">
        {/* Hero section */}
        <Hero />
        {/* Tour highlights section*/}
        {/* <TourHighlights /> */}

        {/* Destinations section*/}
        <Destinations />

        {/* AffiliateProgram section */}
        <AffiliateProgram />

          {/* <Handpicked /> */}
          <HandpickedCarousel />
          <Testimonial />
          <FloatingButton />
      </div>
    </>
  );
}
