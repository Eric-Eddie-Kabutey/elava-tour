'use client';
import Typography from '@/components/shared/typography'
import React from 'react';
import ghanaExperienceImg from "@/public/assets/images/home/lockinImg.jpeg"
import Image, { StaticImageData } from 'next/image';

type CountryContentProp = {
  name: string;
  image: StaticImageData;
  history: {
    title: string;
    contents: string[];
  }
}

type GhanaTourHeroProps = {
  country_content: CountryContentProp
}

function GhanaTourHero({country_content }: GhanaTourHeroProps) {
  return (
    <div className='w-full py-12 bg-gradient-to-br from-gray-50 to-gray-100'>
        <section className='max-container w-[95%] mx-auto flex flex-col gap-8'>
            <Typography
                typo="header-2-semibold"
                className='text-center'
            >The {country_content?.name} Experience</Typography>
            <div className='w-full grid grid-cols-2'>
                <div className='w-full xl:h-[400px] lg:h-[350px] md:h-[300px] sm:h-[250px] h-[200px]'>
                    <Image 
                        src={country_content?.image}
                        alt='Ghana flag'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='w-full xl:h-[400px] lg:h-[350px]  md:h-[300px] sm:h-[250px] h-[200px]'>
                    <Image 
                        src={ghanaExperienceImg}
                        alt='Ghana flag'
                        className='w-full h-full object-cover object-left'
                    />
                </div>
            </div>
            <div className='xl:w-[70%] lg:w-[85%] w-full md:py-8 py-5 flex flex-col md:gap-4 gap-3'>
                <Typography
                    typo="header-4-semibold"
                >
                    {country_content?.history?.title}
                </Typography>
                <div className='flex flex-col md:gap-4 gap-2'>
                    {country_content?.history?.contents.map(data => (
                        <Typography
                            key={data}
                            typo="body-large-regular"
                        >
                            {data}
                        </Typography>
                    ))}
                </div>
            </div>
            <div className='xl:w-[70%] lg:w-[85%] w-full md:pb-8 pb-6 flex flex-col gap-4'>
                <Typography
                    typo="header-4-semibold"
                >
                    About Ghana
                </Typography>
                <Typography
                    typo="body-large-regular"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque hic voluptatibus velit totam qui odio vitae tempora, corrupti obcaecati magnam, numquam ad ducimus repellendus aliquam deleniti, delectus sequi nobis ratione omnis sed. Quam eius beatae ipsum unde? Totam quos quis beatae ullam soluta nesciunt accusamus non dolor aliquam, optio tenetur.
                </Typography>
            </div>
        </section>
    </div>
  )
}

export default GhanaTourHero