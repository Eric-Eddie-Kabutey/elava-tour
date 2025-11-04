import Image from 'next/image'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TourPackage } from '@/types/destination'
import Link from 'next/link'

type TourCardProps = {
    tour: TourPackage
    country: string
}

export function TourCard({ tour, country }: TourCardProps) {
	return (
		<Card className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
			<div className='relative h-56 w-full'>
				<Image
					src={tour.imageUrl}
					alt={`Image for ${tour.name}`}
					fill
					className='object-cover'
				/>
			</div>
			<div className='flex flex-1 flex-col p-6'>
				<CardHeader className='p-0'>
					<CardTitle className='text-xl font-semibold text-gray-800'>
						{tour.name}
					</CardTitle>
				</CardHeader>
				<CardContent className='flex-1 p-0 pt-4'>
					<p className='text-gray-600'>{tour.description}</p>
				</CardContent>
				<CardFooter className='p-0 pt-6'>
					<Button asChild className='w-full bg-blue-600 hover:bg-blue-700'>
						<Link href={`/destination/${country}`}>VIEW DETAILS</Link>
					</Button>
				</CardFooter>
			</div>
		</Card>
	)
}
