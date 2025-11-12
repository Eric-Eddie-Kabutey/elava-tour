'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
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
import elavatourLogoColored from '@/public/assets/logo/elavatour-logo-colored.png'
import elavatourLogoWhite from '@/public/assets/logo/elavatour-logo-white.png'
import { Button } from '../ui/button'

// Helper type for our updated navigation data structure
type NavItem = (typeof navigationData)[0] & {
	tripTypes?: { title: string; href: string }[]
}

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathname = usePathname()

	// 1. Determine if we are on the homepage.
	const isHomePage = pathname === '/' ? true : false

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
	}, [isMenuOpen])

	// Find specific navigation items to handle them differently
	const aboutUsItem = navigationData.find((item) => item.title === 'About Us')
	const destinationsItem = navigationData.find(
		(item) => item.title === 'Destinations'
	) as NavItem | undefined
	const tripTypesItem = navigationData.find((item) => item.title === 'Trip Types')
	const dealsItem = navigationData.find((item) => item.title === 'Deals')
	const faqsItem = navigationData.find((item) => item.title === 'FAQs')
	const insightsItem = navigationData.find((item) => item.title === 'Insights')
	const Consultation = navigationData.find(
		(item) => item.title === 'Consultation'
	)

	return (
		<>
			<header
				className={clsx(
					'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
					isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
				)}>
				<div className='container mx-auto px-4'>
					<div className='flex justify-between items-center h-20'>
						{/* Logo */}
						<Link
							href='/'
							className={clsx(
								'flex-shrink-0 w-40 h-32 relative top-0 md:top-2 z-[40] rounded-md py-0 px-0 ',
								isScrolled ? '' : ''
							)}>
							{isScrolled ? (
								<Image
									src={elavatourLogoColored}
									alt='Elava Logo'
									width={180}
									height={100}
									className='object-cover w-full h-fit'
								/>
							) : !isHomePage && !isScrolled ? (
								<Image
									src={elavatourLogoColored}
									alt='Elava Logo'
									width={180}
									height={100}
									className='object-cover w-full h-fit'
								/>
							) : (
								<Image
									src={elavatourLogoWhite}
									alt='Elava Logo'
									width={180}
									height={100}
									className='object-cover w-full h-fit'
								/>
							)}
						</Link>
						<div className='flex items-center justify-between gap-8'>
							{/* ====== DESKTOP NAVIGATION  ====== */}
							<nav className='hidden lg:flex items-center gap-2'>
								{aboutUsItem && (
									<Link href={aboutUsItem.href || '#'} legacyBehavior passHref>
										<a
											className={clsx(
												navigationMenuTriggerStyle(),
												isScrolled
													? 'text-green-opaque'
													: !isHomePage && !isScrolled
													? 'text-green-opaque'
													: 'text-white',
												'bg-transparent text-lg font-medium hover:bg-yellow-opaque hover:text-green-opaque'
											)}>
											{aboutUsItem.title}
										</a>
									</Link>
								)}

								{/* A SINGLE NAVIGATION MENU WRAPS ALL DROPDOWN ITEMS */}
								<NavigationMenu>
									<NavigationMenuList>
										{/* "All Destinations" Mega-Menu */}
										{/* {destinationsItem?.links && (
											<NavigationMenuItem>
												<NavigationMenuTrigger
													className={clsx(
														'text-sm font-medium',
														isScrolled
															? 'text-gray-900'
															: !isHomePage && !isScrolled
															? 'text-green-opaque'
															: 'text-white',
														'bg-transparent '
													)}>
													{destinationsItem.title}
												</NavigationMenuTrigger>
												<NavigationMenuContent>
													<div className='grid grid-cols-2 gap-4 p-4 w-[500px] lg:w-[500px]'>
														<div>
															<h3 className='font-semibold text-gray-500 text-sm  px-3 mb-2'>
																Destinations
															</h3>
															<ul>
																{destinationsItem.links.map((link) => (
																	<ListItem
																		key={link.title}
																		href={link.href}
																		title={link.title}
																	/>
																))}
															</ul>
														</div>
														<div className='border-l border-gray-200 pl-4'>
															<h3 className='font-semibold text-gray-500 text-sm px-3 mb-2'>
																Trip Types
															</h3>
															<ul>
																{destinationsItem.tripTypes?.map((link) => (
																	<ListItem
																		key={link.title}
																		href={link.href}
																		title={link.title}
																	/>
																))}
															</ul>
														</div>
													</div>
												</NavigationMenuContent>
											</NavigationMenuItem>
										)} */}

										{/* "Trip Types" Simple Dropdown */}
										{destinationsItem?.links && (
											<NavigationMenuItem>
												<NavigationMenuTrigger
													className={clsx(
														'text-sm font-medium',
														isScrolled
															? 'text-gray-900'
															: !isHomePage && !isScrolled
															? 'text-green-opaque'
															: 'text-white',
														'bg-transparent hover:bg-accent/50'
													)}>
													{destinationsItem.title}
												</NavigationMenuTrigger>
												<NavigationMenuContent>
													<ul className='grid w-[250px] gap-3 p-4'>
														{destinationsItem.links.map((link) => (
															<ListItem
																key={link.title}
																href={link.href}
																title={link.title}
															/>
														))}
													</ul>
												</NavigationMenuContent>
											</NavigationMenuItem>
										)}

										{/* "Trip Types" Simple Dropdown */}
										{tripTypesItem?.links && (
											<NavigationMenuItem>
												<NavigationMenuTrigger
													className={clsx(
														'text-sm font-medium',
														isScrolled
															? 'text-gray-900'
															: !isHomePage && !isScrolled
															? 'text-green-opaque'
															: 'text-white',
														'bg-transparent hover:bg-accent/50'
													)}>
													{tripTypesItem.title}
												</NavigationMenuTrigger>
												<NavigationMenuContent>
													<ul className='grid w-[250px] gap-3 p-4'>
														{tripTypesItem.links.map((link) => (
															<ListItem
																key={link.title}
																href={link.href}
																title={link.title}
															/>
														))}
													</ul>
												</NavigationMenuContent>
											</NavigationMenuItem>
										)}

										{/* "Deals" Simple Dropdown */}
										{dealsItem?.links && (
											<NavigationMenuItem>
												<NavigationMenuTrigger
													className={clsx(
														'text-sm font-medium',
														isScrolled
															? 'text-gray-900'
															: !isHomePage && !isScrolled
															? 'text-green-opaque'
															: 'text-white',
														'bg-transparent hover:bg-accent/50'
													)}>
													{dealsItem.title}
												</NavigationMenuTrigger>
												<NavigationMenuContent>
													<ul className='grid w-[250px] gap-3 p-4'>
														{dealsItem.links.map((link) => (
															<ListItem
																key={link.title}
																href={link.href}
																title={link.title}
															/>
														))}
													</ul>
												</NavigationMenuContent>
											</NavigationMenuItem>
										)}

										{/* "Insights" Simple Dropdown */}
										{insightsItem?.links && (
											<NavigationMenuItem>
												<NavigationMenuTrigger
													className={clsx(
														'text-sm font-medium',
														isScrolled
															? 'text-gray-900'
															: !isHomePage && !isScrolled
															? 'text-green-opaque'
															: 'text-white',
														'bg-transparent hover:bg-accent/50'
													)}>
													{insightsItem.title}
												</NavigationMenuTrigger>
												<NavigationMenuContent>
													<ul className='grid w-[250px] gap-3 p-4'>
														{insightsItem.links.map((link) => (
															<ListItem
																key={link.title}
																href={link.href}
																title={link.title}
															/>
														))}
													</ul>
												</NavigationMenuContent>
											</NavigationMenuItem>
										)}
									</NavigationMenuList>
								</NavigationMenu>

								{faqsItem && (
									<Link href={faqsItem.href || '#'} legacyBehavior passHref>
										<a
											className={clsx(
												navigationMenuTriggerStyle(),
												isScrolled
													? 'text-green-opaque'
													: !isHomePage && !isScrolled
													? 'text-green-opaque'
													: 'text-white',
												'bg-transparent text-lg font-medium hover:bg-yellow-opaque hover:text-green-opaque'
											)}>
											{faqsItem.title}
										</a>
									</Link>
								)}

								{Consultation && (
									<Button
										variant='outline'
										asChild
										className={clsx(
											'text-sm font-medium bg-transparent',
											isScrolled
												? 'border-yellow-opaque text-green-opaque hover:bg-gray-100 hover:text-green-opaque hover:border-green-opaque'
												: !isHomePage && !isScrolled
												? 'text-green-opaque border border-green-opaque'
												: 'border-white text-white hover:bg-white/20'
										)}>
										<Link href={Consultation.href || '#'}>
											{Consultation.title}
										</Link>
									</Button>
								)}
							</nav>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(true)}
							className='lg:hidden text-2xl'
							aria-label='Open menu'>
							<Menu
								className={
									isScrolled
										? 'text-green-opaque'
										: !isHomePage && !isScrolled
										? 'text-green-opaque'
										: 'text-white'
								}
							/>
						</button>
					</div>
				</div>
			</header>

			{/* ====== MOBILE MENU ====== */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
						className='fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[60] shadow-2xl'>
						<div className='p-4 pt-4.5 h-[calc(100vh-70px)] overflow-y-auto'>
							<div className='flex items-center justify-between mb-4 pr-4'>
								{/* Logo */}
								<Link
									href='/'
									className={clsx(
										' w-32 h-14 py-0 px-0'
									)}>
									<Image
										src={elavatourLogoColored}
										alt='Elava Logo'
										width={100}
										height={60}
										className='object-cover w-full h-16'
									/>
								</Link>

								<button
									className='flex items-end px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
									onClick={() => setIsMenuOpen(false)}>
									<X className='h-6 w-6' />
									<span className='sr-only'>Toggle Menu</span>
								</button>
							</div>
							<Accordion type='multiple' className='w-full'>
								{(navigationData as NavItem[]).map((item) =>
									item.links ? (
										<AccordionItem value={item.title} key={item.title}>
											<AccordionTrigger className='font-semibold text-lg text-green-opaque'>
												{item.title}
											</AccordionTrigger>
											<AccordionContent>
												{/* --- CONDITIONAL NESTED LAYOUT --- */}
												{item.title === 'All Destinations' && item.tripTypes ? (
													// Nested layout for "All Destinations"
													<div className='pl-4'>
														<h4 className='font-semibold text-gray-500 mb-2'>
															Destinations
														</h4>
														<ul>
															{item.links.map((link) => (
																<MobileListItem
																	key={link.title}
																	href={link.href}
																	title={link.title}
																	closeMenu={() => setIsMenuOpen(false)}
																/>
															))}
														</ul>
														<h4 className='font-semibold text-gray-500 mt-4 mb-2'>
															Trip Types
														</h4>
														<ul>
															{item.tripTypes.map((link) => (
																<MobileListItem
																	key={link.title}
																	href={link.href}
																	title={link.title}
																	closeMenu={() => setIsMenuOpen(false)}
																/>
															))}
														</ul>
													</div>
												) : (
													// Default list layout
													<ul className='pl-4'>
														{item.links.map((link) => (
															<MobileListItem
																key={link.title}
																href={link.href}
																title={link.title}
																closeMenu={() => setIsMenuOpen(false)}
															/>
														))}
													</ul>
												)}
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

// Helper component for Desktop menu items for cleaner code
const ListItem = ({ href, title }: { href: string; title: string }) => (
	<li>
		<NavigationMenuLink asChild>
			<a
				href={href}
				className='block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-[#e69f23] hover:text-[#11351c] focus:bg-[#e69f23] focus:text-[#11351c]'>
				<div className='text-sm font-medium leading-none'>{title}</div>
			</a>
		</NavigationMenuLink>
	</li>
)

// Helper component for Mobile menu items
const MobileListItem = ({
	href,
	title,
	closeMenu,
}: {
	href: string
	title: string
	closeMenu: () => void
}) => (
	<li>
		<Link
			href={href}
			onClick={closeMenu}
			className='block py-2 text-green-opaque hover:text-yellow-opaque'>
			{title}
		</Link>
	</li>
)

export default Header
