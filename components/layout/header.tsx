'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
import { ChevronDownCircle, Menu } from 'lucide-react'
import { navigationData } from '@/data/nav-data'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import clsx from 'clsx'
import elavaTourLogoWhite from '@/public/assets/logo/elava-tours-logo-white.png'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

// Helper type for our updated navigation data structure
type NavItem = (typeof navigationData)[0] & {
	tripTypes?: { title: string; href: string }[]
}

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

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
		(item) => item.title === 'All Destinations'
	) as NavItem | undefined
	const dealsItem = navigationData.find((item) => item.title === 'Deals')
	const insightsItem = navigationData.find((item) => item.title === 'Insights')
	const faqsItem = navigationData.find((item) => item.title === 'FAQs')

	return (
		<>
			<header
				className={clsx(
					'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
					isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
				)}>
				{/* ... Top Bar and Logo ... */}
				<div className='container mx-auto px-4'>
					<div className='flex justify-between items-center h-20'>
						{/* Logo */}
						<Link
							href='/'
							className={clsx(
								'flex-shrink-0 w-40 h-32 relative top-2 z-[40] rounded-md py-0 px-0 ',
								isScrolled ? 'bg-blue-700 mt-2' : ''
							)}>
							<Image
								src={elavaTourLogoWhite}
								alt='Elava Logo'
								width={180}
								height={100}
								className='object-cover w-full h-fit'
							/>
						</Link>
						<div className='flex items-center justify-between gap-8'>
							<nav className='hidden lg:flex items-center gap-2'>
								{/* ====== 2. UPDATED "About Us" LINK ====== */}
								{aboutUsItem && (
									<Link href={aboutUsItem.href || '#'} legacyBehavior passHref>
										<a
											className={clsx(
												navigationMenuTriggerStyle(),
												isScrolled ? 'text-gray-900' : 'text-white',
												'bg-transparent text-lg font-medium'
											)}>
											{aboutUsItem.title}
										</a>
									</Link>
								)}

								<NavigationMenu>
									<NavigationMenuList>
										{destinationsItem?.links && (
											<NavigationMenuItem>
												<NavigationMenuTrigger
													className={clsx(
														'text-lg font-medium',
														isScrolled ? 'text-gray-900' : 'text-white',
														'bg-transparent hover:bg-accent/50'
													)}>
													{destinationsItem.title}
												</NavigationMenuTrigger>
												<NavigationMenuContent>
													<div className='grid grid-cols-2 gap-4 p-4 w-[500px] lg:w-[500px]'>
														<div>
															<h3 className='font-semibold text-gray-500 text-sm px-3 mb-2'>
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
										)}
									</NavigationMenuList>
								</NavigationMenu>

								{dealsItem?.links && (
									<NavDropdown
										title={dealsItem.title}
										links={dealsItem.links}
										isScrolled={isScrolled}
									/>
								)}
								{insightsItem?.links && (
									<NavDropdown
										title={insightsItem.title}
										links={insightsItem.links}
										isScrolled={isScrolled}
									/>
								)}
								
								{faqsItem && (
									<Link href={faqsItem.href || '#'} legacyBehavior passHref>
										<a
											className={clsx(
												navigationMenuTriggerStyle(),
												isScrolled ? 'text-gray-900' : 'text-white',
												'bg-transparent text-lg font-medium'
											)}>
											{faqsItem.title}
										</a>
									</Link>
								)}
							</nav>
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

			{/* ====== MOBILE MENU ====== */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
						className='fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[60] shadow-2xl'>
						{/* ... Mobile Header (no changes) ... */}
						<div className='p-4 h-[calc(100vh-70px)] overflow-y-auto'>
							<Accordion type='multiple' className='w-full'>
								{(navigationData as NavItem[]).map((item) =>
									item.links ? (
										<AccordionItem value={item.title} key={item.title}>
											<AccordionTrigger className='font-semibold text-lg'>
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

// Helper component for simple dropdowns
const NavDropdown = ({
	title,
	links,
	isScrolled,
}: {
	title: string
	links: { title: string; href: string }[]
	isScrolled: boolean
}) => (
	<DropdownMenu>
		<DropdownMenuTrigger
			className={clsx(
				'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',
				isScrolled ? 'text-gray-900' : 'text-white',
				'hover:bg-accent/50'
			)}>
			{title}
			<ChevronDownCircle
				className='relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180'
				aria-hidden='true'
			/>
		</DropdownMenuTrigger>
		<DropdownMenuContent>
			{links.map((link) => (
				<DropdownMenuItem key={link.title} asChild>
					<Link href={link.href}>{link.title}</Link>
				</DropdownMenuItem>
			))}
		</DropdownMenuContent>
	</DropdownMenu>
)

// Helper component for Desktop menu items for cleaner code
const ListItem = ({ href, title }: { href: string; title: string }) => (
	<li>
		<NavigationMenuLink asChild>
			<a
				href={href}
				className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
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
			className='block py-2 text-gray-600 hover:text-blue-600'>
			{title}
		</Link>
	</li>
)

export default Header
