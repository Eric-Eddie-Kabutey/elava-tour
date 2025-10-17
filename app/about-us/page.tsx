import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import Testimonial from "@/components/home/testimonial";
import VisionSection from "./components/VisiontSection";
import TeamSection from "./components/TeamSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { WhyUsSection } from "./WhyUsSection";

const AboutUsPage = () => {
  return (
    <>      
      <div className="font-[family-name:var(--font-geist-sans)]">
        <HeroSection />     
        <div id="mission-and-vision">
        <MissionSection id="mission" />
        <VisionSection id="vision" />          
        </div>
        <TeamSection id="team" />                
        <HowItWorksSection />
        <WhyUsSection />
        <Testimonial />
      </div>      
    </>
  );
}

export default AboutUsPage