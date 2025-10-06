import Hero from "@/components/home/Hero";
import Handpicked from "@/components/home/handpicked";
import HandpickedCarousel from "@/components/home/handpicked-carousel";
import JoinHolidays from "@/components/home/join-holidays";

export default function Home() {
  return (
    <>
      <div className="bg-[#e4e4e4]">
          <Hero />
          <Handpicked />
          <HandpickedCarousel />
          <JoinHolidays />
      </div>
    </>
  );
}
