'use client';
import React from 'react';
import dubaiImg from "@/public/assets/images/home/dubai.jpeg";
import maldivesImg from "@/public/assets/images/home/maldives.jpeg";
import mauritiusImg from "@/public/assets/images/home/mauritius.jpeg";
import phuketImg from "@/public/assets/images/home/phuket1.jpeg";
import lockinImg from "@/public/assets/images/home/lockinImg.jpeg";
import familyHolidayImg from "@/public/assets/images/home/family_holidays.jpeg"
import allInclusiveImg from "@/public/assets/images/home/all_inclusiveImg.jpeg"
import beachHolidaysImg from "@/public/assets/images/home/beach_holidaysImg.jpeg"
import lastminuteImg from "@/public/assets/images/home/last_minute_holidays.jpeg"
import Typography from '../shared/typography';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

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
    {
        id: "4",
        price: "4,089",
        img: phuketImg,
    },
]

const handpicked_hotels = [
    {
        id: "1",
        price: "2,249",
        img: dubaiImg,
        name: "Kandima Maldives",
    },
    {
        id: "2",
        price: "4,439",
        img: maldivesImg,
        name: "Rius Palace Maldives",
    },
    {
        id: "3",
        price: "6,769",
        img: mauritiusImg,
        name: "Seaside Finolhu Baa Atoll Maldives",
    },
    {
        id: "4",
        price: "4,089",
        img: phuketImg,
        name: "Atlantis The Royal",
    },
]

const holidaysImgs = [familyHolidayImg, allInclusiveImg, beachHolidaysImg, lastminuteImg]

function Handpicked() {
  return (
    <div className='w-full py-5 flex flex-col gap-6 bg-[#f0f2f3]'>
        <section className='max-container w-[95%] mx-auto flex flex-col gap-4'>
            <div className='w-full flex flex-col gap-4 text-black'>
                <Typography
                    typo="header-5-medium"
                >
                    Our Handpicked Destinations
                </Typography>
                <div className='w-full grid grid-cols-4 gap-4'>
                    {handpicked_destinations.map((data, index) => (
                        <Card className='flex flex-col gap-3 rounded-none bg-white'>
                            <CardHeader className='w-full h-[300px] p-0'>
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
            <div className='w-full flex flex-col gap-4 text-black'>
                <Typography
                    typo="header-5-medium"
                >
                    Our Handpicked Hotels
                </Typography>
                <div className='w-full grid grid-cols-4 gap-4'>
                    {handpicked_hotels.map((data, index) => (
                        <Card className='flex flex-col gap-3 rounded-none bg-white'>
                            <CardHeader className='w-full h-[300px] p-0 relative'>
                                <Image 
                                    src={data.img}
                                    alt={`Handpicked ${index+1}`}
                                    className='w-full h-full'
                                />
                                <div className='absolute top-6 max-w-[400px] flex justify-between bg-white/60'>
                                    <span className=' px-3 py-3 text-base font-semibold'>{data.name}</span>
                                    <div className='px-[2px] bg-red-700'></div>
                                </div>
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
        </section>
        <section className='max-container w-full h-[470px]'>
            <Image 
                src={lockinImg}
                alt='Lock in image'
                className='w-full h-full'
            />
        </section>
        <section className='py-8 bg-[#e4e4e4]'></section>
        <section className='w-full'>
            <div className='max-container w-[95%] mx-auto grid grid-cols-4 gap-6'>
                {holidaysImgs.map((data, index) => (
                    <div key={`hOLIDAY ${index+1}`} className='w-full h-[350px]'>
                        <Image 
                            src={data}
                            alt={`Holiday ${index+1}`}
                            className='w-full h-full'
                        />
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Handpicked