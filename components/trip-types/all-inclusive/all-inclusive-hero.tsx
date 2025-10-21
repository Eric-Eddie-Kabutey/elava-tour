'use client';   
import React from 'react';
import inclusiveHeroImg from "@/public/assets/images/inclusive/inclusive_hero_img.png";
import Image from 'next/image';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';

function AllInclusiveHero() {
  return (
    <div className='w-full py-12'>
        <section className='w-[80%] max-container mx-auto flex items-center gap-8'>
            <div className='flex-1 max-w-[600px] flex flex-col gap-3'>
                <div className='flex flex-col gap- text-black'>
                    <Typography
                        typo="header-2-semibold"
                        className='leading-none !font-bold'
                    >18-to-</Typography>
                    <Typography
                        typo="header-2-semibold"
                        className='leading-none !font-bold'
                    >Thirtysomethings</Typography>
                    <Typography
                        typo="header-4-semibold"
                    >
                        Adventure on your terms
                    </Typography>
                </div>
                <Typography
                    typo="body-large-regular"
                >
                    Thinking of adventuring the world? Whether it&apos;s adventure, culture, or just good times, you call the shots.
                </Typography>
                <div>
                    <Button
                        variant="primary"
                        className='text-lg rounded-xl'
                    >
                        See all 18-to-Thirtysomethings tours
                    </Button>
                </div>
            </div>
            <div className='flex-1 h-[400px]'>
                <Image 
                    src={inclusiveHeroImg}
                    alt='Inclusive image'
                    className='w-full h-full'
                />
            </div>
        </section>
    </div>
  )
}

export default AllInclusiveHero