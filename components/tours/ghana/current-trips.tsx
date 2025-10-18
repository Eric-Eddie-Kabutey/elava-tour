'use client';
import Typography from '@/components/shared/typography'
import React from 'react';
import firstTourImg from "@/public/assets/images/first_tour.jpg";
import secondTourImg from "@/public/assets/images/second_tour.jpg";
import thirdTourImg from "@/public/assets/images/third_tour.jpg";
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const current_tours = [
    {
        id: "1",
        num_days: "9 DAY TOUR",
        location: "Ghana",
        title: "East African Love (Rwanda x Uganda)",
        valid_date: "(10 Days - 8.17.25 - 8.26.25)",
        description: `3 Regions (Accra x Aburi x Cape Coast) | One...`,
        amount: "1199",
        img: firstTourImg,
    },
    {
        id: "2",
        num_days: "9 DAY TOUR",
        location: "Ghana",
        title: "East African Love (Rwanda x Uganda)",
        valid_date: "7 Nights",
        description: `Experience the vibrant rhythm and captivating culture of Ghana in...`,
        amount: "1199",
        img: secondTourImg,
    },
]

function CurrentTrips() {
  return (
    <div className='w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
        <section className='w-[85%] mx-auto flex flex-col gap-6 text-black'>
            <Typography
                typo="header-3-semibold"
            >
                Current Trips
            </Typography>
            <div className='w-full py-8 grid grid-cols-3 gap-12'>
                {current_tours.map((data, index) => (
                    <Card
                        key={data.id}
                        className='w-full flex flex-col gap-1 border-none rounded-none'
                    >
                        <div className='w-full h-[300px]'>
                            <Image 
                                src={data.img}
                                alt={`Tour image ${index+1}`}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='p-4 flex flex-col gap-2'>
                            <div className='h-[140px] flex flex-col gap-4 border-b'>
                                <div className='flex flex-col gap-1'>
                                    <Typography
                                        typo="header-6-medium"
                                    >{data.title}</Typography>
                                    <Typography
                                        typo="header-6-medium"
                                    >{data.valid_date}</Typography>
                                </div>
                                <Typography
                                    typo="body-medium-regular"
                                    className='line-clamp-2'
                                >{data.description}</Typography>
                            </div>
                            <div className='pt-2 flex flex-col gap-2'>
                                <div className='flex items-center justify-between gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <MapPin size={20} />
                                        <Typography
                                            typo="body-large-regular"
                                        >{data.location}</Typography>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span>$</span>
                                        <Typography
                                            typo="header-5-semibold"
                                        >{data.amount}</Typography>
                                        <span>/</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between gap-2'>
                                    <Button
                                        variant="primary"
                                        className='w-fit'
                                    >
                                        View Itinerary
                                    </Button>
                                    <Typography>per person</Typography>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default CurrentTrips