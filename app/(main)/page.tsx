import Hero from "@/components/home/Hero";
import AffiliateProgram from "@/components/home/affiliate-program";
import Destinations from "@/components/home/destinations";
import { FeaturedTrips } from "@/components/home/featured-trips";
import Handpicked from "@/components/home/handpicked";
import HandpickedCarousel from "@/components/home/handpicked-carousel";
import Testimonial from "@/components/home/testimonial";
import FloatingButton from "@/reusable/floating-button";

export default function Home() {
  return (
    <>
      <div className="">
        {/* Hero section */}
        <Hero />       

        {/* Featured Trips section */}
        <FeaturedTrips />

        {/* Your next destinations */}
        <Destinations />

        {/* AffiliateProgram section */}
        <AffiliateProgram />

        {/* Handpicked section */}
        <Handpicked />

          {/* <Handpicked /> */}
          <HandpickedCarousel />
          <Testimonial />
          <FloatingButton />
      </div>
    </>
  );
}
