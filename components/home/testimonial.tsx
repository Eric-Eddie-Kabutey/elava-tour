'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Card, CardContent, CardFooter } from '../ui/card';
import { Pause } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';
import { testimonial_clients } from '@/constants';

function Testimonial() {
  return (
    <div className='w-full py-24 bg-[#e4e4e4]'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-4'>
            <div className='w-full pb-4 flex flex-col items-center gap-5'>
                <Typography
                    typo="header-3-medium"
                    className='text-gray-600'
                >
                    Testimonials
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-600'
                >
                    Trusted by clients, proven by results.
                </Typography>
            </div>
            <div className='xl:w-[75%] lg:w-[85%] w-[95%] mx-auto flex flex-col gap-6'>
                <Carousel 
                    plugins={[
                        Autoplay({
                            delay: 3000
                        })
                    ]}
                    className="w-full "
                >
                    <CarouselContent>
                        {testimonial_clients.map((data, index) => (
                            <CarouselItem key={data.id}>
                                <Card
                                    className='w-full min-h-[330px] sm:p-4 flex md:flex-row flex-col justify-between items-stretch sm:gap-8 gap-4 border-none bg-white'
                                >
                                    <div className='md:hidden block md:w-[40%] w-full relative'>
                                        <div className='w-full md:h-full xs:h-[350px] h-[200px]'>
                                            <Image 
                                                src={data.img}
                                                alt={`Testimonial ${index+1}`}
                                                className='w-full h-full object-cover rounded-xl'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex-1 flex flex-col justify-between items-center xs:gap-3 text-center'>
                                        <CardContent className='sm:pt-6 pt-3 flex flex-col items-center gap-6'>
                                            <Pause size={16} color='#165AA1' fill='#165AA1' />
                                            <Typography
                                                typo="body-large-regular"
                                                className='!text-center text-gray-600 !leading-normal'
                                            >
                                                {data.description}
                                            </Typography>
                                        </CardContent>
                                        <CardFooter className='flex flex-col'>
                                            <div className='pb-4 flex flex-col '>
                                                <Typography
                                                    typo="body-medium-semibold"
                                                >
                                                    {data.name}
                                                </Typography>
                                                <Typography
                                                    typo="body-medium-regular"
                                                    className='text-gray-500'
                                                >
                                                    {data.position}
                                                </Typography>
                                            </div>
                                            <div className='w-12 h-8'>
                                                <Image 
                                                    src={data.flag}
                                                    alt='Flag'
                                                    className='w-full h-full object-cover'
                                                />
                                            </div>
                                        </CardFooter>
                                    </div>
                                    <div className='md:block hidden sm:w-[40%] w-full sm:max-h-[320px] relative'>
                                        <div className='w-full sm:h-full'>
                                            <Image 
                                                src={data.img}
                                                alt={`Testimonial ${index+1}`}
                                                className='w-full h-full object-contain rounded-xl'
                                            />
                                        </div>
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='md:block hidden' />
                    <CarouselNext className='md:block hidden' />
                </Carousel>
            </div>
        </section>
    </div>
  )
}

export default Testimonial