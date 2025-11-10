"use client";

import type { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button"; 
import Typography from "@/components/shared/typography"; 

import southAfricaImg from "@/public/assets/images/home/handpicked_1.png";
import ghanaImg from "@/public/assets/images/home/handpicked_2.png";
import kenyaImg from "@/public/assets/images/home/handpicked_3.png";


interface Destination {
  id: number;
  img: StaticImageData | string;
  title: string; 
  description: string;
  href: string; 
}

// Dummy data based on the new design
const destinationsData: Destination[] = [
  {
    id: 1,
    img: southAfricaImg, 
    title: "South Africa",
    description: "South Africa is well-known for its ancient history museums, the Pyramids of Giza, temple complexes, mummies, and the Great Sphinx.",
    href: "/destination/south-africa",
  },
  {
    id: 2,
    img: ghanaImg,
    title: "Ghana",
    description: "Ghana is affectionately known as the Rainbow Nation due to its diversity of people and cultures.",
    href: "/destination/ghana",
  },
  {
    id: 3,
    img: kenyaImg,
    title: "Kenya",
    description: "The name Kenya means warrior king. It is called the Gateway to Africa because it is the first location newcomers of the continent should go.",
    href: "/destination/kenya",
  },
];


const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};


const Destinations: FC = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className='bg-[#f3eadc] py-20 md:py-28'
    >
      <div className="max-container w-[95%] mx-auto px-4 lg:px-12">
        {/* --- Header --- */}
        <motion.div variants={itemVariants} className='text-center mb-16'>         
          <Typography
            typo="header-1-medium" 
            className="!text-4xl md:!text-5xl !text-green-opaque !font-semibold uppercase tracking-widest"
          >
            Your Next Destinations
          </Typography>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Your next travel destinations are here. Check out some of our incredible destinations below.
          </p>
        </motion.div>

        {/* --- Destinations Grid --- */}
        <motion.div 
            variants={sectionVariants} // Nested stagger
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {destinationsData.map((data) => (
            <motion.div
              key={data.id}
              variants={itemVariants}
              className='bg-white shadow-lg overflow-hidden flex flex-col group'
            >
              <div className='relative aspect-[4/3] overflow-hidden'>
                <Image 
                  src={data.img}
                  alt={data.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className='p-8 text-center flex flex-col flex-grow'>
                <Typography
                  typo="header-5-medium" // Assuming serif
                  className="!text-3xl !font-semibold"
                >
                  {data.title}
                </Typography>
                <p className="mt-4 text-gray-600 flex-grow min-h-[120px]">
                    {data.description}
                </p>
                <div className="mt-6">
                    <Button
                        asChild
                        className='bg-yellow-opaque hover:bg-green-opaque text-green-opaque hover:text-yellow-opaque text-base px-8 py-2 font-semibold transition-transform group-hover:scale-105'
                    >
                        <Link href={data.href}>Learn More</Link>
                    </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* --- Main CTA Button --- */}
        <motion.div variants={itemVariants} className='mt-16 text-center'>
          <Button
            className='bg-transparent text-green-opaque border border-green-opaque hover:bg-yellow-opaque  hover:green-opaque px-8 py-3 font-bold transition-colors'
          >
            View All
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Destinations;