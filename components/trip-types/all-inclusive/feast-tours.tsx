'use client';
import React from 'react';
import firstTourImg from "@/public/assets/images/first_tour.jpg";
import secondTourImg from "@/public/assets/images/second_tour.jpg";
import Typography from '@/components/shared/typography';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const feast_tours = [
    {
        id: "1",
        num_days: "9 DAY TOUR",
        location: "Ghana",
        title: "Patagonia: Turquoise Lakes & Torres de",
        valid_date: "Feb 15, 2026",
        description: `3 Regions (Accra x Aburi x Cape Coast) | One...`,
        amount: "2549",
        img: firstTourImg,
    },
    {
        id: "2",
        num_days: "9 DAY TOUR",
        location: "Ghana",
        title: "Northern India on a Budget: The Gold",
        valid_date: "Feb 15, 2026",
        description: `Experience the vibrant rhythm and captivating culture of Ghana in...`,
        amount: "434",
        img: secondTourImg,
    },
    {
        id: "3",
        num_days: "9 DAY TOUR",
        location: "Ghana",
        title: "Central Asia: Uzbekistan, Tajikistan,",
        valid_date: "Feb 15, 2026",
        description: `Experience the vibrant rhythm and captivating culture of Ghana in...`,
        amount: "2149",
        img: secondTourImg,
    },
    {
        id: "4",
        num_days: "9 DAY TOUR",
        location: "Ghana",
        title: "Central Asia: Uzbekistan, Tajikistan,",
        valid_date: "Feb 15, 2026",
        description: `Experience the vibrant rhythm and captivating culture of Ghana in...`,
        amount: "2149",
        img: secondTourImg,
    },
]

function FeastTours() {
  return (
    <div className='w-full py-16 bg-[#ededf6]'>
        <section className='max-container w-[85%] mx-auto flex flex-col gap-6'>
            <div className='flex flex-col '>
                <Typography
                    typo="header-2-bold"
                >Feast your eyes on our newest 18-to-</Typography>
                <Typography
                    typo="header-2-bold"
                >Thirtysomethings tours</Typography>
            </div>
            <div className='w-full '>
                <Carousel>
                    <CarouselContent className='gap-3'>
                        {feast_tours.map((data, index) => (
                            <CarouselItem
                                key={data.id}
                                className='md:basis-1/2 lg:basis-1/4'
                            >
                                <Card 
                                    className='max-w-[350px] w-full bg-white rounded-b-md'
                                >
                                    <div className='w-full h-[230px]'>
                                        <Image 
                                            src={data.img}
                                            alt={`Feast tour+${index+1}`}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className='p-3 flex flex-col gap-3 text-black'>
                                        <div className='flex flex-col gap-'>
                                            <Typography
                                                typo="body-small-light"
                                            >{data.num_days}</Typography>
                                            <Typography
                                                typo="body-large-medium"
                                                className='line-clamp-1'
                                            >{data.title}</Typography>
                                            <div className='text-sm font-light'>
                                                Valid on <span className='font-semibold'>{data.valid_date}</span>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <span className='font-light'>$</span>
                                                <Typography
                                                    typo="header-6-semibold"
                                                >{data.amount}</Typography>
                                                <span className='font-light'>/ per person</span>
                                            </div>
                                            <Button
                                                variant="outline"
                                                className='w-fit mt-2 py-2 rounded-lg'
                                            >
                                                View Itinerary
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    </div>
  )
}

export default FeastTours