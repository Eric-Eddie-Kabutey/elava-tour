import HeroSection from "./components/HeroSection";
import Testimonial from "@/components/home/testimonial";
import TeamSection from "./components/TeamSection";
import { WhyUsSection } from "./WhyUsSection";
import { ProcessesCarousel } from "@/components/about-us/ProcessesCardCarousel";
import { MissionVisionSection } from "./components/MissionAndVision";


const AboutUsPage = () => {
  return (
    <>      
      <div className="font-[family-name:var(--font-geist-sans)]">
        <HeroSection />     
        <MissionVisionSection />
        <TeamSection id="team" />                                
        <ProcessesCarousel />
        <WhyUsSection limit={3} />
        <Testimonial />
      </div>      
    </>
  );
}

export default AboutUsPage