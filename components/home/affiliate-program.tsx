'use client'

import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const AffiliateProgram: FC = () => {
	return (
		<section className='relative min-h-screen flex items-center justify-center py-20 px-4'>
			{/* --- Full-bleed Background Image --- */}
			<Image
				src='/assets/images/home/affiliate-background.jpg'
				alt='Lush green coastal landscape'
				fill
				className='object-cover -z-5'
				priority
			/>

			{/* --- Semi-transparent Content Panel --- */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className='w-full max-w-4xl bg-gray-900/70 backdrop-blur-sm text-yellow-opaque p-8 md:p-12 lg:p-16'>
				<div className='space-y-8'>
					{/* Main Heading */}
					<h1 className='font-serif text-3xl md:text-5xl font-medium tracking-tight'>
						Save for Your Next Adventure – Start Your Eleva Travel Savings Plan
					</h1>

					{/* Introductory Paragraph */}
					<p className='text-lg text-gray-200'>
						Dreaming of your next getaway but not ready to pay all at once? With
						Eleva Tours, you can start saving bit by bit toward your dream
						vacation — and make your next trip stress-free, fully planned, and
						paid for before takeoff!
					</p>

					{/* How It Works Section */}
					<div>
						<h2 className='font-serif text-3xl md:text-4xl font-medium mb-4'>
							Why Choose Eleva Travel Savings?
						</h2>
						<ul className='space-y-3 list-disc list-inside text-gray-300 flex items-center gap-2'>
							<li>Flexible Deposits</li>
							<li>Hidden Fees</li>
							<li>Exclusive Rewards</li>
							<li>Peace of Mind</li>
						</ul>
					</div>

					{/* Final CTA */}
					<div>
						<h2 className='font-serif text-3xl md:text-4xl font-medium'>
							Your Next Adventure Starts Now
						</h2>
						<p className='mt-2 text-gray-300'>
							The world is waiting—let Maximum Impact Travel take you there.{' '}
							<Link
								href='/consultation'
								className='font-bold text-white underline hover:text-gray-200 transition-colors'>
								Contact a consultant
							</Link>
						</p>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default AffiliateProgram
