'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { tourImages } from '@/constants';



function TourPhotos() {
  return (
    <div className='w-full h-[1000px] md:py-10 py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
        <section className='tour-bg w-full h-[500px] flex flex-col gap-3 overflow-visible'>
            <div className='xl:w-[85%] w-[90%] pt-32 max-container mx-auto flex flex-col gap-6 text-white'>
                <Typography
                    typo="header-4-semibold"
                >Belize tour photos from our travellers</Typography>
                <div className='w-full p-6 md:columns-5 sm:columns-4 columns-3 gap-4 bg-white rounded-md'>
                    {tourImages.map((image, index) => (
                        <div key={`tour image+${index+1}`} className='relative mb-4 break-inside-avoid w-auto md:h-[200px] sm:h-[170px] xs:h-[140px] h-[120px]'>
                            <Image 
                                src={image}
                                alt={`Photo ${index+1}`}
                                className='w-full h-full object-cover rounded-md'
                            />
                            <div className='absolute inset-0 group hover:bg-black/40 transition-all duration-400 ease-in-out'>
                                <div className='w-full p-4 flex xs:flex-row flex-col items-center gap-2'>
                                    <Instagram color='#fff' size={18} />
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