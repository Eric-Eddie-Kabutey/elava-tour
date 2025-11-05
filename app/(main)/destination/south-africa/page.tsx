import { AboutDestination } from "@/components/destination/about-destination";
import { FaqCta } from "@/components/destination/faq-cta";
import { FunFactsCta } from "@/components/destination/fun-fact-cta";
import { DestinationPageHero } from "@/components/destination/hero";
import { ImageHighlights } from "@/components/destination/image-highlights";
import { ReviewsCta } from "@/components/destination/review-cta";
import { UpcomingTours } from "@/components/destination/upcoming-tours";
import { destinations, southAfricaTourData } from "@/data/destination";
import { southAfricaImages } from "@/data/image-highlights";
import { upcomingTourDatesData } from "@/data/tour-dates";


export default function SouthAfricaDestinationPage() {
    return (<>
        {/* Hero section */}
        <DestinationPageHero
            title="South Africa"
            imageUrl="/assets/images/destination/south-africa-banner.webp"
            altText="Scenic view of South Africa's landscape"
        />

         {/* About the destination */}
                <AboutDestination
                title={southAfricaTourData.title}
                description={southAfricaTourData.description}
                bookNowLink={southAfricaTourData.bookNowLink}
                funFactsLink={southAfricaTourData.funFactsLink}
              />
        
                {/* image gallery highlights */}
                <ImageHighlights tourImages={southAfricaImages} />

        {/* Upcoming tours */}
        <UpcomingTours upcomingTourData={upcomingTourDatesData} countrySlug="south-africa-tour" />

        {/* Fun fact cta section */}
        <FunFactsCta
        countryName="south-africa"
        introText={destinations[1].funFactsIntro}
        readMoreLink={`/fun-facts/${destinations[1].slug}`}
        />
        
         <FaqCta
        countryName={destinations[1].name}
        introText={destinations[1].faqIntro}
        readMoreLink={`/faq/${destinations[1].slug}`}
        />
        
        {/* Review cta */}
        <ReviewsCta />


    </>)
}