import Hero from "@/components/home/Hero";
import Handpicked from "@/components/home/handpicked";
import JoinHolidays from "@/components/home/join-holidays";

export default function Home() {
  return (
    <>
      <div className="bg-[#e4e4e4]">
          <Hero />
          <Handpicked />
          <JoinHolidays />
      </div>
    </>
  );
}
