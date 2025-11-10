import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Clock } from 'lucide-react'
import { FeaturedTrip } from '@/components/home/featured-trips'
import { Separator } from '@/components/ui/separator'

type TripCardProps = {
	trip: FeaturedTrip
}

export function TripCard({ trip }: TripCardProps) {
	return (
		<Link href={trip.href} className='group block'>
			<Card className='overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
				<div className='relative w-full overflow-hidden rounded-t-lg'>
					<Image
						src={trip.imageUrl}
						alt={`Poster for ${trip.title}`}						
						width={600}
						height={800} 						
						className='object-cover w-full h-auto'
					/>
				</div>
				<div className='p-6 flex-1 flex flex-col'>
					<CardHeader className='p-0'>
						<CardTitle className='text-lg font-semibold text-gray-800'>
							{trip.title}
						</CardTitle>
						{trip.subTitle && (
							<p className='text-sm text-gray-600 pt-1'>{trip.subTitle}</p>
						)}
					</CardHeader>

					<CardContent className='p-0 pt-4 flex-1'>
						<p className='text-gray-600 text-sm line-clamp-2'>
							{trip.description}
						</p>
					</CardContent>

					<div className='pt-4 mt-auto'>
						<Separator className='my-4' />
						<div className='space-y-2 text-sm text-gray-700'>
							<div className='flex items-center gap-2'>
								<MapPin className='h-4 w-4 text-custom-gold' />
								<span>{trip.location}</span>
							</div>
							<div className='flex items-center gap-2'>
								<Clock className='h-4 w-4 text-custom-gold' />
								<span>{trip.duration}</span>
							</div>
						</div>
					</div>
				</div>
			</Card>
		</Link>
	)
}
