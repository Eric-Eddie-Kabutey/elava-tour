export type GalleryImage = {
	id: string
	src: string
	alt: string
}

export type PricingPackage = {
	id: string // e.g., 'child', 'double', 'single'
	title: string
	price: number // Use a number for calculations
	originalPrice?: number // Optional original price for showing discounts
	description: string
	buttonText: string
	buttonLink: string
	deposit: number;
}

export type PackageDetail = {
	label: string
	description: string
}

export type ItineraryDay = {
	day: number
	title: string
	date: string
	location: string
	heading: string
	description: string // The full, long description
	imageUrl: string
}

export type TourDate = {
	id: string // A unique ID for React keys
	displayDate: string // The text shown on the button
	slug: string // The unique identifier for the URL
	heroImageUrl: string
	brochureUrl: string
	aboutTrip: string
	disclaimer: string
	itinerary: ItineraryDay[]
	inclusions: PackageDetail[]
	exclusions: PackageDetail[]
	pricing: PricingPackage[]
	gallery: GalleryImage[]
}

export type YearData = {
	year: number
	dates: TourDate[] // This now uses the new TourDate type
}

export type DestinationDates = {
	destinationSlug: string
	destinationName: string
	years: YearData[]
}

export const upcomingTourDatesData: DestinationDates[] = [
	{
		destinationSlug: 'south-africa-tour',
		destinationName: 'South Africa',
		years: [
			{
				year: 2026,
				dates: [
					{
						id: 'sa-2026-may',
						displayDate: 'May 14 - May 22',
						slug: 'south-africa-may-2026',
						heroImageUrl:
							'/assets/images/upcoming-tours/ghana/ghana-2026/hero-image.jpg',
						brochureUrl: '/brochures/south-africa-may-2026.pdf',
						aboutTrip:
							'Embark on the journey of a lifetime in Ghana! Picture lush green streets, savor scrumptious meals, and embrace the vibrant culture of West Africa. With a team of passionate local guides, your exploration of this beautiful country will be transformative...',
						disclaimer:
							'All sales are final. No refunds, transfers, or exchanges.',
						itinerary: [
							{
								day: 1,
								title: 'Arrival to Ghana',
								date: 'Nov-14-2025',
								location: 'Accra- Ghana',
								heading: 'Akwaaba! An Unforgettable Adventure in Ghana Awaits!',
								description:
									'Welcome to Ghana! Your exciting journey kicks off today as you set foot in Kotoka International Airport. No need to worry about a thing; our friendly team will be right there to greet you, handle your luggage, and whisk you away to your comfortable hotel. Take some time to settle in, relax, and get ready for the incredible adventure that lies ahead. The vibrant sights and sounds of Ghana are waiting for you!',
								imageUrl:
									'https://images.unsplash.com/photo-1589539134371-20902a247f07?q=80&w=1974',
							},
							{
								day: 2,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 3,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 4,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 5,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 6,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 7,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 8,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
						],
						inclusions: [
							{
								label: 'Hotel Accommodations',
								description:
									'Double Occupancy OR Single Occupancy + Daily Breakfast. Hotel upgrades available upon request. Additional fees will apply.',
							},
							{
								label: 'Ground Transportation',
								description:
									'Ground transportation to and from scheduled destinations (does include domestic airfare).',
							},
							{
								label: 'Hotel Amenities',
								description:
									'WiFi, Spa, Bar, Restaurant, Room Service, Fitness Center, Swimming Pool, Meeting Rooms, Air Conditioning, Wheelchair Accessible.',
							},
							{
								label: 'Admission To Activities',
								description: 'Admission to all activities are covered.',
							},
							{
								label: 'Breakfast',
								description: 'Daily Breakfast (starting on Day 2).',
							},
						],
						exclusions: [
							{
								label: 'Vaccinations',
								description:
									'The Yellow Fever vaccine or medical exemption is required; Malaria pills are advised.',
							},
							{
								label: 'Passport & Visa',
								description:
									'The United States Postal Service offers passport services... Please ensure your passport will not expire within six months of your travel date... please check with the Ghana embassy or consulate in your country for entry requirements and any other travel regulations from your country to Ghana.',
							},
							{
								label: 'Lunch and Dinner',
								description:
									'You will be responsible for your own lunch, dinner and snacks. You will be afforded the opportunity to purchase lunch and dinner daily.',
							},
							{
								label: 'No International Airfare',
								description:
									'International airfare is not included in the standard package pricing but may be available as an add-on for an additional cost, subject to availability.',
							},
							{
								label: 'Travel Insurance',
								description:
									'Travel insurance is highly recommended. Trip deposits and payments are non-refundable. Therefore, it is prudent to protect your investment. Insurance options https://bit.ly/travelinsuranceinfo',
							},
							{
								label: 'Gratuities',
								description:
									'Gratuities are not included in the package price. We strongly encourage guests to set aside approximately $20 per day, per guest, to cover tips for guides, drivers, and staff who work hard to make your experience enjoyable.',
							},
						],
						pricing: [
							{
								id: 'child',
								title: 'Child Discount (ages 5 - 11)',
								price: 3599.0,
								originalPrice: 5699.0,
								description:
									'For children ages 5 through 11 yrs old accompanied by an adult. If a child is below the age of 12 this must be selected.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-child',
								deposit: 199.00
							},
							{
								id: 'double',
								title: 'Double Occupancy (per person)',
								price: 5399.0,
								originalPrice: 8399.0,
								description:
									'This room is based on double occupancy, meaning it is shared with another person. If you do not have a roommate, one will be assigned to you.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-double',
								deposit: 299.00
							},
							{
								id: 'single',
								title: 'Single Occupancy (per person)',
								price: 6299.0,
								originalPrice: 9799.0,
								description:
									'Single Occupancy (per person). All Sales Final - No Refunds.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-single',
								deposit: 399.00
							},
						],
						gallery: [
							{
								id: 'gh-gal-1',
								src: '/assets/images/upcoming-tours/south-africa/south-africa-2026/img-1.jpg/photo-1602357283955-f2a8932d54a5',
								alt: 'Woman waving a Ghanaian flag',
							},
							{
								id: 'gh-gal-2',
								src: '/assets/images/upcoming-tours/south-africa/south-africa-2026/img-2.jpg',
								alt: 'Kotoka International Airport sign at night',
							},
							{
								id: 'gh-gal-3',
								src: '/assets/images/upcoming-tours/south-africa/south-africa-2026/img-3.jpg',
								alt: 'Cape Coast Castle',
							},
							{
								id: 'gh-gal-4',
								src: '/assets/images/upcoming-tours/south-africa/south-africa-2026/img-4.jpg',
								alt: "Cascading Dunn's River Falls in Jamaica",
							},
							{
								id: 'gh-gal-5',
								src: '/assets/images/upcoming-tours/south-africa/south-africa-2026/img-5.jpg',
								alt: 'Ancient Fasil Ghebbi fortress in Ethiopia',
							},
							{
								id: 'gh-gal-6',
								src: '/assets/images/upcoming-tours/south-africa/south-africa-2026/img-6.jpg',
								alt: 'Boats in the clear blue water of Trinidad and Tobago',
							},
						],
					},
					{
						id: 'sa-2026-nov',
						displayDate: 'Nov 7 - Nov 15',
						slug: 'south-africa-nov-2026',
						heroImageUrl:
							'/assets/images/upcoming-tours/south-africa/south-africa-2026/hero-image.jpg',
						brochureUrl: '/brochures/south-africa-nov-2026.pdf',
						aboutTrip:
							'Embark on the journey of a lifetime in Ghana! Picture lush green streets, savor scrumptious meals, and embrace the vibrant culture of West Africa. With a team of passionate local guides, your exploration of this beautiful country will be transformative...',
						disclaimer:
							'All sales are final. No refunds, transfers, or exchanges.',
						itinerary: [
							{
								day: 1,
								title: 'Arrival to Ghana',
								date: 'Nov-14-2025',
								location: 'Accra- Ghana',
								heading: 'Akwaaba! An Unforgettable Adventure in Ghana Awaits!',
								description:
									'Welcome to Ghana! Your exciting journey kicks off today as you set foot in Kotoka International Airport. No need to worry about a thing; our friendly team will be right there to greet you, handle your luggage, and whisk you away to your comfortable hotel. Take some time to settle in, relax, and get ready for the incredible adventure that lies ahead. The vibrant sights and sounds of Ghana are waiting for you!',
								imageUrl:
									'https://images.unsplash.com/photo-1589539134371-20902a247f07?q=80&w=1974',
							},
							{
								day: 2,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 3,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 4,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 5,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 6,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 7,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 8,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
						],
						inclusions: [
							{
								label: 'Hotel Accommodations',
								description:
									'Double Occupancy OR Single Occupancy + Daily Breakfast. Hotel upgrades available upon request. Additional fees will apply.',
							},
							{
								label: 'Ground Transportation',
								description:
									'Ground transportation to and from scheduled destinations (does include domestic airfare).',
							},
							{
								label: 'Hotel Amenities',
								description:
									'WiFi, Spa, Bar, Restaurant, Room Service, Fitness Center, Swimming Pool, Meeting Rooms, Air Conditioning, Wheelchair Accessible.',
							},
							{
								label: 'Admission To Activities',
								description: 'Admission to all activities are covered.',
							},
							{
								label: 'Breakfast',
								description: 'Daily Breakfast (starting on Day 2).',
							},
						],
						exclusions: [
							{
								label: 'Vaccinations',
								description:
									'The Yellow Fever vaccine or medical exemption is required; Malaria pills are advised.',
							},
							{
								label: 'Passport & Visa',
								description:
									'The United States Postal Service offers passport services... Please ensure your passport will not expire within six months of your travel date... please check with the Ghana embassy or consulate in your country for entry requirements and any other travel regulations from your country to Ghana.',
							},
							{
								label: 'Lunch and Dinner',
								description:
									'You will be responsible for your own lunch, dinner and snacks. You will be afforded the opportunity to purchase lunch and dinner daily.',
							},
							{
								label: 'No International Airfare',
								description:
									'International airfare is not included in the standard package pricing but may be available as an add-on for an additional cost, subject to availability.',
							},
							{
								label: 'Travel Insurance',
								description:
									'Travel insurance is highly recommended. Trip deposits and payments are non-refundable. Therefore, it is prudent to protect your investment. Insurance options https://bit.ly/travelinsuranceinfo',
							},
							{
								label: 'Gratuities',
								description:
									'Gratuities are not included in the package price. We strongly encourage guests to set aside approximately $20 per day, per guest, to cover tips for guides, drivers, and staff who work hard to make your experience enjoyable.',
							},
						],
						pricing: [
							{
								id: 'child',
								title: 'Child Discount (ages 5 - 11)',
								price: 3599.0,
								originalPrice: 5699.0,
								description:
									'For children ages 5 through 11 yrs old accompanied by an adult. If a child is below the age of 12 this must be selected.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-child',
								deposit: 199.00,
							},
							{
								id: 'double',
								title: 'Double Occupancy (per person)',
								price: 5399.0,
								originalPrice: 8399.0,
								description:
									'This room is based on double occupancy, meaning it is shared with another person. If you do not have a roommate, one will be assigned to you.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-double',
								deposit: 299.00,
							},
							{
								id: 'single',
								title: 'Single Occupancy (per person)',
								price: 6299.0,
								originalPrice: 9799.0,
								description:
									'Single Occupancy (per person). All Sales Final - No Refunds.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-single',
								deposit: 399.00,
							},
						],
						gallery: [
							{
								id: 'gh-gal-1',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg/photo-1602357283955-f2a8932d54a5',
								alt: 'Woman waving a Ghanaian flag',
							},
							{
								id: 'gh-gal-2',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: 'Kotoka International Airport sign at night',
							},
							{
								id: 'gh-gal-3',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: 'Cape Coast Castle',
							},
							{
								id: 'gh-gal-4',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: "Cascading Dunn's River Falls in Jamaica",
							},
							{
								id: 'gh-gal-5',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: 'Ancient Fasil Ghebbi fortress in Ethiopia',
							},
							{
								id: 'gh-gal-6',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: 'Boats in the clear blue water of Trinidad and Tobago',
							},
						],
					},
				],
			},
			{
				year: 2027,
				dates: [
					{
						id: 'sa-2027-may',
						displayDate: 'May 14 - 22',
						slug: 'south-africa-may-2027',
						heroImageUrl:
							'/assets/images/upcoming-tours/ghana/ghana-2027/hero-image.jpg',
						brochureUrl: '/brochures/south-africa-may-2027.pdf',
						aboutTrip:
							'Embark on the journey of a lifetime! Picture lush green streets, savor scrumptious meals, and embrace an incredibly diverse community in the Rainbow Nation. With over 11 official languages and countless ethnic groups, South Africa has something to offer everyone. Immerse yourself in South African culture during this 10-day adventure through Cape Town and Johannesburg. With a team of passionate local guides, your exploration of this beautiful country will be transformative. Enjoy top-tier accommodations, stroll through history-rich towns, marvel at real African wildlife, and immerse yourself in authentic experiences led by locals. It’s time for a change of pace – the City of Gold beckons! To make your journey seamless, Maximum Impact Travel offers comprehensive online training to prepare you for your trip. Once you secure your deposit, you’ll have access to a series of online courses, ensuring you’re fully ready for the adventure ahead. Explore these courses at your own convenience. Let the adventure begin!',
						disclaimer:
							'All sales are final. No refunds, transfers, or exchanges.',
						itinerary: [
							{
								day: 1,
								title: 'Arrival to Ghana',
								date: 'Nov-14-2025',
								location: 'Accra- Ghana',
								heading: 'Akwaaba! An Unforgettable Adventure in Ghana Awaits!',
								description:
									'Welcome to Ghana! Your exciting journey kicks off today as you set foot in Kotoka International Airport. No need to worry about a thing; our friendly team will be right there to greet you, handle your luggage, and whisk you away to your comfortable hotel. Take some time to settle in, relax, and get ready for the incredible adventure that lies ahead. The vibrant sights and sounds of Ghana are waiting for you!',
								imageUrl:
									'https://images.unsplash.com/photo-1589539134371-20902a247f07?q=80&w=1974',
							},
							{
								day: 2,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 3,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 4,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 5,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 6,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 7,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 8,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
						],
						inclusions: [
							{
								label: 'Hotel Accommodations',
								description:
									'Double Occupancy OR Single Occupancy + Daily Breakfast. Hotel upgrades available upon request. Additional fees will apply.',
							},
							{
								label: 'Ground Transportation',
								description:
									'Ground transportation to and from scheduled destinations (does include domestic airfare).',
							},
							{
								label: 'Hotel Amenities',
								description:
									'WiFi, Spa, Bar, Restaurant, Room Service, Fitness Center, Swimming Pool, Meeting Rooms, Air Conditioning, Wheelchair Accessible.',
							},
							{
								label: 'Admission To Activities',
								description: 'Admission to all activities are covered.',
							},
							{
								label: 'Breakfast',
								description: 'Daily Breakfast (starting on Day 2).',
							},
						],
						exclusions: [
							{
								label: 'Vaccinations',
								description:
									'The Yellow Fever vaccine or medical exemption is required; Malaria pills are advised.',
							},
							{
								label: 'Passport & Visa',
								description:
									'The United States Postal Service offers passport services... Please ensure your passport will not expire within six months of your travel date... please check with the Ghana embassy or consulate in your country for entry requirements and any other travel regulations from your country to Ghana.',
							},
							{
								label: 'Lunch and Dinner',
								description:
									'You will be responsible for your own lunch, dinner and snacks. You will be afforded the opportunity to purchase lunch and dinner daily.',
							},
							{
								label: 'No International Airfare',
								description:
									'International airfare is not included in the standard package pricing but may be available as an add-on for an additional cost, subject to availability.',
							},
							{
								label: 'Travel Insurance',
								description:
									'Travel insurance is highly recommended. Trip deposits and payments are non-refundable. Therefore, it is prudent to protect your investment. Insurance options https://bit.ly/travelinsuranceinfo',
							},
							{
								label: 'Gratuities',
								description:
									'Gratuities are not included in the package price. We strongly encourage guests to set aside approximately $20 per day, per guest, to cover tips for guides, drivers, and staff who work hard to make your experience enjoyable.',
							},
						],
						pricing: [
							{
								id: 'child',
								title: 'Child Discount (ages 5 - 11)',
								price: 3599.0,
								originalPrice: 5699.0,
								description:
									'For children ages 5 through 11 yrs old accompanied by an adult. If a child is below the age of 12 this must be selected.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-child',
								deposit: 199.00,
							},
							{
								id: 'double',
								title: 'Double Occupancy (per person)',
								price: 5399.0,
								originalPrice: 8399.0,
								description:
									'This room is based on double occupancy, meaning it is shared with another person. If you do not have a roommate, one will be assigned to you.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-double',
								deposit: 299.00,
							},
							{
								id: 'single',
								title: 'Single Occupancy (per person)',
								price: 6299.0,
								originalPrice: 9799.0,
								description:
									'Single Occupancy (per person). All Sales Final - No Refunds.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-single',
								deposit: 399.00,
							},
						],
						gallery: [
							{
								id: 'gh-gal-1',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg/photo-1602357283955-f2a8932d54a5',
								alt: 'Woman waving a Ghanaian flag',
							},
							{
								id: 'gh-gal-2',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: 'Kotoka International Airport sign at night',
							},
							{
								id: 'gh-gal-3',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: 'Cape Coast Castle',
							},
							{
								id: 'gh-gal-4',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: "Cascading Dunn's River Falls in Jamaica",
							},
							{
								id: 'gh-gal-5',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: 'Ancient Fasil Ghebbi fortress in Ethiopia',
							},
							{
								id: 'gh-gal-6',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: 'Boats in the clear blue water of Trinidad and Tobago',
							},
						],
					},
					{
						id: 'sa-2027-sept',
						displayDate: 'Sept 25 - Oct 3',
						slug: 'south-africa-sept-2027',
						heroImageUrl:
							'/assets/images/upcoming-tours/ghana/ghana-2027/hero-image.jpg',
						brochureUrl: '/brochures/south-africa-sept-2027.pdf',
						aboutTrip:
							'Embark on the journey of a lifetime in Ghana! Picture lush green streets, savor scrumptious meals, and embrace the vibrant culture of West Africa. With a team of passionate local guides, your exploration of this beautiful country will be transformative...',
						disclaimer:
							'All sales are final. No refunds, transfers, or exchanges.',
						itinerary: [
							{
								day: 1,
								title: 'Arrival to Ghana',
								date: 'Nov-14-2025',
								location: 'Accra- Ghana',
								heading: 'Akwaaba! An Unforgettable Adventure in Ghana Awaits!',
								description:
									'Welcome to Ghana! Your exciting journey kicks off today as you set foot in Kotoka International Airport. No need to worry about a thing; our friendly team will be right there to greet you, handle your luggage, and whisk you away to your comfortable hotel. Take some time to settle in, relax, and get ready for the incredible adventure that lies ahead. The vibrant sights and sounds of Ghana are waiting for you!',
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-1.jpg',
							},
							{
								day: 2,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-2.jpg',
							},
							{
								day: 3,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-3.jpg',
							},
							{
								day: 4,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-4.jpg',
							},
							{
								day: 5,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-5.jpg',
							},
							{
								day: 6,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-6.jpg',
							},
							{
								day: 7,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-7.jpg',
							},
							{
								day: 8,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-8.jpg',
							},
						],
						inclusions: [
							{
								label: 'Hotel Accommodations',
								description:
									'Double Occupancy OR Single Occupancy + Daily Breakfast. Hotel upgrades available upon request. Additional fees will apply.',
							},
							{
								label: 'Ground Transportation',
								description:
									'Ground transportation to and from scheduled destinations (does include domestic airfare).',
							},
							{
								label: 'Hotel Amenities',
								description:
									'WiFi, Spa, Bar, Restaurant, Room Service, Fitness Center, Swimming Pool, Meeting Rooms, Air Conditioning, Wheelchair Accessible.',
							},
							{
								label: 'Admission To Activities',
								description: 'Admission to all activities are covered.',
							},
							{
								label: 'Breakfast',
								description: 'Daily Breakfast (starting on Day 2).',
							},
						],
						exclusions: [
							{
								label: 'Vaccinations',
								description:
									'The Yellow Fever vaccine or medical exemption is required; Malaria pills are advised.',
							},
							{
								label: 'Passport & Visa',
								description:
									'The United States Postal Service offers passport services... Please ensure your passport will not expire within six months of your travel date... please check with the Ghana embassy or consulate in your country for entry requirements and any other travel regulations from your country to Ghana.',
							},
							{
								label: 'Lunch and Dinner',
								description:
									'You will be responsible for your own lunch, dinner and snacks. You will be afforded the opportunity to purchase lunch and dinner daily.',
							},
							{
								label: 'No International Airfare',
								description:
									'International airfare is not included in the standard package pricing but may be available as an add-on for an additional cost, subject to availability.',
							},
							{
								label: 'Travel Insurance',
								description:
									'Travel insurance is highly recommended. Trip deposits and payments are non-refundable. Therefore, it is prudent to protect your investment. Insurance options https://bit.ly/travelinsuranceinfo',
							},
							{
								label: 'Gratuities',
								description:
									'Gratuities are not included in the package price. We strongly encourage guests to set aside approximately $20 per day, per guest, to cover tips for guides, drivers, and staff who work hard to make your experience enjoyable.',
							},
						],
						pricing: [
							{
								id: 'child',
								title: 'Child Discount (ages 5 - 11)',
								price: 3599.0,
								originalPrice: 5699.0,
								description:
									'For children ages 5 through 11 yrs old accompanied by an adult. If a child is below the age of 12 this must be selected.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-child',
								deposit: 199.00,
							},
							{
								id: 'double',
								title: 'Double Occupancy (per person)',
								price: 5399.0,
								originalPrice: 8399.0,
								description:
									'This room is based on double occupancy, meaning it is shared with another person. If you do not have a roommate, one will be assigned to you.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-double',
								deposit: 299.00,
							},
							{
								id: 'single',
								title: 'Single Occupancy (per person)',
								price: 6299.0,
								originalPrice: 9799.0,
								description:
									'Single Occupancy (per person). All Sales Final - No Refunds.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-single',
								deposit: 399.00,
							},
						],
						gallery: [
							{
								id: 'gh-gal-1',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg/photo-1602357283955-f2a8932d54a5',
								alt: 'Woman waving a Ghanaian flag',
							},
							{
								id: 'gh-gal-2',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: 'Kotoka International Airport sign at night',
							},
							{
								id: 'gh-gal-3',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: 'Cape Coast Castle',
							},
							{
								id: 'gh-gal-4',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: "Cascading Dunn's River Falls in Jamaica",
							},
							{
								id: 'gh-gal-5',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: 'Ancient Fasil Ghebbi fortress in Ethiopia',
							},
							{
								id: 'gh-gal-6',
								src: '/assets/images/upcoming-tours/ghana/img-1.jpg',
								alt: 'Boats in the clear blue water of Trinidad and Tobago',
							},
						],
					},
				],
			},
		],
	},
	{
		destinationSlug: 'ghana-tour',
		destinationName: 'Ghana',
		years: [
			{
				year: 2026,
				dates: [
					{
						id: 'gh-2026-june',
						displayDate: 'June 5 - June 13',
						slug: 'ghana-june-2026',
						heroImageUrl:
							'/assets/images/upcoming-tours/ghana/ghana-2026/hero-image.jpg',
						brochureUrl: '/brochures/ghana-june-2026.pdf',
						aboutTrip:
							'Embark on the journey of a lifetime in Ghana! Picture lush green streets, savor scrumptious meals, and embrace the vibrant culture of West Africa. With a team of passionate local guides, your exploration of this beautiful country will be transformative...',
						disclaimer:
							'All sales are final. No refunds, transfers, or exchanges.',
						itinerary: [
							{
								day: 1,
								title: 'Arrival to Ghana',
								date: 'Nov-14-2025',
								location: 'Accra- Ghana',
								heading: 'Akwaaba! An Unforgettable Adventure in Ghana Awaits!',
								description:
									'Welcome to Ghana! Your exciting journey kicks off today as you set foot in Kotoka International Airport. No need to worry about a thing; our friendly team will be right there to greet you, handle your luggage, and whisk you away to your comfortable hotel. Take some time to settle in, relax, and get ready for the incredible adventure that lies ahead. The vibrant sights and sounds of Ghana are waiting for you!',
								imageUrl:
									'/assets/images/upcoming-tours/ghana/ghana-2025/trip-itinerary/day-1.jpg',
							},
							{
								day: 2,
                                title: 'Historic Accra Tour',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Welcome to Accra, the vibrant capital of Ghana, where your adventure officially begins! Dive into the energy of the local markets—alive with colors, flavors, and culture—before exploring iconic landmarks like the Kwame Nkrumah Memorial, Black Star Square, and the Independence Arch. These sites, built by Ghana’s first democratic government, offer powerful insights into the nation's political past. Midday, enjoy a flavorful lunch at a local restaurant and soak in the city's atmosphere.",
								imageUrl:
									'/assets/images/upcoming-tours/ghana/ghana-2025/trip-itinerary/day-2.jpg',
							},
							{
								day: 3,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
                                heading: 'African Naming Ceremony & Batik Class',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/ghana/ghana-2025/trip-itinerary/day-3.jpg',
							},
							{
								day: 4,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
                                heading: 'A Taste of Ghana: Culinary & Cacao Experience',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/ghana/ghana-2025/trip-itinerary/day-4.jpg',
							},
							{
								day: 5,
								title: 'City Exploration',
								date: 'Nov-18-2025',
                                location: 'Cape Coast- Ghana',
                                heading: 'A Journey of Remembrance and Return',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/ghana/ghana-2025/trip-itinerary/day-5.jpg',
							},
							{
								day: 6,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/ghana/ghana-2025/trip-itinerary/day-6.jpg',
							},
							{
								day: 7,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/ghana/ghana-2025/trip-itinerary/day-7.jpg',
							},
							{
								day: 8,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/ghana/ghana-2025/trip-itinerary/day-8.png',
							},
						],
						inclusions: [
							{
								label: 'Hotel Accommodations',
								description:
									'Double Occupancy OR Single Occupancy + Daily Breakfast. Hotel upgrades available upon request. Additional fees will apply.',
							},
							{
								label: 'Ground Transportation',
								description:
									'Ground transportation to and from scheduled destinations (does include domestic airfare).',
							},
							{
								label: 'Hotel Amenities',
								description:
									'WiFi, Spa, Bar, Restaurant, Room Service, Fitness Center, Swimming Pool, Meeting Rooms, Air Conditioning, Wheelchair Accessible.',
							},
							{
								label: 'Admission To Activities',
								description: 'Admission to all activities are covered.',
							},
							{
								label: 'Breakfast',
								description: 'Daily Breakfast (starting on Day 2).',
							},
						],
						exclusions: [
							{
								label: 'Vaccinations',
								description:
									'The Yellow Fever vaccine or medical exemption is required; Malaria pills are advised.',
							},
							{
								label: 'Passport & Visa',
								description:
									'The United States Postal Service offers passport services... Please ensure your passport will not expire within six months of your travel date... please check with the Ghana embassy or consulate in your country for entry requirements and any other travel regulations from your country to Ghana.',
							},
							{
								label: 'Lunch and Dinner',
								description:
									'You will be responsible for your own lunch, dinner and snacks. You will be afforded the opportunity to purchase lunch and dinner daily.',
							},
							{
								label: 'No International Airfare',
								description:
									'International airfare is not included in the standard package pricing but may be available as an add-on for an additional cost, subject to availability.',
							},
							{
								label: 'Travel Insurance',
								description:
									'Travel insurance is highly recommended. Trip deposits and payments are non-refundable. Therefore, it is prudent to protect your investment. Insurance options https://bit.ly/travelinsuranceinfo',
							},
							{
								label: 'Gratuities',
								description:
									'Gratuities are not included in the package price. We strongly encourage guests to set aside approximately $20 per day, per guest, to cover tips for guides, drivers, and staff who work hard to make your experience enjoyable.',
							},
						],
						pricing: [
							{
								id: 'child',
								title: 'Child Discount (ages 5 - 11)',
								price: 3599.0,
								originalPrice: 5699.0,
								description:
									'For children ages 5 through 11 yrs old accompanied by an adult. If a child is below the age of 12 this must be selected.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-child',
								deposit: 199.00,
							},
							{
								id: 'double',
								title: 'Double Occupancy (per person)',
								price: 5399.0,
								originalPrice: 8399.0,
								description:
									'This room is based on double occupancy, meaning it is shared with another person. If you do not have a roommate, one will be assigned to you.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-double',
								deposit: 299.00,
							},
							{
								id: 'single',
								title: 'Single Occupancy (per person)',
								price: 6299.0,
								originalPrice: 9799.0,
								description:
									'Single Occupancy (per person). All Sales Final - No Refunds.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-single',
								deposit: 399.00,
							},
						],
						gallery: [
							{
								id: 'gh-gal-1',
								src: '/assets/images/upcoming-tours/ghana/ghana-2025/img-1.jpg',
								alt: 'Woman waving a Ghanaian flag',
							},
							{
								id: 'gh-gal-2',
								src: '/assets/images/upcoming-tours/ghana/ghana-2025/img-2.jpg',
								alt: 'Kotoka International Airport sign at night',
							},
							{
								id: 'gh-gal-3',
								src: '/assets/images/upcoming-tours/ghana/ghana-2025/img-3.jpg',
								alt: 'Cape Coast Castle',
							},
							{
								id: 'gh-gal-4',
								src: '/assets/images/upcoming-tours/ghana/ghana-2025/img-4.jpg',
								alt: "Cascading Dunn's River Falls in Jamaica",
							},
							{
								id: 'gh-gal-5',
								src: '/assets/images/upcoming-tours/ghana/ghana-2025/img-5.jpg',
								alt: 'Ancient Fasil Ghebbi fortress in Ethiopia',
							},
							{
								id: 'gh-gal-6',
								src: '/assets/images/upcoming-tours/ghana/ghana-2025/img-6.jpg',
								alt: 'Boats in the clear blue water of Trinidad and Tobago',
							},
                            {
								id: 'gh-gal-7',
								src: '/assets/images/upcoming-tours/ghana/ghana-2025/img-7.jpg',
								alt: 'Boats in the clear blue water of Trinidad and Tobago',
                            },                           
						],
					},
				],
			},
			{
				year: 2027,
				dates: [
					{
						id: 'gh-2027-june',
						displayDate: 'June 5 - 13',
						slug: 'ghana-june-2027',
						heroImageUrl:
							'/assets/images/upcoming-tours/ghana/ghana-2027/hero-image.jpg',
						brochureUrl: '/brochures/ghana-june-2027.pdf',
						aboutTrip:
							'Embark on the journey of a lifetime in Ghana! Picture lush green streets, savor scrumptious meals, and embrace the vibrant culture of West Africa. With a team of passionate local guides, your exploration of this beautiful country will be transformative...',
						disclaimer:
							'All sales are final. No refunds, transfers, or exchanges.',
						itinerary: [
							{
								day: 1,
								title: 'Arrival to Ghana',
								date: 'Nov-14-2025',
								location: 'Accra- Ghana',
								heading: 'Akwaaba! An Unforgettable Adventure in Ghana Awaits!',
								description:
									'Welcome to Ghana! Your exciting journey kicks off today as you set foot in Kotoka International Airport. No need to worry about a thing; our friendly team will be right there to greet you, handle your luggage, and whisk you away to your comfortable hotel. Take some time to settle in, relax, and get ready for the incredible adventure that lies ahead. The vibrant sights and sounds of Ghana are waiting for you!',
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-1.jpg',
							},
							{
								day: 2,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-2.jpg',
							},
							{
								day: 3,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-3.jpg',
							},
							{
								day: 4,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-4.jpg',
							},
							{
								day: 5,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-5.jpg',
							},
							{
								day: 6,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-6.jpg',
							},
							{
								day: 7,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-7.jpg',
							},
							{
								day: 8,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-8.jpg',
							},
						],
						inclusions: [
							{
								label: 'Hotel Accommodations',
								description:
									'Double Occupancy OR Single Occupancy + Daily Breakfast. Hotel upgrades available upon request. Additional fees will apply.',
							},
							{
								label: 'Ground Transportation',
								description:
									'Ground transportation to and from scheduled destinations (does include domestic airfare).',
							},
							{
								label: 'Hotel Amenities',
								description:
									'WiFi, Spa, Bar, Restaurant, Room Service, Fitness Center, Swimming Pool, Meeting Rooms, Air Conditioning, Wheelchair Accessible.',
							},
							{
								label: 'Admission To Activities',
								description: 'Admission to all activities are covered.',
							},
							{
								label: 'Breakfast',
								description: 'Daily Breakfast (starting on Day 2).',
							},
						],
						exclusions: [
							{
								label: 'Vaccinations',
								description:
									'The Yellow Fever vaccine or medical exemption is required; Malaria pills are advised.',
							},
							{
								label: 'Passport & Visa',
								description:
									'The United States Postal Service offers passport services... Please ensure your passport will not expire within six months of your travel date... please check with the Ghana embassy or consulate in your country for entry requirements and any other travel regulations from your country to Ghana.',
							},
							{
								label: 'Lunch and Dinner',
								description:
									'You will be responsible for your own lunch, dinner and snacks. You will be afforded the opportunity to purchase lunch and dinner daily.',
							},
							{
								label: 'No International Airfare',
								description:
									'International airfare is not included in the standard package pricing but may be available as an add-on for an additional cost, subject to availability.',
							},
							{
								label: 'Travel Insurance',
								description:
									'Travel insurance is highly recommended. Trip deposits and payments are non-refundable. Therefore, it is prudent to protect your investment. Insurance options https://bit.ly/travelinsuranceinfo',
							},
							{
								label: 'Gratuities',
								description:
									'Gratuities are not included in the package price. We strongly encourage guests to set aside approximately $20 per day, per guest, to cover tips for guides, drivers, and staff who work hard to make your experience enjoyable.',
							},
						],
						pricing: [
							{
								id: 'child',
								title: 'Child Discount (ages 5 - 11)',
								price: 3599.0,
								originalPrice: 5699.0,
								description:
									'For children ages 5 through 11 yrs old accompanied by an adult. If a child is below the age of 12 this must be selected.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-child',
								deposit: 199.00,
							},
							{
								id: 'double',
								title: 'Double Occupancy (per person)',
								price: 5399.0,
								originalPrice: 8399.0,
								description:
									'This room is based on double occupancy, meaning it is shared with another person. If you do not have a roommate, one will be assigned to you.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-double',
								deposit: 299.00,
							},
							{
								id: 'single',
								title: 'Single Occupancy (per person)',
								price: 6299.0,
								originalPrice: 9799.0,
								description:
									'Single Occupancy (per person). All Sales Final - No Refunds.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-single',
								deposit: 399.00,
							},
						],
						gallery: [
							{
								id: 'gh-gal-1',
								src: '/assets/images/upcoming-tours/ghana/ghana-2027/img-1.jpg/photo-1602357283955-f2a8932d54a5',
								alt: 'Woman waving a Ghanaian flag',
							},
							{
								id: 'gh-gal-2',
								src: '/assets/images/upcoming-tours/ghana/ghana-2027/img-1.jpg',
								alt: 'Kotoka International Airport sign at night',
							},
							{
								id: 'gh-gal-3',
								src: '/assets/images/upcoming-tours/ghana/ghana-2027/img-1.jpg',
								alt: 'Cape Coast Castle',
							},
							{
								id: 'gh-gal-4',
								src: '/assets/images/upcoming-tours/ghana/ghana-2027/img-1.jpg',
								alt: "Cascading Dunn's River Falls in Jamaica",
							},
							{
								id: 'gh-gal-5',
								src: '/assets/images/upcoming-tours/ghana/ghana-2027/img-1.jpg',
								alt: 'Ancient Fasil Ghebbi fortress in Ethiopia',
							},
							{
								id: 'gh-gal-6',
								src: '/assets/images/upcoming-tours/ghana/ghana-2027/img-1.jpg',
								alt: 'Boats in the clear blue water of Trinidad and Tobago',
							},
						],
					},
					{
						id: 'gh-2027-dec',
						displayDate: 'Dec 10 - Dec 18',
						slug: 'ghana-dec-2027',
						heroImageUrl:
							'/assets/images/upcoming-tours/ghana/ghana-2027/hero-image.jpg',
						brochureUrl: '/brochures/ghana-dec-2027.pdf',
						aboutTrip:
							'Embark on the journey of a lifetime in Ghana! Picture lush green streets, savor scrumptious meals, and embrace the vibrant culture of West Africa. With a team of passionate local guides, your exploration of this beautiful country will be transformative...',
						disclaimer:
							'All sales are final. No refunds, transfers, or exchanges.',
						itinerary: [
							{
								day: 1,
								title: 'Arrival to Ghana',
								date: 'Nov-14-2025',
								location: 'Accra- Ghana',
								heading: 'Akwaaba! An Unforgettable Adventure in Ghana Awaits!',
								description:
									'Welcome to Ghana! Your exciting journey kicks off today as you set foot in Kotoka International Airport. No need to worry about a thing; our friendly team will be right there to greet you, handle your luggage, and whisk you away to your comfortable hotel. Take some time to settle in, relax, and get ready for the incredible adventure that lies ahead. The vibrant sights and sounds of Ghana are waiting for you!',
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-1.jpg',
							},
							{
								day: 2,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-2.jpg',
							},
							{
								day: 3,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-3.jpg',
							},
							{
								day: 4,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-4.jpg',
							},
							{
								day: 5,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-5.jpg',
							},
							{
								day: 6,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-6.jpg',
							},
							{
								day: 7,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-7.jpg',
							},
							{
								day: 8,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-8.jpg',
							},
						],
						inclusions: [
							{
								label: 'Hotel Accommodations',
								description:
									'Double Occupancy OR Single Occupancy + Daily Breakfast. Hotel upgrades available upon request. Additional fees will apply.',
							},
							{
								label: 'Ground Transportation',
								description:
									'Ground transportation to and from scheduled destinations (does include domestic airfare).',
							},
							{
								label: 'Hotel Amenities',
								description:
									'WiFi, Spa, Bar, Restaurant, Room Service, Fitness Center, Swimming Pool, Meeting Rooms, Air Conditioning, Wheelchair Accessible.',
							},
							{
								label: 'Admission To Activities',
								description: 'Admission to all activities are covered.',
							},
							{
								label: 'Breakfast',
								description: 'Daily Breakfast (starting on Day 2).',
							},
						],
						exclusions: [
							{
								label: 'Vaccinations',
								description:
									'The Yellow Fever vaccine or medical exemption is required; Malaria pills are advised.',
							},
							{
								label: 'Passport & Visa',
								description:
									'The United States Postal Service offers passport services... Please ensure your passport will not expire within six months of your travel date... please check with the Ghana embassy or consulate in your country for entry requirements and any other travel regulations from your country to Ghana.',
							},
							{
								label: 'Lunch and Dinner',
								description:
									'You will be responsible for your own lunch, dinner and snacks. You will be afforded the opportunity to purchase lunch and dinner daily.',
							},
							{
								label: 'No International Airfare',
								description:
									'International airfare is not included in the standard package pricing but may be available as an add-on for an additional cost, subject to availability.',
							},
							{
								label: 'Travel Insurance',
								description:
									'Travel insurance is highly recommended. Trip deposits and payments are non-refundable. Therefore, it is prudent to protect your investment. Insurance options https://bit.ly/travelinsuranceinfo',
							},
							{
								label: 'Gratuities',
								description:
									'Gratuities are not included in the package price. We strongly encourage guests to set aside approximately $20 per day, per guest, to cover tips for guides, drivers, and staff who work hard to make your experience enjoyable.',
							},
						],
						pricing: [
							{
								id: 'child',
								title: 'Child Discount (ages 5 - 11)',
								price: 3599.0,
								originalPrice: 5699.0,
								description:
									'For children ages 5 through 11 yrs old accompanied by an adult. If a child is below the age of 12 this must be selected.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-child',
								deposit: 199.00,
							},
							{
								id: 'double',
								title: 'Double Occupancy (per person)',
								price: 5399.0,
								originalPrice: 8399.0,
								description:
									'This room is based on double occupancy, meaning it is shared with another person. If you do not have a roommate, one will be assigned to you.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-double',
								deposit: 299.00,
							},
							{
								id: 'single',
								title: 'Single Occupancy (per person)',
								price: 6299.0,
								originalPrice: 9799.0,
								description:
									'Single Occupancy (per person). All Sales Final - No Refunds.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-single',
								deposit: 399.00,
							},
						],
						gallery: [
							{
								id: 'gh-gal-1',
								src: '/assets/images/upcoming-tours/ghana/ghana-2027/img-1.jpg/photo-1602357283955-f2a8932d54a5',
								alt: 'Woman waving a Ghanaian flag',
							},
							{
								id: 'gh-gal-2',
								src: '/assets/images/upcoming-tours/ghana/ghana-2027/img-1.jpg',
								alt: 'Kotoka International Airport sign at night',
							},
							{
								id: 'gh-gal-3',
								src: '/assets/images/upcoming-tours/ghana/ghana-2027/img-1.jpg',
								alt: 'Cape Coast Castle',
							},
							{
								id: 'gh-gal-4',
								src: '/assets/images/upcoming-tours/ghana/ghana-2027/img-1.jpg',
								alt: "Cascading Dunn's River Falls in Jamaica",
							},
							{
								id: 'gh-gal-5',
								src: '/assets/images/upcoming-tours/ghana/ghana-2027/img-1.jpg',
								alt: 'Ancient Fasil Ghebbi fortress in Ethiopia',
							},
							{
								id: 'gh-gal-6',
								src: '/assets/images/upcoming-tours/ghana/ghana-2027/img-1.jpg',
								alt: 'Boats in the clear blue water of Trinidad and Tobago',
							},
						],
					},
				],
			},
		],
	},
	{
		destinationSlug: 'kenya-tour',
		destinationName: 'Kenya',
		years: [
			{
				year: 2026,
				dates: [
					{
						id: 'kh-2026-june',
						displayDate: 'June 5 - June 13',
						slug: 'kenya-june-2026',
						heroImageUrl:
							'/assets/images/upcoming-tours/kenya/kenya-2026/hero-image.jpg',
						brochureUrl: '/brochures/kenya-june-2026.pdf',
						aboutTrip:
							'Embark on the journey of a lifetime in Ghana! Picture lush green streets, savor scrumptious meals, and embrace the vibrant culture of West Africa. With a team of passionate local guides, your exploration of this beautiful country will be transformative...',
						disclaimer:
							'All sales are final. No refunds, transfers, or exchanges.',
						itinerary: [
							{
								day: 1,
								title: 'Arrival to Ghana',
								date: 'Nov-14-2025',
								location: 'Accra- Ghana',
								heading: 'Akwaaba! An Unforgettable Adventure in Ghana Awaits!',
								description:
									'Welcome to Ghana! Your exciting journey kicks off today as you set foot in Kotoka International Airport. No need to worry about a thing; our friendly team will be right there to greet you, handle your luggage, and whisk you away to your comfortable hotel. Take some time to settle in, relax, and get ready for the incredible adventure that lies ahead. The vibrant sights and sounds of Ghana are waiting for you!',
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-1.jpg',
							},
							{
								day: 2,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-2.jpg',
							},
							{
								day: 3,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-3.jpg',
							},
							{
								day: 4,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-4.jpg',
							},
							{
								day: 5,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-5.jpg',
							},
							{
								day: 6,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-6.jpg',
							},
							{
								day: 7,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-7.jpg',
							},
							{
								day: 8,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-8.jpg',
							},
						],
						inclusions: [
							{
								label: 'Hotel Accommodations',
								description:
									'Double Occupancy OR Single Occupancy + Daily Breakfast. Hotel upgrades available upon request. Additional fees will apply.',
							},
							{
								label: 'Ground Transportation',
								description:
									'Ground transportation to and from scheduled destinations (does include domestic airfare).',
							},
							{
								label: 'Hotel Amenities',
								description:
									'WiFi, Spa, Bar, Restaurant, Room Service, Fitness Center, Swimming Pool, Meeting Rooms, Air Conditioning, Wheelchair Accessible.',
							},
							{
								label: 'Admission To Activities',
								description: 'Admission to all activities are covered.',
							},
							{
								label: 'Breakfast',
								description: 'Daily Breakfast (starting on Day 2).',
							},
						],
						exclusions: [
							{
								label: 'Vaccinations',
								description:
									'The Yellow Fever vaccine or medical exemption is required; Malaria pills are advised.',
							},
							{
								label: 'Passport & Visa',
								description:
									'The United States Postal Service offers passport services... Please ensure your passport will not expire within six months of your travel date... please check with the Ghana embassy or consulate in your country for entry requirements and any other travel regulations from your country to Ghana.',
							},
							{
								label: 'Lunch and Dinner',
								description:
									'You will be responsible for your own lunch, dinner and snacks. You will be afforded the opportunity to purchase lunch and dinner daily.',
							},
							{
								label: 'No International Airfare',
								description:
									'International airfare is not included in the standard package pricing but may be available as an add-on for an additional cost, subject to availability.',
							},
							{
								label: 'Travel Insurance',
								description:
									'Travel insurance is highly recommended. Trip deposits and payments are non-refundable. Therefore, it is prudent to protect your investment. Insurance options https://bit.ly/travelinsuranceinfo',
							},
							{
								label: 'Gratuities',
								description:
									'Gratuities are not included in the package price. We strongly encourage guests to set aside approximately $20 per day, per guest, to cover tips for guides, drivers, and staff who work hard to make your experience enjoyable.',
							},
						],
						pricing: [
							{
								id: 'child',
								title: 'Child Discount (ages 5 - 11)',
								price: 3599.0,
								originalPrice: 5699.0,
								description:
									'For children ages 5 through 11 yrs old accompanied by an adult. If a child is below the age of 12 this must be selected.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-child',
								deposit: 199.00,
							},
							{
								id: 'double',
								title: 'Double Occupancy (per person)',
								price: 5399.0,
								originalPrice: 8399.0,
								description:
									'This room is based on double occupancy, meaning it is shared with another person. If you do not have a roommate, one will be assigned to you.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-double',
								deposit: 299.00,
							},
							{
								id: 'single',
								title: 'Single Occupancy (per person)',
								price: 6299.0,
								originalPrice: 9799.0,
								description:
									'Single Occupancy (per person). All Sales Final - No Refunds.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-single',
								deposit: 399.00,
							},
						],
						gallery: [
							{
								id: 'kh-gal-1',
								src: '/assets/images/upcoming-tours/kenya/kenya-2026/img-1.jpg/photo-1602357283955-f2a8932d54a5',
								alt: 'Woman waving a Kenyan flag',
							},
							{
								id: 'kh-gal-2',
								src: '/assets/images/upcoming-tours/kenya/kenya-2026/img-1.jpg',
								alt: 'Kotoka International Airport sign at night',
							},
							{
								id: 'kh-gal-3',
								src: '/assets/images/upcoming-tours/kenya/kenya-2026/img-1.jpg',
								alt: 'Cape Coast Castle',
							},
							{
								id: 'kh-gal-4',
								src: '/assets/images/upcoming-tours/kenya/kenya-2026/img-1.jpg',
								alt: "Cascading Dunn's River Falls in Jamaica",
							},
							{
								id: 'kh-gal-5',
								src: '/assets/images/upcoming-tours/kenya/kenya-2026/img-1.jpg',
								alt: 'Ancient Fasil Ghebbi fortress in Ethiopia',
							},
							{
								id: 'kh-gal-6',
								src: '/assets/images/upcoming-tours/kenya/kenya-2026/img-1.jpg',
								alt: 'Boats in the clear blue water of Trinidad and Tobago',
							},
						],
					},
				],
			},
			{
				year: 2027,
				dates: [
					{
						id: 'kh-2027-june',
						displayDate: 'June 5 - 13',
						slug: 'kenya-june-2027',
						heroImageUrl:
							'/assets/images/upcoming-tours/kenya/kenya-2027/hero-image.jpg',
						brochureUrl: '/brochures/kenya-june-2027.pdf',
						aboutTrip:
							'Embark on the journey of a lifetime in Ghana! Picture lush green streets, savor scrumptious meals, and embrace the vibrant culture of West Africa. With a team of passionate local guides, your exploration of this beautiful country will be transformative...',
						disclaimer:
							'All sales are final. No refunds, transfers, or exchanges.',
						itinerary: [
							{
								day: 1,
								title: 'Arrival to Ghana',
								date: 'Nov-14-2025',
								location: 'Accra- Ghana',
								heading: 'Akwaaba! An Unforgettable Adventure in Ghana Awaits!',
								description:
									'Welcome to Ghana! Your exciting journey kicks off today as you set foot in Kotoka International Airport. No need to worry about a thing; our friendly team will be right there to greet you, handle your luggage, and whisk you away to your comfortable hotel. Take some time to settle in, relax, and get ready for the incredible adventure that lies ahead. The vibrant sights and sounds of Ghana are waiting for you!',
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-1.jpg',
							},
							{
								day: 2,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-2.jpg',
							},
							{
								day: 3,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-3.jpg',
							},
							{
								day: 4,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-4.jpg',
							},
							{
								day: 5,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-5.jpg',
							},
							{
								day: 6,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-6.jpg',
							},
							{
								day: 7,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-7.jpg',
							},
							{
								day: 8,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'/assets/images/upcoming-tours/kenya/kenya-2027/trip-itinerary/day-8.jpg',
							},
						],
						inclusions: [
							{
								label: 'Hotel Accommodations',
								description:
									'Double Occupancy OR Single Occupancy + Daily Breakfast. Hotel upgrades available upon request. Additional fees will apply.',
							},
							{
								label: 'Ground Transportation',
								description:
									'Ground transportation to and from scheduled destinations (does include domestic airfare).',
							},
							{
								label: 'Hotel Amenities',
								description:
									'WiFi, Spa, Bar, Restaurant, Room Service, Fitness Center, Swimming Pool, Meeting Rooms, Air Conditioning, Wheelchair Accessible.',
							},
							{
								label: 'Admission To Activities',
								description: 'Admission to all activities are covered.',
							},
							{
								label: 'Breakfast',
								description: 'Daily Breakfast (starting on Day 2).',
							},
						],
						exclusions: [
							{
								label: 'Vaccinations',
								description:
									'The Yellow Fever vaccine or medical exemption is required; Malaria pills are advised.',
							},
							{
								label: 'Passport & Visa',
								description:
									'The United States Postal Service offers passport services... Please ensure your passport will not expire within six months of your travel date... please check with the Ghana embassy or consulate in your country for entry requirements and any other travel regulations from your country to Ghana.',
							},
							{
								label: 'Lunch and Dinner',
								description:
									'You will be responsible for your own lunch, dinner and snacks. You will be afforded the opportunity to purchase lunch and dinner daily.',
							},
							{
								label: 'No International Airfare',
								description:
									'International airfare is not included in the standard package pricing but may be available as an add-on for an additional cost, subject to availability.',
							},
							{
								label: 'Travel Insurance',
								description:
									'Travel insurance is highly recommended. Trip deposits and payments are non-refundable. Therefore, it is prudent to protect your investment. Insurance options https://bit.ly/travelinsuranceinfo',
							},
							{
								label: 'Gratuities',
								description:
									'Gratuities are not included in the package price. We strongly encourage guests to set aside approximately $20 per day, per guest, to cover tips for guides, drivers, and staff who work hard to make your experience enjoyable.',
							},
						],
						pricing: [
							{
								id: 'child',
								title: 'Child Discount (ages 5 - 11)',
								price: 3599.0,
								originalPrice: 5699.0,
								description:
									'For children ages 5 through 11 yrs old accompanied by an adult. If a child is below the age of 12 this must be selected.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-child',
								deposit: 199.00,
							},
							{
								id: 'double',
								title: 'Double Occupancy (per person)',
								price: 5399.0,
								originalPrice: 8399.0,
								description:
									'This room is based on double occupancy, meaning it is shared with another person. If you do not have a roommate, one will be assigned to you.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-double',
								deposit: 299.00,
							},
							{
								id: 'single',
								title: 'Single Occupancy (per person)',
								price: 6299.0,
								originalPrice: 9799.0,
								description:
									'Single Occupancy (per person). All Sales Final - No Refunds.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-single',
								deposit: 399.00,
							},
						],
						gallery: [
							{
								id: 'gh-gal-1',
								src: '/assets/images/upcoming-tours/kenya/kenya-2026/img-1.jpg/photo-1602357283955-f2a8932d54a5',
								alt: 'Woman waving a Kenyan flag',
							},
							{
								id: 'gh-gal-2',
								src: '/assets/images/upcoming-tours/kenya/kenya-2026/img-1.jpg',
								alt: 'Kotoka International Airport sign at night',
							},
							{
								id: 'gh-gal-3',
								src: '/assets/images/upcoming-tours/kenya/kenya-2026/img-1.jpg',
								alt: 'Cape Coast Castle',
							},
							{
								id: 'gh-gal-4',
								src: '/assets/images/upcoming-tours/kenya/kenya-2026/img-1.jpg',
								alt: "Cascading Dunn's River Falls in Jamaica",
							},
							{
								id: 'gh-gal-5',
								src: '/assets/images/upcoming-tours/kenya/kenya-2026/img-1.jpg',
								alt: 'Ancient Fasil Ghebbi fortress in Ethiopia',
							},
							{
								id: 'gh-gal-6',
								src: '/assets/images/upcoming-tours/kenya/kenya-2026/img-1.jpg',
								alt: 'Boats in the clear blue water of Trinidad and Tobago',
							},
						],
					},
					{
						id: 'kh-2027-dec',
						displayDate: 'Dec 10 - Dec 18',
						slug: 'kenya-dec-2027',
						heroImageUrl:
							'/assets/images/upcoming-tours/kenya/kenya-2027/hero-image.jpg',
						brochureUrl: '/brochures/kenya-dec-2027.pdf',
						aboutTrip:
							'Embark on the journey of a lifetime in Ghana! Picture lush green streets, savor scrumptious meals, and embrace the vibrant culture of West Africa. With a team of passionate local guides, your exploration of this beautiful country will be transformative...',
						disclaimer:
							'All sales are final. No refunds, transfers, or exchanges.',
						itinerary: [
							{
								day: 1,
								title: 'Arrival to Ghana',
								date: 'Nov-14-2025',
								location: 'Accra- Ghana',
								heading: 'Akwaaba! An Unforgettable Adventure in Ghana Awaits!',
								description:
									'Welcome to Ghana! Your exciting journey kicks off today as you set foot in Kotoka International Airport. No need to worry about a thing; our friendly team will be right there to greet you, handle your luggage, and whisk you away to your comfortable hotel. Take some time to settle in, relax, and get ready for the incredible adventure that lies ahead. The vibrant sights and sounds of Ghana are waiting for you!',
								imageUrl:
									'https://images.unsplash.com/photo-1589539134371-20902a247f07?q=80&w=1974',
							},
							{
								day: 2,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 3,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 4,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 5,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 6,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 7,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
							{
								day: 8,
								title: 'City Exploration',
								date: 'Nov-15-2025',
								location: 'Accra- Ghana',
								heading: 'Discover the Heart of Accra',
								description:
									"Today we dive into the bustling city of Accra. We will visit the historic Jamestown, see the Independence Arch, and explore the vibrant Makola Market. Prepare your senses for a feast of colors, sounds, and smells as we experience the daily life of Ghana's capital. In the evening, we'll enjoy a traditional Ghanaian dinner with live music.",
								imageUrl:
									'https://images.unsplash.com/photo-1561332798-749e1f3b39a2?q=80&w=2070',
							},
						],
						inclusions: [
							{
								label: 'Hotel Accommodations',
								description:
									'Double Occupancy OR Single Occupancy + Daily Breakfast. Hotel upgrades available upon request. Additional fees will apply.',
							},
							{
								label: 'Ground Transportation',
								description:
									'Ground transportation to and from scheduled destinations (does include domestic airfare).',
							},
							{
								label: 'Hotel Amenities',
								description:
									'WiFi, Spa, Bar, Restaurant, Room Service, Fitness Center, Swimming Pool, Meeting Rooms, Air Conditioning, Wheelchair Accessible.',
							},
							{
								label: 'Admission To Activities',
								description: 'Admission to all activities are covered.',
							},
							{
								label: 'Breakfast',
								description: 'Daily Breakfast (starting on Day 2).',
							},
						],
						exclusions: [
							{
								label: 'Vaccinations',
								description:
									'The Yellow Fever vaccine or medical exemption is required; Malaria pills are advised.',
							},
							{
								label: 'Passport & Visa',
								description:
									'The United States Postal Service offers passport services... Please ensure your passport will not expire within six months of your travel date... please check with the Ghana embassy or consulate in your country for entry requirements and any other travel regulations from your country to Ghana.',
							},
							{
								label: 'Lunch and Dinner',
								description:
									'You will be responsible for your own lunch, dinner and snacks. You will be afforded the opportunity to purchase lunch and dinner daily.',
							},
							{
								label: 'No International Airfare',
								description:
									'International airfare is not included in the standard package pricing but may be available as an add-on for an additional cost, subject to availability.',
							},
							{
								label: 'Travel Insurance',
								description:
									'Travel insurance is highly recommended. Trip deposits and payments are non-refundable. Therefore, it is prudent to protect your investment. Insurance options https://bit.ly/travelinsuranceinfo',
							},
							{
								label: 'Gratuities',
								description:
									'Gratuities are not included in the package price. We strongly encourage guests to set aside approximately $20 per day, per guest, to cover tips for guides, drivers, and staff who work hard to make your experience enjoyable.',
							},
						],
						pricing: [
							{
								id: 'child',
								title: 'Child Discount (ages 5 - 11)',
								price: 3599.0,
								originalPrice: 5699.0,
								description:
									'For children ages 5 through 11 yrs old accompanied by an adult. If a child is below the age of 12 this must be selected.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-child',
								deposit: 199.00,
							},
							{
								id: 'double',
								title: 'Double Occupancy (per person)',
								price: 5399.0,
								originalPrice: 8399.0,
								description:
									'This room is based on double occupancy, meaning it is shared with another person. If you do not have a roommate, one will be assigned to you.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-double',
								deposit: 299.00,
							},
							{
								id: 'single',
								title: 'Single Occupancy (per person)',
								price: 6299.0,
								originalPrice: 9799.0,
								description:
									'Single Occupancy (per person). All Sales Final - No Refunds.',
								buttonText: 'Join Waitlist',
								buttonLink: '/waitlist/sa-2026-may-single',
								deposit: 399.00,
							},
						],
						gallery: [
							{
								id: 'gh-gal-1',
								src: '/assets/images/upcoming-tours/kenya/kenya-2027/img-1.jpg/photo-1602357283955-f2a8932d54a5',
								alt: 'Woman waving a Kenyan flag',
							},
							{
								id: 'gh-gal-2',
								src: '/assets/images/upcoming-tours/kenya/kenya-2027/img-1.jpg',
								alt: 'Kotoka International Airport sign at night',
							},
							{
								id: 'gh-gal-3',
								src: '/assets/images/upcoming-tours/kenya/kenya-2027/img-1.jpg',
								alt: 'Cape Coast Castle',
							},
							{
								id: 'gh-gal-4',
								src: '/assets/images/upcoming-tours/kenya/kenya-2027/img-1.jpg',
								alt: "Cascading Dunn's River Falls in Jamaica",
							},
							{
								id: 'gh-gal-5',
								src: '/assets/images/upcoming-tours/kenya/kenya-2027/img-1.jpg',
								alt: 'Ancient Fasil Ghebbi fortress in Ethiopia',
							},
							{
								id: 'gh-gal-6',
								src: '/assets/images/upcoming-tours/kenya/kenya-2027/img-1.jpg',
								alt: 'Boats in the clear blue water of Trinidad and Tobago',
							},
						],
					},
				],
			},
		],
	},
]
