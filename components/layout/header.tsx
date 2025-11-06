'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Menu, X } from 'lucide-react'
import { navigationData } from '@/data/nav-data'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import clsx from 'clsx'
import DesktopSheetMenu from './desktop-sheet-menu'

import elavaTourLogoWhite from '@/public/assets/logo/elava-tours-logo-white.png'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const pathname = usePathname()

	// Scroll detection effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Body scroll lock for mobile menu
	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
	}, [isMenuOpen])

	return (
		<>
			<header
				className={clsx(
					'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
					isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
				)}>
				{/* Top Bar */}
				<div
					className={clsx(
						'hidden bg-gray-800 transition-all duration-300',
						isScrolled ? 'h-0 overflow-hidden' : 'h-10'
					)}>
					{/* Top bar content can go here */}
				</div>

				{/* Main Navigation */}
				<div className='container mx-auto px-4'>
					<div className='flex justify-between items-center h-20'>
						{/* Logo */}						
						<Link
							href='/'
							className='flex-shrink-0 w-20 h-fit relative top-5 z-[40] bg-blue-500 rounded-md p-2'>
							<Image
								src={elavaTourLogoWhite}
								alt='Elava Logo'
								width={180}
								height={100}
								className='object-cover w-full h-fit'
							/>
						</Link>
						<div className='flex items-center justify-between gap-8'>

							{/* Desktop Navigation Menu */}
							<NavigationMenu className='hidden lg:flex'>
								<NavigationMenuList>
									{navigationData.map((item) => (
										<NavigationMenuItem key={item.title}>
											{item.links ? (
												<>
													<NavigationMenuTrigger
														className={clsx(
															'text-lg font-medium',
															isScrolled ? 'text-gray-900' : 'text-white'
														)}>
														{item.title}
													</NavigationMenuTrigger>
													<NavigationMenuContent>
														<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]'>
															{item.links.map((link) => (
																<li key={link.title}>
																	<NavigationMenuLink asChild>
																		<a
																			href={link.href}
																			className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
																			<div className='text-sm font-medium leading-none'>
																				{link.title}
																			</div>
																		</a>
																	</NavigationMenuLink>
																</li>
															))}
														</ul>
													</NavigationMenuContent>
												</>
											) : (
												<Link href={item.href || '#'} legacyBehavior passHref>
													<NavigationMenuLink
														className={clsx(
															'text-lg font-medium px-4 py-2',
															isScrolled ? 'text-gray-900' : 'text-white'
														)}>
														{item.title}
													</NavigationMenuLink>
												</Link>
											)}
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
							</NavigationMenu>

							{/* hamburger menu */}
							<DesktopSheetMenu />

						</div>


						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(true)}
							className='lg:hidden text-2xl'
							aria-label='Open menu'>
							<Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Panel */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
						className='fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[60] shadow-2xl'>
						<div className='flex justify-between items-center p-4 border-b'>
							<Link href='/' onClick={() => setIsMenuOpen(false)} className='flex-shrink-0 w-20 h-fit relative top-0 z-[40] bg-blue-700'>
								<Image
									src={elavaTourLogoWhite}
									alt='Elava Tours Logo'
									width={180}
									height={100}
									className='object-cover w-full h-fit'
								/>
							</Link>
							<button
								onClick={() => setIsMenuOpen(false)}
								className='p-2'
								aria-label='Close menu'>
								<X className='w-6 h-6 text-gray-700' />
							</button>
						</div>
						<div className='p-4 h-[calc(100vh-70px)] overflow-y-auto'>
							<Accordion type='multiple' className='w-full'>
								{navigationData.map((item) =>
									item.links ? (
										<AccordionItem value={item.title} key={item.title}>
											<AccordionTrigger className='font-semibold text-lg'>
												{item.title}
											</AccordionTrigger>
											<AccordionContent>
												<ul className='pl-4'>
													{item.links.map((link) => (
														<li key={link.title}>
															<Link
																href={link.href}
																onClick={() => setIsMenuOpen(false)}
																className='block py-2 text-gray-600 hover:text-red-600'>
																{link.title}
															</Link>
														</li>
													))}
												</ul>
											</AccordionContent>
										</AccordionItem>
									) : (
										<Link
											key={item.title}
											href={item.href || '#'}
											onClick={() => setIsMenuOpen(false)}
											className='block py-4 font-semibold text-lg border-b'>
											{item.title}
										</Link>
									)
								)}
							</Accordion>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default Header
