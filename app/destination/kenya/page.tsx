import { AboutDestination } from "@/components/destination/about-destination";
import { FaqCta } from "@/components/destination/faq-cta";
import { FunFactsCta } from "@/components/destination/fun-fact-cta";
import { DestinationPageHero } from "@/components/destination/hero";
import { ImageHighlights } from "@/components/destination/image-highlights";
import { ReviewsCta } from "@/components/destination/review-cta";
import { UpcomingTours } from "@/components/destination/upcoming-tours";
import { destinations, kenyaTourData } from "@/data/destination";
import { kenyaImages } from "@/data/image-highlights";
import { tourDatesData } from "@/data/tour-dates";

export default function KenyaDestinationPage() {
    return (<>
        {/* Hero section */}
        <DestinationPageHero
            title="Kenya"
            imageUrl="/assets/images/destination/kenya-banner.webp"
            altText="Scenic view of Kenya's landscape"
        />

        {/* About the destination */}
        <AboutDestination
        title={kenyaTourData.title}
        description={kenyaTourData.description}
        bookNowLink={kenyaTourData.bookNowLink}
        funFactsLink={kenyaTourData.funFactsLink}
      />

        {/* image gallery highlights */}
        <ImageHighlights tourImages={kenyaImages} />

        <UpcomingTours tourData={tourDatesData} countryName="kenya" />

        {/* Fun fact cta section */}
                <FunFactsCta
                countryName="kenya"
                introText={destinations[2].funFactsIntro}
                readMoreLink={`/fun-facts/${destinations[2].slug}`}
                />
                
                 <FaqCta
                countryName={destinations[2].name}
                introText={destinations[2].faqIntro}
                readMoreLink={`/faq/${destinations[2].slug}`}
                />
                
                {/* Review cta */}
                <ReviewsCta />

    </>)
}