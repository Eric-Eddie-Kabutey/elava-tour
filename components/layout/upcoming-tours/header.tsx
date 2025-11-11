import Image from 'next/image'
import Link from 'next/link'
import { User } from 'lucide-react'

import elevatourLogoColored from '@/public/assets/logo/elavatour-logo-colored.png'

export function Header() {
	return (
		<header className='w-full bg-white border-b border-gray-200'>
			<div className='max-container mx-auto px-4'>
				<div className='flex h-20 items-center justify-between'>
					{/* Left Side: Logo */}
					<Link
						href='/'
						className='flex-shrink-0 w-28 md:w-40 h-32 relative top-3 md:top-4 z-[40] overflow-hidden'>
						<Image
							src={elevatourLogoColored}
							alt='Eleva Logo'
							width={180}
							height={100}
							className='object-cover w-full h-full'
						/>
					</Link>

					{/* Right Side: Navigation Links and User Icon */}
					<div className='flex items-center gap-6 text-gray-800'>
						<Link
							href='/login'
							className='text-base font-medium transition-colors hover:text-black'>
							Login
						</Link>
						<Link
							href='/contact'
							className='text-base font-medium transition-colors hover:text-black'>
							Contact Us
						</Link>
						<Link
							href='/account'
							className='flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-white transition-colors hover:bg-gray-100'
							aria-label='View your account'>
							<User className='h-5 w-5 text-gray-700' />
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
