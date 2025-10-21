'use client';
import React from 'react';
import firstTourImg from "@/public/assets/images/inclusive/tour_reason1.jpg";
import secondTourImg from "@/public/assets/images/inclusive/tour_reason2.jpg";
import thirdTourImg from "@/public/assets/images/inclusive/tour_reason3.jpg";
import fourTourImg from "@/public/assets/images/inclusive/tour_reason4.jpg";
import fiveTourImg from "@/public/assets/images/inclusive/tour_reason5.jpg";
import Typography from '@/components/shared/typography';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const tourReasons = [
    {
        id: "1",
        title: "Travel with an international crew",
        description: `Going on our tours means travelling with people (22 or less, if you want to get precise) from all over the world. So on top of learning about the local culture, you'll also learn from your international crew.`,
        img: firstTourImg,  
        button: "Meet your crew",
    },
    {
        id: "2",
        title: "Safety in (small) numbers",
        description: `The numbers speak for themselves: group travel is a safer way to see our world. Plus, our expert CEOs (Chief Experience Officers) have local knowledge you can count on as they lead you on your adventures.`,
        img: secondTourImg,  
    },
    {
        id: "3",
        title: "Making it rain: not required",
        description: `Seeing the world shouldn’t require spending all your savings. With us, you’ll get the travel experience of a lifetime, plus good bang for your buck.`,
        img: thirdTourImg,  
        button: "Snag a deal",
    },
    {
        id: "4",
        title: "Freedom to do your thing",
        description: `We built our tour itineraries to feature a lot of free time, giving you the freedom to explore on your own, with your new crew, or whatever way suits your style.`,
        img: fourTourImg,  
    },
    {
        id: "5",
        title: "A bit of this a bit of that",
        description: `Like balance in your life? We can help. Our tours give you a healthy dose of culture during the day, before letting you get a taste for local bars and restaurants as the sun goes down.`,
        img: fiveTourImg,  
        button: "Let’s roll",
    },
]

function TravelReasons() {
  return (
    <div className='travel-bg w-full pt-16 pb-80 '>
        <section className='max-container w-[75%] mx-auto flex flex-col gap-6'>
            <Typography
                typo="header-3-bold"
            >Five reasons to travel with us</Typography>
            <div className='w-full grid grid-cols-2 gap-8'>
                {tourReasons.map((data, index) => (
                    <div
                        key={data.id}
                        className='w-full'
                    >
                        <div className='w-fit h-fit'>
                            <Image 
                                src={data.img}
                                alt={`Travel ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className={`w-[80%] pt-5 flex flex-col gap-4 ${data.id === "5" ? "text-white" : "text-black"}`}>
                            <div className='flex flex-col gap-2'>
                                <Typography
                                    typo="header-5-bold"
                                >{data.title}</Typography>
                                <Typography
                                    typo="body-medium-regular"
                                >
                                    {data.description}
                                </Typography>
                            </div>
                            {data.button && (
                                <Button
                                    variant="primary"
                                    className='w-fit text-lg font-semibold rounded-lg'
                                >{data.button}</Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default TravelReasons