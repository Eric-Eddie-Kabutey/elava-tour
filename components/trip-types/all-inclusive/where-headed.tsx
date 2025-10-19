'use client';
import Typography from '@/components/shared/typography'
import Link from 'next/link';
import React from 'react';
import firstTourImg from "@/public/assets/images/first_tour.jpg";
import secondTourImg from "@/public/assets/images/second_tour.jpg";
import thirdTourImg from "@/public/assets/images/third_tour.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

const headedTrip = [
    {
        id: "1", 
        img: firstTourImg,
        location: "Africa",
    },
    {
        id: "2", 
        img: secondTourImg,
        location: "Asia",
    },
    {
        id: "3", 
        img: thirdTourImg,
        location: "Central America",
    },
    {
        id: "4", 
        img: firstTourImg,
        location: "Europe",
    },
    {
        id: "5", 
        img: secondTourImg,
        location: "Middle East",
    },
    {
        id: "6", 
        img: thirdTourImg,
        location: "North America",
    },
    {
        id: "7", 
        img: firstTourImg,
        location: "Oceania",
    },
    {
        id: "8", 
        img: thirdTourImg,
        location: "South America",
    },
]


function WhereHeaded() {
  return (
    <div className='w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
        <section className='w-[85%] max-container mx-auto flex flex-col gap-6'>
            <div className='w-full flex justify-between items-center gap-4'>
                <Typography
                    typo="header-3-bold"
                >So where you headed?</Typography>
                <Link
                    href="/"
                    className='text-sm font-bold underline hover:underline-0'
                >
                    See all 18-to-Thirtysomethings tours
                </Link>
            </div>
            <div className='w-full py-4'>
                <Carousel>
                    <CarouselContent className='gap-3'>
                        {headedTrip.map((data, index) => (
                            <CarouselItem
                                key={data.id}
                                className='md:basis-1/4 lg:basis-1/5'
                            >
                                <div className='relative h-[300px]'>
                                    <Image 
                                        src={data.img}
                                        alt={`Headed ${index+1}`}
                                        className='w-full h-full object-cover'
                                    />
                                    <Typography 
                                        typo="header-5-semibold"
                                        className='absolute bottom-4 left-3 text-white'>{data.location}</Typography>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    </div>
  )
}

export default WhereHeaded