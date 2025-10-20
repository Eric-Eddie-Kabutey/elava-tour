'use client';
import React from 'react';
import dubaiImg from "@/public/assets/images/home/handpicked_1.png";
import maldivesImg from "@/public/assets/images/home/handpicked_2.png";
import mauritiusImg from "@/public/assets/images/home/handpicked_3.png";
import lockinImg from "@/public/assets/images/home/locking_img.jpg";
import ransfordImg from "@/public/assets/images/home/ransford_quaye.jpg";
import familyHolidayImg from "@/public/assets/images/home/holiday_1.png"
import allInclusiveImg from "@/public/assets/images/home/holiday_2.png"
import beachHolidaysImg from "@/public/assets/images/home/holiday_3.png"
import Typography from '../shared/typography';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

const handpicked_destinations = [
    {
        id: "1",
        price: "2,249",
        img: dubaiImg,
    },
    {
        id: "2",
        price: "4,439",
        img: maldivesImg,
    },
    {
        id: "3",
        price: "6,769",
        img: mauritiusImg,
    },
   
]

const holidaysImgs = [familyHolidayImg, allInclusiveImg, beachHolidaysImg]

function Handpicked() {
  return (
    <div className='hidden w-full py-10 lg:flex flex-col bg-[#e4e4e4]'>
        <section className='max-container w-[95%] mx-auto px-12 pt-12 pb-16 flex flex-col gap-12 bg-[#f0f2f3]'>
            <div className='w-full flex flex-col gap-4 text-black'>
                <Typography
                    typo="header-5-medium"
                >
                    Our Handpicked Destinations
                </Typography>
                <div className='w-full grid grid-cols-3 gap-6'>
                    {handpicked_destinations.map((data, index) => (
                        <Card key={data.id} className='flex flex-col gap-3 rounded-none bg-white'>
                            <CardHeader className='w-full xl:h-[400px] h-[300px] p-0'>
                                <Image 
                                    src={data.img}
                                    alt={`Handpicked ${index+1}`}
                                    className='w-full h-full'
                                />
                            </CardHeader>
                            <CardContent className='px-2 flex items-center justify-between gap-3'>
                                <Typography
                                    typo="body-medium-medium"
                                >3 nights from SAR {data.price}pp</Typography>
                                <Button
                                    variant="primary"
                                >Book Now</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <Button
                variant="outline"
                className='w-fit mx-auto px-8 py-3 flex items-center gap-4'
            >
                View All
                <ArrowUpRight />
            </Button>
        </section>
        <section className='max-container w-full h-[470px] flex items-center'>
            <div className='flex-1 h-full'>
                <Image 
                    src={lockinImg}
                    alt='Lock in image'
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='flex-1 h-full'>
                <Image 
                    src={ransfordImg}
                    alt='Lock in image'
                    className='w-full h-full object-cover'
                />
            </div>
        </section>
        <section className='py-12 bg-[#e4e4e4]'></section>
        <section className='w-full '>
            <div className='max-container w-[95%] mx-auto p-10 flex flex-col gap-12 bg-[#f0f2f3]'>
                <div className='w-full grid grid-cols-3 gap-6 '>
                    {holidaysImgs.map((data, index) => (
                        <div key={`hOLIDAY ${index+1}`} className='w-full xl:h-[400px] h-[300px] '>
                            <Image 
                                src={data}
                                alt={`Holiday ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                    ))}
                </div>
                <Button
                    variant="outline"
                    className='w-fit mx-auto px-8 py-3 flex items-center gap-4'
                >
                    View All
                    <ArrowUpRight />
                </Button>
            </div>
        </section>
    </div>
  )
}

export default Handpicked