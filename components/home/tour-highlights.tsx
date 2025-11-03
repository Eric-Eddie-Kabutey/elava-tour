import Image from "next/image";

import executiveIcon from '@/public/assets/icons/executive_icon.jpeg'
import depositIcon from '@/public/assets/icons/deposit_icon.jpeg'
import personalizedIcon from '@/public/assets/icons/personalized_icon.jpeg'
import customerIcon from '@/public/assets/icons/customer_service_icon.jpeg'

const services = [
    {
        id: '1',
        icon: executiveIcon,
        title: 'Exclusive offers and benefits',
    },
    {
        id: '2  ',
        icon: depositIcon,
        title: 'Low deposits and flexible payment options',
    },
    {
        id: '3',
        icon: personalizedIcon,
        title: 'Personalised by experts for every budget',
    },
    {
        id: '4',
        icon: customerIcon,
        title: '24/7 Customer Service and in-resort representation',
    },
]

export default function TourHighlights() {
	return (
		<div className='max-container w-full pb-4 bg-[#e4e4e4] overflow-auto'>
			<div className='lg:w-[75%] w-[95%] mx-auto grid grid-cols-4 sm:gap-[3px] gap-4'>
				{services.map((data, index) => (
					<div
						key={data.id}
						className='p-6 flex flex-col justify-center items-center gap-2 bg-white hover:border-b-2 hover:border-blue-800'>
						<Image
							src={data.icon}
							alt={`services ${index + 1}`}
							className='w-12 h-fit'
						/>
						<div className='text-center font-medium text-gray-400 leading-5'>
							{data.title}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
