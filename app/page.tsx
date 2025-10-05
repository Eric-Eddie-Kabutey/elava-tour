import Navbar from "@/components/shared/Navbar"
import FooterSection from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Handpicked from "@/components/home/handpicked";

export default function Home() {
  return (
    <>
      <div>
          <Hero />
          <Handpicked />
          <Features />
          
      </div>
    </>
  );
}
