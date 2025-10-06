'use client';
import React, { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import heroImg1 from "@/public/assets/images/home/hero_img1.jpeg"
import heroImg2 from "@/public/assets/images/home/hero_img2.jpeg"
import heroImg3 from "@/public/assets/images/home/hero_img3.jpeg"
import executiveIcon from "@/public/assets/icons/executive_icon.jpeg";
import depositIcon from "@/public/assets/icons/deposit_icon.jpeg";
import personalizedIcon from "@/public/assets/icons/personalized_icon.jpeg";
import customerIcon from "@/public/assets/icons/customer_service_icon.jpeg";
import Image from 'next/image';
import { Plane, Play, Tag } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const heroImages = [heroImg1, heroImg2, heroImg3]
const services = [
    {
        id: "1",
        icon: executiveIcon,
        title: "Exclusive offers and benefits"
    },
    {
        id: "2  ",
        icon: depositIcon,
        title: "Low deposits and flexible payment options"
    },
    {
        id: "3",
        icon: personalizedIcon,
        title: "Personalised by experts for every budget"
    },
    {
        id: "4",
        icon: customerIcon,
        title: "24/7 Customer Service and in-resort representation"
    },
]


function Hero() {
    const [departing, setDeparting] = useState("");
    const [returning, setReturning] = useState("");
    const [departingType, setDepartingType] = useState("text");
    const [returningType, setReturningType] = useState("text");

  return (
    <div className='w-full flex flex-col gap-6 bg-[#e4e4e4]'>
        <section className=' w-full'>
            <Carousel 
                plugins={[
                    Autoplay({
                    delay: 5000,
                    }),
                ]}
                className="w-full">
                <CarouselContent>
                    {heroImages.map((image, index) => (
                    <CarouselItem key={index} >
                        <div className="w-full h-[75vh] max-h-[700px]">
                            <Image 
                                src={image}
                                alt={`Image ${index+1}`}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
        <section className='max-container w-full pb-4 bg-[#e4e4e4] z-[20]'>
            <div className='lg:w-[75%] w-[80%] mx-auto flex flex-col gap-8'>
                <div className='w-full -mt-12 pb-8 px-4 flex flex-col bg-white'>
                    <div className='w-full flex justify-between items-start gap-1'>
                        <div className='flex-1 flex flex-col gap-3'>
                            <button className='flex-1 py-3 flex justify-center items-center gap-3 border-b-2 border-blue-700 hover:border-black'>
                                <Plane color='#000' size={28} className='xs:flex hidden' />
                                <span className='sm:text-lg'>Search Holidays</span>
                            </button>
                            <form className="px-2 flex flex-col gap-3 mt-4">
                                <div className='w-full flex justify-between gap-2'>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <Select>
                                            <SelectTrigger >
                                                <SelectValue className='!py-4 border' placeholder="-- Where to --" />
                                            </SelectTrigger>
                                            <SelectContent >
                                                <SelectItem value="gambia">Gambia</SelectItem>
                                                <SelectItem value="uk">UK</SelectItem>
                                                <SelectItem value="canada">Canada</SelectItem>
                                            </SelectContent>    
                                        </Select>
                                    </div>

                                    <div className="flex-1 flex flex-col">
                                        <Input 
                                            type={returningType}
                                            value={returning}
                                            onFocus={() => setReturningType("date")}
                                            onBlur={(e) => {
                                                if (!e.target.value) setReturningType("text");
                                            }}
                                            onChange={(e) => setReturning(e.target.value)}
                                            placeholder="Date"

                                            className='!py-4 border border-black'
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button className="w-full py-3 bg-blue-700 hover:bg-blue-600 text-white px-8">
                                        <span className='flex-1'>
                                            Search
                                        </span>
                                        <Play fill='#fff' 
                                            className='w-fit'
                                        />
                                    </Button>
                                </div>

                                
                            </form>
                        </div>
                        <div className='w-[1.5px] h-10 mt-2 bg-gray-300'></div>
                        <div className='flex-1 flex flex-col gap-3'>
                            <button className='flex-1 py-3 flex justify-center items-center gap-3 border-b-2 border-blue-700 hover:border-black'>
                                <Tag color='#000' size={28} className='xs:flex hidden' />
                                <span className='sm:text-lg'>Customize Plan</span>
                            </button>
                            <form className="px-2 flex flex-col gap-3 mt-4">
                                <div className='w-full flex justify-between gap-2'>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <Select>
                                            <SelectTrigger >
                                                <SelectValue className='!py-4 border' placeholder="-- How many are you? --" />
                                            </SelectTrigger>
                                            <SelectContent >
                                                <SelectItem value="2-4">2 - 5</SelectItem>
                                                <SelectItem value="6-10">6 - 10</SelectItem>
                                                <SelectItem value="11-15">11 - 15</SelectItem>
                                            </SelectContent>    
                                        </Select>
                                    </div>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <Select>
                                            <SelectTrigger >
                                                <SelectValue className='!py-4 border' placeholder="-- What is your budget? --" />
                                            </SelectTrigger>
                                            <SelectContent >
                                                <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                                                <SelectItem value="3000-5000">$3,000 - $8,000</SelectItem>
                                                <SelectItem value="5500-8000">$5,500 - $8,000</SelectItem>
                                            </SelectContent>    
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button className="w-full py-3 bg-blue-700 hover:bg-blue-600 text-white px-8">
                                        <span className='flex-1'>
                                            Search
                                        </span>
                                        <Play fill='#fff' 
                                            className='w-fit'
                                        />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
                <div className='w-full sm:block hidden overflow-auto'>
                    <div className=' w-full grid grid-cols-4 sm:gap-[3px] gap-4'>
                        {services.map((data, index) => (
                            <div key={data.id} className='p-6 flex flex-col justify-center items-center gap-2 bg-white hover:border-b-2 hover:border-blue-800'>
                                <Image 
                                    src={data.icon}
                                    alt={`services ${index+1}`}
                                    className='w-12 h-fit'
                                />
                                <div className='text-center font-medium text-gray-400 leading-5'>{data.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero