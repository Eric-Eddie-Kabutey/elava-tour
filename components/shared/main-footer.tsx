'use client';
import React from 'react'
import Typography from './typography'
import { Facebook, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import visacardLogo from "@/public/assets/icons/visacard_logo.jpg"
import mastercardLogo from "@/public/assets/icons/mastercard_logo.png"
import americanexpressLogo from "@/public/assets/icons/american_express_logo.png"
import Image from 'next/image';

const partner_logos = [americanexpressLogo, mastercardLogo, visacardLogo]


const nav_links = [
  {
    title: "Destinations",
    href: "/",
  },
  {
    title: "Tours",
    href: "/",
    
  },
  {
    title: "About",
    href: "/",
   
  },
  {
    title: "Insights",
    href: "/",
  },
]

function MainFooter() {
  return (
    <div className='w-full flex flex-col bg-green-opaque'>
        <section className='max-container 2xl:w-[95%] w-[95%] mx-auto py-8 md:py-16 flex flex-col gap-10'>
            <Typography 
                typo="header-3-regular"
                className='hidden md:block xl:w-[490px] md:w-[450px] sm:w-[390px] text-white'
              >
                  Is there a dream destination 
                <span className='text-gray-300'> waiting to be explored?</span>
            </Typography>
            <div className='w-full flex md:flex-row flex-col justify-between items-center text-white'>
                <div className='hidden md:flex items-center gap-3'>
                    <Mail size={30} color='#fff' />
                    <Typography
                        typo="header-5-regular"
                    >
                        Info@elevatour.com
                    </Typography>
                </div>
                <div className='flex justify-end items-center gap-2.5 md:gap-6'>
                    {nav_links.map((data) => (
                        <Link
                            key={data.title}
                            href={data.href} 
                            className='text-xl hover:text-gray-300'
                        >{data.title}</Link>
                    ))}
                </div>
            </div>
        </section>
        <div className='w-full py-4 flex justify-center items-center border-y border-gray-500'>
            <Typography
                typo="header-1-semibold"
                className='text-white 2xl:!text-[14rem] xl:!text-[12rem] lg:!text-[10rem] md:!text-[7rem] sm:!text-[6rem] xs:!text-[4.5rem] !text-[3.5rem] font-bold uppercase !leading-normal'
            >
                Eleva tours
            </Typography>
        </div>
        <div className='w-full py-10'>
            <section className='max-container 2xl:w-[95%] w-[95%] mx-auto flex flex-col gap-10'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                      <div className="text-center text-[14px] text-gray-400">© 2025 Evala Tours All rights reserved</div>

                      <div className='md:hidden border-b border-gray-300 w-full'></div>
                      
                      <div className='flex items-center justify-between'>
                        <Link 
                            href="/" 
                            className="text-center text-[14px] text-gray-400 hover:text-white"
                        >
                            Privacy Policy
                          </Link>                        
                        <Link 
                            href="/" 
                            className="text-center text-[14px] text-gray-400 hover:text-white"
                        >
                            Terms & Conditions
                        </Link>                          
                      </div>
                </div>
                <div className='w-full flex justify-between items-center gap-4'>
                    <div className='flex justify-start items-center gap-3'>
                        <Link
                            href="/"
                            className='text-gray-400 hover:text-gray-100'
                        >
                            <Facebook size={20} className='text-yellow-opaque hover:text-yellow-opaque-hover' />
                        </Link>                        
                        <Link
                            href="/"
                            className='text-gray-400 hover:text-gray-100'
                        >
                            <Instagram size={20} className='text-yellow-opaque hover:text-yellow-opaque-hover' />
                        </Link>                      
                    </div>
                    <div className="flex justify-end items-center gap-4">
                        {partner_logos.map((logo, index) => (
                            <div key={`Logo on${index+1}`} className={`w-fit sm:h-8 h-6`}>
                                <Image
                                    src={logo}
                                    alt={`Logo ${index+1}`}
                                    className="w-full h-full  bg-white rounded-sm"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default MainFooter