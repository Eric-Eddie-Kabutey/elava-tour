'use client';
import React from 'react';
import dubaiImg from "@/public/assets/images/home/dubai.jpeg";
import maldivesImg from "@/public/assets/images/home/maldives.jpeg";
import mauritiusImg from "@/public/assets/images/home/mauritius.jpeg";
import lockinImg from "@/public/assets/images/home/lockinImg.jpeg";
import familyHolidayImg from "@/public/assets/images/home/family_holidays.jpeg"
import allInclusiveImg from "@/public/assets/images/home/all_inclusiveImg.jpeg"
import beachHolidaysImg from "@/public/assets/images/home/beach_holidaysImg.jpeg"
import lastminuteImg from "@/public/assets/images/home/last_minute_holidays.jpeg"
import kandimaImg from "@/public/assets/images/home/kandima_img.jpeg"
import riuImg from "@/public/assets/images/home/riu_img.jpeg"
import seasideImg from "@/public/assets/images/home/seaside_img.jpeg"
import Typography from '../shared/typography';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

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

const handpicked_hotels = [
    {
        id: "1",
        price: "2,249",
        img: kandimaImg,
        name: "Kandima Maldives",
    },
    {
        id: "2",
        price: "4,439",
        img: riuImg,
        name: "Rius Palace Maldives",
    },
    {
        id: "3",
        price: "6,769",
        img: seasideImg,
        name: "Seaside Finolhu Baa Atoll Maldives",
    },
]

const holidaysImgs = [familyHolidayImg, allInclusiveImg, beachHolidaysImg, lastminuteImg]

function HandpickedCarousel() {
  return (
    <div className='lg:hidden w-full py-5 flex flex-col gap-6'>
        <section className='max-container w-[95%] mx-auto flex flex-col gap-4'>
            <div className='w-full flex flex-col gap-4 text-black'>
                <Typography
                    typo="header-5-medium"
                >
                    Our Handpicked Destinations
                </Typography>

                <Carousel className='w-full'>
                    <CarouselContent>
                        {handpicked_destinations.map((data, index) => (
                            <CarouselItem key={data.id} className="sm:basis-1/2 lg:basis-1/3">
                                <Card  className='flex flex-col gap-3 rounded-none bg-white'>
                                    <CardHeader className='w-full md:h-[250px] h-[250px] p-0'>
                                        <Image 
                                            src={data.img}
                                            alt={`HandpickedCarousel ${index+1}`}
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
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className='w-full flex flex-col gap-4 text-black'>
                <Typography
                    typo="header-5-medium"
                >
                    Our Handpicked Hotels
                </Typography>
                <Carousel className='w-full '>
                    <CarouselContent>
                        {handpicked_hotels.map((data, index) => (
                            <CarouselItem key={data.id} className="sm:basis-1/2 lg:basis-1/3">
                                <Card key={data.id} className='flex flex-col gap-3 rounded-none bg-white'>
                                    <CardHeader className='w-full md:h-[300px] h-[250px] p-0 relative'>
                                        <Image 
                                            src={data.img}
                                            alt={`HandpickedCarousel ${index+1}`}
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
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
        <section className='max-container w-full h-fit'>
            <Image 
                src={lockinImg}
                alt='Lock in image'
                className='w-full h-full'
            />
        </section>
        <section className='py-8 bg-[#e4e4e4]'></section>
        <section className='w-full'>
            <Carousel className='max-container w-[95%] mx-auto '>
                <CarouselContent>
                    {holidaysImgs.map((data, index) => (
                        <CarouselItem key={index+1} className="sm:basis-1/2 lg:basis-1/3">
                            <div key={`hOLIDAY ${index+1}`} className='w-full md:h-[300px] h-[250px]'>
                                <Image 
                                    src={data}
                                    alt={`Holiday ${index+1}`}
                                    className='w-full h-full'
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    </div>
  )
}

export default HandpickedCarousel