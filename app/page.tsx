import Hero from "@/components/home/Hero";
import Handpicked from "@/components/home/handpicked";
import HandpickedCarousel from "@/components/home/handpicked-carousel";
import Testimonial from "@/components/home/testimonial";
import FloatingButton from "@/reusable/floating-button";

export default function Home() {
  return (
    <>
      <div className="">
          <Hero />
          <Handpicked />
          <HandpickedCarousel />
          <Testimonial />
          <FloatingButton />
      </div>
    </>
  );
}
