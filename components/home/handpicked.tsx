'use client';
import React from 'react';
import familyHolidayImg from "@/public/assets/images/home/holiday_1.png"
import allInclusiveImg from "@/public/assets/images/home/holiday_2.png"
import beachHolidaysImg from "@/public/assets/images/home/holiday_3.png"
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';


const holidaysImgs = [familyHolidayImg, allInclusiveImg, beachHolidaysImg]

function Handpicked() {
  return (
    <div className=' w-full py-10 lg:flex flex-col bg-[#e4e4e4]'>                                       
        <section className='w-full '>
            <div className='max-container w-[95%] mx-auto p-12 flex flex-col gap-12'>
                <div className='w-full grid grid-cols-3 gap-6 '>
                    {holidaysImgs.map((data, index) => (
                        <div key={`hOLIDAY ${index+1}`} className='w-full fit overflow-hidden'>
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
                    className='w-fit mx-auto px-8 py-3 flex items-center gap-4 text-yellow-opaque border-yellow-opaque hover:bg-yellow-opaque hover:text-green-opaque font-bold text-base'
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