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
import earnIcon from "@/public/assets/icons/earn_icon.jpeg";
import customerIcon from "@/public/assets/icons/customer_service_icon.jpeg";
import Image from 'next/image';
import { Plane, Play, Tag } from 'lucide-react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
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
        icon: earnIcon,
        title: "Earn and redeem Skywards Miles",
    },
    {
        id: "1",
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
        <section className='max-container w-full'>
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
                        <div className="w-full 2xl:h-[480px] h-fit">
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
            <div className='lg:w-[80%] w-[90%] mx-auto flex flex-col gap-4'>
                <div className='w-full -mt-12 pb-8 px-4 flex flex-col bg-white'>
                    <div className='w-full h-fit pt-3 flex justify-between gap-1'>
                        <button className='flex-1 py-3 flex justify-center items-center gap-3 border-b-2 border-red-600'>
                            <Plane color='#000' size={28} className='xs:flex hidden' />
                            <span className='sm:text-lg'>Search Holidays</span>
                        </button>
                        
                        <button className='flex-1 py-3 flex justify-center items-center gap-3 border-b-2 border-red-600'>
                            <Tag color='#000' size={28} className='xs:flex hidden' />
                            <span className='sm:text-lg'>Manage Booking</span>
                        </button>
                    </div>
                    <form className="px-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
                        <div className="flex flex-col gap-2">
                            <Select>
                                <SelectTrigger >
                                    <SelectValue className='!py-4 border' placeholder="-- Select Default Airport --" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectItem value="accra">Accra</SelectItem>
                                    <SelectItem value="kumasi">Kumasi</SelectItem>
                                    <SelectItem value="takoradi">Takoradi</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col">
                            <Input placeholder="Enter a destination or hotel name" 
                                className='!py-4 border border-black'
                            />
                        </div>

                        <div className="px-3 flex gap-3 border border-black rounded-md bg-white">
                            <div className="flex flex-col flex-1">
                                <Label className="text-[13px] font-normal">Departing</Label>
                                <Input
                                    type={departingType}
                                    value={departing}
                                    onFocus={() => setDepartingType("date")}
                                    onBlur={(e) => {
                                        if (!e.target.value) setDepartingType("text");
                                    }}
                                    onChange={(e) => setDeparting(e.target.value)}
                                    placeholder="Check-In"
                                    className="px-0 text-[12px] border-none focus:ring-0 outline-none"
                                />
                            </div>

                            {/* Returning */}
                            <div className="flex flex-col flex-1">
                                <Label className="text-[13px] font-normal">Returning</Label>
                                <Input
                                    type={returningType}
                                    value={returning}
                                    onFocus={() => setReturningType("date")}
                                    onBlur={(e) => {
                                        if (!e.target.value) setReturningType("text");
                                    }}
                                    onChange={(e) => setReturning(e.target.value)}
                                    placeholder="Check-Out"
                                    className="px-0 text-[12px] border-none focus:ring-0 outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="1 Room (2 Adults)" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1room">1 Room (2 Adults)</SelectItem>
                                <SelectItem value="2room">2 Rooms (4 Adults)</SelectItem>
                                <SelectItem value="3room">3 Rooms (6 Adults)</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Economy" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="economy">Economy</SelectItem>
                                    <SelectItem value="business">Business</SelectItem>
                                    <SelectItem value="first">First Class</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex justify-end">
                            <Button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white px-8">
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
                <div className='w-full sm:block hidden overflow-auto'>
                    <div className=' w-full grid grid-cols-5 sm:gap-[2px] gap-4'>
                        {services.map((data, index) => (
                            <div key={data.id} className='p-3 flex flex-col justify-center items-center gap-2 bg-white hover:border-b-2 hover:border-red-800'>
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