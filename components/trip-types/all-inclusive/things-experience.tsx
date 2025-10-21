'use client';
import Typography from '@/components/shared/typography'
import React from 'react';
import firstTourImg from "@/public/assets/images/first_tour.jpg";
import secondTourImg from "@/public/assets/images/second_tour.jpg";
import thirdTourImg from "@/public/assets/images/third_tour.jpg";
import Image from 'next/image';

const things_experienced = [
    {
        id: "1", 
        img: firstTourImg,
        title: "Sweet rides",
        description: `Travel in style and in comfort on our private rides. Our Landos in Africa have oversized windows for easy picture-taking, and USB ports at every seat. Sit back, relax, and soak in the experience.`
    },
    {
        id: "2", 
        img: secondTourImg,
        title: "So many ways to stay",
        description: `Hostels, hotels, homestays, camping — on our tours, you’ll stay in a number of accommodation styles specifically chosen to give you that oh-so-authentic travel experience.`
    },
    {
        id: "3", 
        img: thirdTourImg,
        title: "First Night Out ",
        description: `On the First Night Out, we’ll take you to local hot spots where you’ll have the chance to get to know the crew you’ll be travelling with, plus the destination itself.`
    },
    {
        id: "4", 
        img: firstTourImg,
        title: "Big Night Out",
        description: `Towards the end of your trip, you and your new BFFs will hit the town to celebrate all the crazily-unbelievably-inspiring moments you’ve had together so far. Oh, and your first drink is on us.`
    },
]


function ThingsExperience() {
  return (
    <div className='w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
        <section className='max-container w-[75%] mx-auto flex flex-col gap-6'>
            <Typography 
                typo="header-2-bold"
            >
                Things you’ll get to experience
            </Typography>
            <div className='w-full grid grid-cols-4 gap-6'>
                {things_experienced.map((data, index) => (
                    <div className='w-full '
                        key={data.id}
                    >
                        <div className='w-full h-[250px]'>
                            <Image 
                                src={data.img}
                                alt={`Experienced ${index+1}`}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography
                                typo="header-4-bold"
                            >{data.title}</Typography>
                            <Typography
                                typo="body-medium-regular"
                                className='!leading-tight line-clamp-3'
                            >{data.description}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default ThingsExperience