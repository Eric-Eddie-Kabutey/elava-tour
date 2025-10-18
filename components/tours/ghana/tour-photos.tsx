'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import tour1 from '@/public/assets/images/tour_photos/tour_photo1.jpg'
import tour2 from '@/public/assets/images/tour_photos/tour_photo2.jpg'
import tour3 from '@/public/assets/images/tour_photos/tour_photo3.jpg'
import tour4 from '@/public/assets/images/tour_photos/tour_photo4.jpg'
import tour5 from '@/public/assets/images/tour_photos/tour_photo5.jpg'
import tour6 from '@/public/assets/images/tour_photos/tour_photo6.jpg'
import tour7 from '@/public/assets/images/tour_photos/tour_photo7.jpg'
import tour8 from '@/public/assets/images/tour_photos/tour_photo8.jpg'
import tour9 from '@/public/assets/images/tour_photos/tour_photo9.jpg'
import tour10 from '@/public/assets/images/tour_photos/tour_photo10.jpg'
import tour11 from '@/public/assets/images/tour_photos/tour_photo11.jpg'
import tour12 from '@/public/assets/images/tour_photos/tour_photo12.jpg'
import tour13 from '@/public/assets/images/tour_photos/tour_photo13.jpg'
import tour14 from '@/public/assets/images/tour_photos/tour_photo14.jpg'
import tour15 from '@/public/assets/images/tour_photos/tour_photo14.jpg'
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const tourImages = [
    tour1, tour2, tour3, tour4, tour5, tour6, tour7, tour8, tour9, tour10,
    tour11, tour12, tour13, tour14, tour15
]

function TourPhotos() {
  return (
    <div className='w-full h-[1000px] py-10 bg-gradient-to-br from-gray-50 to-gray-100'>
        <section className='tour-bg w-full h-[500px] flex flex-col gap-3 overflow-visible'>
            <div className='w-[85%] pt-32 max-container mx-auto flex flex-col gap-6 text-white'>
                <Typography
                    typo="header-4-semibold"
                >Belize tour photos from our travellers</Typography>
                <div className='w-full p-6 columns-5 gap-4 bg-white rounded-md'>
                    {tourImages.map((image, index) => (
                        <div key={`tour image+${index+1}`} className='relative mb-4 break-inside-avoid w-auto h-[200px]'>
                            <Image 
                                src={image}
                                alt={`Photo ${index+1}`}
                                className='w-full h-full object-cover rounded-md'
                            />
                            <div className='absolute inset-0 group hover:bg-black/40 transition-all duration-400 ease-in-out'>
                                <div className='w-full p-4 flex items-center gap-2'>
                                    <Instagram color='#fff' size={20} />
                                    <Typography
                                        typo="body-medium-medium"
                                        className='hidden group-hover:block'
                                    >Konongo</Typography>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default TourPhotos