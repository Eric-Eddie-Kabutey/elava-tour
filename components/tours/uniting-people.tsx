import Image from 'next/image'
import { Button } from '../ui/button'

export function UnitingPeople() {
	return (
		<section className='bg-white py-16 sm:py-24'>
			<div className='container max-w-6xl mx-auto px-4'>
				{/* Section Title */}
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-5xl font-bold text-blue-800 tracking-wider'>
						UNITING PEOPLE
					</h2>
				</div>

				{/* Two-Column Layout */}
				<div className='flex flex-col md:flex-row items-center gap-12 lg:gap-20'>
					{/* Left Column: Image with Polaroid Effect */}
					<div className='w-full md:w-5/12 flex-shrink-0'>
						<div className='p-4 sm:p-5 bg-white shadow-2xl transform -rotate-3'>
							<Image
								src='/assets/images/tour_photos/uniting-people.webp'
								alt='A group of travelers enjoying a meal together'
								width={500}
								height={600}
								className='w-full h-auto object-cover'
							/>
						</div>
					</div>

					{/* Right Column: Text Content and Buttons */}
					<div className='w-full md:w-7/12'>
						<div className='space-y-6 text-gray-700 leading-relaxed'>
							<p>
								<strong className='font-semibold text-blue-800'>
									Maximum Impact Travel
								</strong>{' '}
								connects people to the magnificent continent of Africa, and
								beyond. Whether in the Americas, the Caribbean, or Europe, the
								African diaspora has made an impact all over the world. As a
								result of the African continent’s turbulent history, the
								descendants of native Africans have been spread all over the
								world. Yet, they managed to do something incredible… they held
								on to bits and pieces of their culture wherever they went. As a
								result, one can find a multitude of similarities and connections
								between African diasporans across the globe. Traveling beyond
								America’s borders to personally experience these similarities,
								whether in tradition, food, or phenotype, is transformative and
								life-changing. Our Maximum Impact Travel team is dedicated to
								increasing the accessibility of international travel to Africa,
								and beyond.
							</p>

							<p>
								A part of the Maximum Impact Travel team’s philosophy is that
								international travel should be accessible to the African
								diaspora. So our team is always focused on ensuring the maximum
								value for our tours. We select the best accommodations,
								excursions, and experiences for the most economical prices.
                            </p>
                            
                            <div className='flex items-center gap-4 mt-6'>
                                <Button className='bg-blue-700'>Book Your Next Trip</Button>
                                <Button>Contact Us</Button>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
