import HeroSection from "./components/HeroSection";
import Testimonial from "@/components/home/testimonial";
import { WhyUsSection } from "./WhyUsSection";
import { ProcessesCarousel } from "@/components/about-us/ProcessesCardCarousel";
import { MissionVisionSection } from "./components/MissionAndVision";
import OurStory from "./components/our-story";


const AboutUsPage = () => {
  return (
    <>      
      <div className="font-[family-name:var(--font-geist-sans)]">
        <HeroSection />     
        <MissionVisionSection />
        <OurStory id="team" />                               
        <ProcessesCarousel />
        <WhyUsSection />
        <Testimonial />
      </div>      
    </>
  );
}

export default AboutUsPage