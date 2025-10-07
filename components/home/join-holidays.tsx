'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

function JoinHolidays() {
    const [expanded, setExpanded] = useState(false);
  return (
    <div className='ekb w-full py-24 bg-white'>
        <section className='max-container w-[80%] mx-auto grid lg:grid-cols-2 gap-12'>
            <div className='flex flex-col gap-4'>
                <Typography
                    typo="header-6-medium"
                    className='sm:!text-2xl'
                >
                    Join the Emirates Holidays Community
                </Typography>
                <Typography
                    typo="body-medium-regular"
                >
                    Sign up to receive exclusive offers and new holiday inspiration direct to your inbox.
                </Typography>
                <div className='flex flex-col gap-5'>
                    <Typography
                        typo="body-medium-regular"
                        className='!leading-normal'
                    >
                        We&apos;re always looking for new ways to inspire your next holiday - fascinating destinations, unique hotels and all the little things that come together to create unforgettable moments for you and your family.
                    </Typography>
                    <div className="flex flex-col gap-3 w-full ">
                    {!expanded ? (
                        <div className="flex items-center gap-2">
                            <input
                                placeholder="Your email address and name to subscribe"
                                className="flex-1 px-2 py-2 placeholder:text-black border border-gray-400 rounded-md outline-none focus:ring-0 cursor-pointer"
                                onFocus={() => setExpanded(true)}
                                readOnly
                            />
                            <Button
                                variant="primary"
                                className="w-fit bg-black hover:bg-gray-600"
                            >
                                Join Now
                            </Button>
                        </div>
                        ) : (
                            <AnimatePresence mode="wait">
                                <motion.form
                                    key="expanded"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="w-full flex xl:flex-row lg:flex-col sm:flex-row flex-col items-center xl:gap-1 gap-3 py-2 rounded-md bg-white shadow-sm"
                                >
                                    <div className="xl:flex-1 w-full flex sm:flex-row flex-col lg:flex-col xl:flex-row xl:gap-1 gap-3">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="xl:max-w-[160px] lg:w-full xl:flex-1  sm:max-w-[160px] sm:flex-1 w-full px-2 py-1 placeholder:font-light text-sm border border-gray-700 outline-none focus:ring-0"
                                        />
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="xl:max-w-[160px] lg:w-full xl:flex-1 sm:max-w-[160px] sm:flex-1 w-full px-2 py-1 border border-gray-700 text-sm outline-none focus:ring-0"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="xl:max-w-[160px] lg:w-full xl:flex-1 sm:max-w-[160px] sm:flex-1 w-full px-2 py-1 border border-gray-700 text-sm outline-none focus:ring-0"
                                        />
                                    </div>

                                    <div className="xl:flex-1 lg:w-full sm:flex-1 w-full flex justify-end gap-2">
                                    
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            className="xl:fit w-full py-[6px] bg-black hover:bg-gray-700"
                                        >
                                            Join Now
                                        </Button>
                                    </div>
                                </motion.form>
                            </AnimatePresence>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <Typography
                    typo="header-6-medium"
                    className='sm:!text-2xl'
                >
                    Why Emirates Holidays?
                </Typography>
                <ul className='flex flex-col gap-[2px] list-inside list-disc text-sm'>
                    <li>Personalised holidays</li>
                    <li>Support at every step</li>
                    <li>Get more for your money</li>
                    <li>Fly Better with Emirates</li>
                    <li>Enjoy rewards with Emirates Skywards</li>
                </ul>
                <Typography
                    typo="header-6-medium"
                    className='sm:!text-xl !text-base'
                >
                    <span>For more information, please click </span>
                    <Link href="/"
                        className='text-red-700'
                    >here</Link>
                </Typography>   
            </div>
        </section>
    </div>
  )
}

export default JoinHolidays