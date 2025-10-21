'use client';
import React, { useState } from 'react';
import quoteImg from "@/public/assets/icons/quote_img.png";
import Image from 'next/image';
import Typography from '@/components/shared/typography';
import StarRating from '@/components/shared/star-rating';
import { Instagram, Star } from 'lucide-react';
import Link from 'next/link';
import { tourImages } from '@/constants';
import { Button } from '@/components/ui/button';

const review_rate = [
    {
        id: "1",
        title: "Excellent",
        percentage: "78%",
        color: "#00b67a",
    },
    {
        id: "2",
        title: "Great",
        percentage: "17%",
        color: "#73cf11",
    },
    {
        id: "3",
        title: "Average",
        percentage: "5%",
        color: "#5c5c70",
    },
    {
        id: "4",
        title: "poor",
        percentage: "0%",
        color: "#ebedef",
    },
    {
        id: "5",
        title: "Bad",
        percentage: "0%",
        color: "#ebedef",
    },
]

function SawCaptured() {
    const [isMore, setIsMore] = useState(false)

    const moreImages = isMore ? tourImages : tourImages.slice(0, 12)
  return (
    <div className='w-full py-12 bg-gradient-to-br from-gray-50 to-gray-100'>
        <section className='w-[78%] max-container mx-auto flex justify-between gap-10'>
            <div className='w-[500px] h-fit pb-8 relative'> 
                <div className='absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#f0609e] -z-[5]'></div>
                <div className='w-[95%] ml-auto px-6 pb-4 flex flex-col gap-5 bg-[#eff1f5] z-[20]'>
                    <div className='-mt-9 flex flex-col'>
                        <div className='w-24 h-fit'>
                            <Image 
                                src={quoteImg}
                                alt='Quote image'
                                className=''
                            />
                        </div>
                        <Typography
                            typo="header-2-bold"
                            className='!leading-[3.8rem]'
                        >Our ears are burning</Typography>
                    </div>
                    <div className='w-full flex flex-col gap-3'>
                        <div className='w-full flex justify-between items-center gap-3'>
                            <StarRating rating={5} />
                            <div className='flex justify-end items-center gap-'>
                                <Star size={25} fill='#00b67a' color='#eff1f5' />
                                <Typography
                                    typo="body-large-medium"
                                >Trustpilot</Typography>
                            </div>
                        </div>
                    </div>
                    <div className='w-full pt-4 flex flex-col gap-4 border-t border-gray-300'>
                        <div className='flex items-center gap-2'>
                            <Typography
                                typo="header-5-semibold"
                            >Reviews</Typography>
                            <Typography
                                typo="header-6-regular"
                                className='text-gray-500'
                            >26491</Typography>
                        </div>  
                        <div className='p-2 flex flex-col gap-3'>
                            <div className='pb-6 flex flex-col gap-2 border-b'>
                                {review_rate.map(data => (
                                    <div 
                                        className='w-full flex justify-between items-center gap-3'
                                        key={data.id}
                                    >
                                        <div className='w-16 text-sm'>{data.title}</div>
                                        <div className='flex-1 h-4 bg-gray-200 overflow-hidden'>
                                            <div
                                                className='h-full transition-all duration-500'
                                                style={{
                                                width: data.percentage,
                                                backgroundColor: data.color,
                                                }}
                                            ></div>
                                        </div>
                                        <div className='w-10 flex items-center justify-end'>{data.percentage}</div>
                                    </div>
                                ))}
                            </div>
                            <div className='py-2 flex flex-col gap-2'>
                                <div className='flex items-center gap-2'>
                                    <span className='font-medium'>Eilish R.,</span>
                                    <span className='font-regular'>July 20</span>
                                </div>
                                <StarRating rating={5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-3'>
                <Typography
                    typo="header-2-bold"
                    className='!leading-tight'
                >They went. They saw. They captured.</Typography>
                <Link
                    href="/"
                    className='text-lg text-[#f0609e] underline'
                >
                    Follow us on Instagram
                </Link>
                <div className='w-full h-[500px] flex flex-col gap-6 overflow-auto'>
                    <div className='w-full h-fit grid grid-cols-4 gap-3 border'>
                        {moreImages.map((image, index) => (
                            <div key={`tour image+${index+1}`} className='relative break-inside-avoid w-auto h-[150px]'>
                                <Image 
                                    src={image}
                                    alt={`Photo ${index+1}`}
                                    className='w-full h-full object-cover rounded-md'
                                />
                                <div className='absolute inset-0 group hover:bg-black/40 transition-all duration-400 ease-in-out rounded-md'>
                                    <div className='w-full p-4 flex items-center gap-2'>
                                        <Instagram color='#fff' size={20} />
                                        <Typography
                                            typo="body-medium-medium"
                                            className='hidden group-hover:block text-white'
                                        >Konongo</Typography>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button
                        variant="primary"
                        onClick={() => setIsMore(!isMore)}
                        className='w-fit rounded-md'
                    >
                        {isMore ? "View Less" : "View More"}
                    </Button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SawCaptured