import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r bg-[#e4e4e4] py-20">
      <div className="max-w-container mx-auto px-4 text-justify-center text-center mb-4 md:mb-20">
        <h3 className="text-xl md:text-2xl font-thin mb-2 text-blue-500">About Eleva Tours</h3>
        <h1 className="text-4xl text-black md:text-5xl font-bold mb-6">Giving A Better Travel Experience</h1>
        <p className="text-xl text-black ">
          We are a team of passionate individuals dedicated to creating innovative solutions that make a difference.
        </p>
      </div>

      {/* tabs */}

       <div className="flex flex-wrap justify-center gap-4 my-6">
      <Button asChild variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
        <a href="#mission-section">Mission & Vision</a>
      </Button>

      <Button asChild variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
        <a href="#learnership-section">Learnership</a>
      </Button>

      <Button asChild variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
        <a href="#processes-section">Processes</a>
      </Button>

      <Button asChild variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
        <a href="#why-us-section">Why Us</a>
      </Button>
    </div>

      <div className="mt-10 max-container 2xl:w-[75%] w-[95%] mx-auto">
        <Image
          src="/assets/images/home/lockinImg.jpeg"
          alt="About Us Hero"
          className="w-full h-auto mx-auto shadow-lg"
          width={1600}
          height={900}
        />
      </div>
    </section>
  );
};

export default HeroSection; 