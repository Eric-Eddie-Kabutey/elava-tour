import React from 'react'
import { Button } from '../ui/button'
import { CircleUserRound, Earth, PhoneCall, Play } from 'lucide-react'

function Header() {
	return (
		<div className='w-full bg-[#e4e4e4]'>
			<section className='max-container relative 2xl:w-[85%] w-[95%] mx-auto flex justify-end items-center '>
				<div className='flex justify-end items-center'>
					<div className='py-2 px-4'>
						<Button asChild variant='primary' className='!py-1'>
							<a href='tel:+27609825693' className='px-1  hidden xs:flex items-center justify-center gap-1 text-white'>
								<PhoneCall className='text-white w-4 h-fit' />
								<span className='font-semibold'>+27 60 982 5693</span>
							</a>
						</Button>
					</div>
					<Button
						variant='outline'
						className='flex justify-between items-end gap-3 px-1 font-semibold text-black rounded-none border-y-0 border-x-2 border-white'>
						<div className='flex items-center gap-1'>
							<Earth />
							SA
						</div>
						<div className='h-fit '>
							<Play fill='#1d4ed8' color='' size={6} className='rotate-45' />
						</div>
					</Button>
					<Button
						variant='outline'
						className='flex justify-between items-end gap-3 px-1 font-regular text-black rounded-none border-y-0 border-x-2 border-white'>
						<div className='flex items-center gap-1'>
							<CircleUserRound />
							LOG IN
						</div>
						<div className='h-fit '>
							<Play fill='#1d4ed8' color='' size={6} className='rotate-45' />
						</div>
					</Button>
				</div>
			</section>
		</div>
	)
}

export default Header
