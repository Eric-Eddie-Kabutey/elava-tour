'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import Link from 'next/link'

const VAMTAM_H1_CLASS = 'font-vamtam-h1'

const BrandHero = () => {
	// State for the form fields
	const [destination, setDestination] = useState('')
	const [month, setMonth] = useState('')

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault()
		// In a real app, you would navigate to a search results page
		// e.g., router.push(`/tours?destination=${destination}&month=${month}`)
		console.log('Searching for:', { destination, month })
		alert(`Searching for tours in ${destination} for ${month}`)
	}

	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
				{/* ====== LEFT COLUMN: BRANDING AND CTAs ====== */}
				<div className='flex flex-col items-center md:items-start text-center md:text-left'>
					{/* Reduced size "ELAVA TOURS" */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='flex flex-col'>
						<h1
							className={`${VAMTAM_H1_CLASS} text-white text-7xl sm:text-8xl lg:text-9xl font-black tracking-wider leading-none`}>
							ELEVA
						</h1>
						<h1
							className={`${VAMTAM_H1_CLASS} text-white text-7xl sm:text-8xl lg:text-9xl font-black tracking-wider leading-none -mt-4 sm:-mt-6`}>
							TOURS
						</h1>
						<p className='text-white text-lg mt-4'>Discover unforgettable journeys with ELEVA TOURS</p>
					</motion.div>

					{/* Call-to-Action Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto'>
						<Button
							asChild
							size='lg'
							className='bg-yellow-opaque hover:bg-green-opaque text-green-opaque hover:text-yellow-opaque font-bold text-base'>
							<Link href='/tours'>Explore Tours</Link>
						</Button>
						<Button
							asChild
							size='lg'
							variant='outline'
							className='bg-transparent text-yellow-opaque border-yellow-opaque hover:bg-yellow-opaque hover:text-green-opaque font-bold text-base'>
							<Link href='/contact'>Contact Us</Link>
						</Button>
					</motion.div>
				</div>

				{/* ====== RIGHT COLUMN: SEARCH FORM ====== */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}>
					<form
						onSubmit={handleSearch}
						// Glassmorphism effect for the form card
						className='bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/20 space-y-6'>
						<h2 className='text-2xl font-bold text-white text-center'>
							Find Your Next Adventure
						</h2>

						{/* Destination Field */}
						<div className='grid w-full items-center gap-1.5'>
							<Label htmlFor='destination' className='text-white/80'>
								Destination
							</Label>
							<Input
								type='text'
								id='destination'
								placeholder='e.g., Ghana, South Africa'
								value={destination}
								onChange={(e) => setDestination(e.target.value)}
								className='bg-white/80 text-gray-800 placeholder:text-gray-500 border-none'
							/>
						</div>

						{/* Month Field */}
						<div className='grid w-full items-center gap-1.5'>
							<Label htmlFor='month' className='text-white/80'>
								Travel Month
							</Label>
							<Select onValueChange={setMonth} value={month}>
								<SelectTrigger
									id='month'
									className='bg-white/80 text-gray-800 border-none'>
									<SelectValue placeholder='Select a month' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='january'>January</SelectItem>
									<SelectItem value='february'>February</SelectItem>
									<SelectItem value='march'>March</SelectItem>
									{/* ... add all other months ... */}
									<SelectItem value='december'>December</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<Button
							type='submit'
							size='lg'
							className='w-full bg-yellow-opaque hover:bg-green-opaque text-green-opaque hover:text-yellow-opaque font-bold text-base'>
							Search
						</Button>
					</form>
				</motion.div>
			</div>
		</>
	)
}

export default BrandHero
