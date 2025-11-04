import { AboutDestination } from '@/components/destination/about-destination'
import { FaqCta } from '@/components/destination/faq-cta'
import { FunFactsCta } from '@/components/destination/fun-fact-cta'
import { DestinationPageHero } from '@/components/destination/hero'
import { ImageHighlights } from '@/components/destination/image-highlights'
import { ReviewsCta } from '@/components/destination/review-cta'
import { UpcomingTours } from '@/components/destination/upcoming-tours'
import { destinations, ghanaTourData } from '@/data/destination'
import { ghanaImages } from '@/data/image-highlights'
import { tourDatesData } from '@/data/tour-dates'

export default function GhanaDestinationPage() {
	return (
		<>
			{/* Hero section */}
			<DestinationPageHero
				title='Ghana'
				imageUrl='/assets/images/destination/ghana-banner.webp'
				altText="Scenic view of Ghana's landscape"
			/>

			{/* About the destination */}
			<AboutDestination
				title={ghanaTourData.title}
				description={ghanaTourData.description}
				bookNowLink={ghanaTourData.bookNowLink}
				funFactsLink={ghanaTourData.funFactsLink}
			/>

			{/* image gallery highlights */}
			<ImageHighlights tourImages={ghanaImages} />

			<UpcomingTours tourData={tourDatesData} countryName='ghana' />

			{/* Fun fact cta section */}
			<FunFactsCta
				countryName='ghana'
				introText={destinations[0].funFactsIntro}
				readMoreLink={`/fun-facts/${destinations[0].slug}`}
			/>

			<FaqCta
				countryName={destinations[0].name}
				introText={destinations[0].faqIntro}
				readMoreLink={`/faq/${destinations[0].slug}`}
			/>

			{/* Review cta */}
			<ReviewsCta />
		</>
	)
}
