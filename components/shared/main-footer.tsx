'use client';
import React from 'react'
import Typography from './typography'
import { Facebook, Linkedin, Mail, Music, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import dinerLogoImg from "@/public/assets/icons/diners_club_int_logo.png"
import visacardLogo from "@/public/assets/icons/visacard_logo.jpg"
import mastercardLogo from "@/public/assets/icons/mastercard_logo.png"
import americanexpressLogo from "@/public/assets/icons/american_express_logo.png"
import Image from 'next/image';

const partner_logos = [americanexpressLogo, dinerLogoImg, mastercardLogo, visacardLogo]


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
    <div className='w-full flex flex-col bg-[#04174d]'>
        <section className='max-container 2xl:w-[95%] w-[95%] mx-auto py-16 flex flex-col gap-10'>
            <Typography 
                typo="header-3-regular"
                className='xl:w-[450px] lg:w-[400px] md:w-[350px] text-white'
            >
                Is there a fascinating project <span className='text-gray-300'>brewing in your mind?</span>
            </Typography>
            <div className='w-full flex md:flex-row flex-col justify-between items-center text-white'>
                <div className='flex items-center gap-3'>
                    <Mail size={30} color='#fff' />
                    <Typography
                        typo="header-5-regular"
                    >
                        Info@marcelodesignx.com
                    </Typography>
                </div>
                <div className='flex justify-end items-center gap-6'>
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
                className='text-white xl:!text-[14rem] lg:!text-[9rem] md:!text-[7rem] !text-[6rem] font-bold uppercase !leading-normal'
            >
                Elava tour
            </Typography>
        </div>
        <div className='w-full py-10'>
            <section className='max-container 2xl:w-[95%] w-[95%] mx-auto flex flex-col gap-10'>
                <div className='flex justify-center items-center gap-4'>
                    <div className="text-center text-[14px] text-gray-400">© 2025 Emirates Holidays All rights reserved</div>
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
                <div className='w-full flex justify-between items-center gap-4'>
                    <div className='flex justify-start items-center gap-3'>
                        <Link
                            href="/"
                            className='text-gray-400 hover:text-gray-100'
                        >
                            <Facebook size={20} />
                        </Link>
                        <Link
                            href="/"
                            className='text-gray-400 hover:text-gray-100'
                        >
                            <Youtube size={22} />
                        </Link>
                        <Link
                            href="/"
                            className='text-gray-400 hover:text-gray-100'
                        >
                            <Linkedin size={20} />
                        </Link>
                        <Link
                            href="/"
                            className='text-gray-400 hover:text-gray-100'
                        >
                            <Twitter size={20} />
                        </Link>
                        <Link
                            href="/"
                            className='text-gray-400 hover:text-gray-100'
                        >
                            <Music size={20} />
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