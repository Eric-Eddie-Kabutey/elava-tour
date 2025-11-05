import story_img from "@/public/assets/images/elava_signature.png";
import Image from "next/image";

const OurStory = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-16 bg-[#e4e4e4]">
      <div className="2xl:w-[65%] xl:w-[75%] w-[95%] max-container mx-auto md:px-16 xs:px-8 px-4 bg-[#f0f2f3] py-12 lg:pb-24">
        <div className="text-start md:mb-12 mb-6">
          <h2 className="xs:text-3xl text-2xl font-bold text-gray-800">Our Story</h2>
        </div>
        
        <div className="pb-8 flex flex-col md:gap-8 gap-4">
          <p>
            Africa is more than just the generic places or a spot on the map. It’s a land alive with rhythm and warmth. 
            Eleva was born from that rhythm.  From the realization that travel across this vast continent deserved to be 
            deeper, more personal, and more connected. Too often, we explore Africa through the same windows, seeing only 
            what&apos;s been framed for us. But beyond the postcards and popular tours lies another Africa,  one that hums in the 
            laughter of markets, glows in hidden sunsets, and thrives in places few have walked.
          </p>
          <p>
            Africa is more than just the generic places or a spot on the map. It’s a land alive with rhythm and warmth. 
            Eleva was born from that rhythm.  From the realization that travel across this vast continent deserved to be 
            deeper, more personal, and more connected. Too often, we explore Africa through the same windows, seeing only 
            what’s been framed for us. But beyond the postcards and popular tours lies another Africa,  one that hums in the 
            laughter of markets, glows in hidden sunsets, and thrives in places few have walked.
          </p>
        </div>
        <div className="md:w-[400px] sm:w-[300px] w-[250px] h-fit mx-auto">
            <Image 
                src={story_img}
                alt="Signature image"
                className="w-full h-full"
            />
        </div>
      </div>
    </section>
  );
};

export default OurStory;