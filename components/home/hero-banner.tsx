'use client'

import type { FC } from 'react'
import { motion } from 'framer-motion'

const VAMTAM_H1_CLASS = 'font-vamtam-h1'

const BrandHero: FC = () => {
	return (
		// 1. The main section is the anchor for all layers.
		<section className='relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden'>
			{/* 4. The Main Content Layer */}
			<div className='relative z-10 text-center'>
				<motion.div
					initial='hidden'
					animate='visible'
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { staggerChildren: 0.3, delayChildren: 0.2 },
						},
					}}
					className='flex flex-col items-center'>
					{/* --- Line 1: ELAVA with Overlay --- */}
					<div className='relative'>
						<div className='flex'>
							<motion.h1
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								className={`
                                ${VAMTAM_H1_CLASS} 
                                text-white 
                                text-7xl sm:text-9xl md:text-[150px] lg:text-[250px] 2xl:text-[300px]
                                font-black 
                                tracking-wider
                                leading-none
                            `}>
								ELA
							</motion.h1>

							{/* --- Tagline Overlay for Desktop --- */}
							<motion.div
								variants={{
									hidden: { opacity: 0, scale: 0.8 },
									visible: { opacity: 1, scale: 1 },
								}}
								className='
                        hidden md:block 
                        
                        w-full
                    '>
								<p className='text-xl lg:text-2xl font-bold text-white leading-tight drop-shadow-lg pt-16'>
									We Make Your <br />
									<span className='text-blue-600'>CapeTown</span> &{' '}
									<span className='text-blue-600'>Ghana</span> <br />
									Tours Memorable
								</p>
							</motion.div>

							<motion.h1
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								className={`
                                ${VAMTAM_H1_CLASS} 
                                text-white 
                                text-7xl sm:text-9xl md:text-[150px] lg:text-[250px] 2xl:text-[300px]
                                font-black 
                                tracking-wider
                                leading-none
                            `}>
								VA
							</motion.h1>
						</div>
					</div>

					{/* --- Line 2: TOURS --- */}
					<motion.h1
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						className={`
                    ${VAMTAM_H1_CLASS} 
                    text-white 
                    text-7xl sm:text-9xl md:text-[150px] lg:text-[280px] 2xl:text-[340px]
                    font-black 
                    tracking-wider
                    leading-none
                `}>
						TOURS
					</motion.h1>

					{/* --- Stacked Tagline for Mobile --- */}
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						className='md:hidden mt-8'>
						<p className='text-lg font-bold text-white leading-tight drop-shadow-lg'>
							We Make Your <br />
							<span className='text-blue-400'>CapeTown</span> &{' '}
							<span className='text-blue-400'>Ghana</span> <br />
							Tours Memorable
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default BrandHero
