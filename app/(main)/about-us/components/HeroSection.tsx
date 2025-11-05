import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r bg-[#e4e4e4] py-20">
      <div className="max-w-container mx-auto px-4 text-justify-center text-center mb-4 md:mb-20">
        <h3 className="text-xl md:text-2xl font-thin mb-2 text-blue-500">About Eleva Tours</h3>
        <h1 className="xs:text-4xl text-3xl text-black md:text-5xl font-bold mb-6">Giving A Better Travel Experience</h1>
        <p className="xs:text-xl text-lg text-black ">
          We are a team of passionate individuals dedicated to creating innovative solutions that make a difference.
        </p>
      </div>

      {/* tabs */}

       <div className="flex flex-wrap justify-center gap-4 my-6">
      <Button asChild variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
        <a href="#mission-and-vision">Mission & Vision</a>
      </Button>

      <Button asChild variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
        <a href="#our-story">Our Story</a>
      </Button>

      <Button asChild variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
        <a href="#processes">Processes</a>
      </Button>

      <Button asChild variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
        <a href="#why-us-section">Why Us</a>
      </Button>
    </div>

      <div
  className="
    relative overflow-hidden  shadow-lg
    mt-10 max-container 2xl:w-[75%] w-[95%]
    md:h-[450px] xs:h-[400px] h-[350px] mx-auto
  "
>
  <Image
    src="/assets/images/about-us/about-cover.avif"
    alt="About Us Hero Cover"
    fill 
    className="object-cover" 
    sizes="(max-width: 768px) 95vw, 75vw" 
  />
</div>
    </section>
  );
};

export default HeroSection; 