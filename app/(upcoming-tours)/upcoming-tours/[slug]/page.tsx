import { AboutTrip } from "@/components/upcoming-tours/about-trip";
import { PhotoGallery } from "@/components/upcoming-tours/photo-gallery";
import { TourHero } from "@/components/upcoming-tours/tour-hero";
import { TourInfoBar } from "@/components/upcoming-tours/tour-info-bar";
import { TripCta } from "@/components/upcoming-tours/trip-cta";
import { TripItinerary } from "@/components/upcoming-tours/trip-itenarary";
import { TripPackage } from "@/components/upcoming-tours/trip-package";
import { upcomingTourDatesData } from "@/data/tour-dates";
import { notFound } from "next/navigation";


// Helper function to find tour details by slug
async function getTourDetails(slug: string) {
  for (const destination of upcomingTourDatesData) {
    for (const year of destination.years) {
      const tourDate = year.dates.find((date) => date.slug === slug);
      if (tourDate) {
        // Return all the info we need for the page
        return {
          ...tourDate,
          destinationName: destination.destinationName,
          year: year.year,          
        };
      }
    }
  }
  return null; // Return null if not found
}

// Generate static pages at build time for better performance
export async function generateStaticParams() {
  const paths = upcomingTourDatesData.flatMap((destination) =>
    destination.years.flatMap((year) =>
      year.dates.map((date) => ({
        slug: date.slug,
      }))
    )
  );
  return paths;
}

type TourDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = await params;
  const tourDetails = await getTourDetails(slug);

  if (!tourDetails) {
    notFound(); // Trigger a 404 if the slug is invalid
  }

  // Construct the dynamic title for the hero
  const heroTitle = `MIT - ${tourDetails.destinationName} - ${tourDetails.displayDate}, ${tourDetails.year}`;
  const bookingSectionId = "trip-package-details";

  return (
    <>
       <TourHero
        title={heroTitle}
        imageUrl={tourDetails.heroImageUrl}
        brochureUrl={tourDetails.brochureUrl}
        bookingSectionId={bookingSectionId}
      />

      {/* top dates and location */}
      <TourInfoBar
          tourDate={tourDetails.displayDate}
          location={tourDetails.destinationName}
      />

      {/* About the trip */}  
      <AboutTrip
            aboutText={tourDetails.aboutTrip}
            disclaimerText={tourDetails.disclaimer}
      />
      
      {/* trip itinerary */}
      {tourDetails.itinerary && tourDetails.itinerary.length > 0 && (
          <div className="mt-16">
            <TripItinerary itinerary={tourDetails.itinerary} />
          </div>
      )}
      
      {/* Trip Package */}
      {tourDetails.inclusions && tourDetails.exclusions && (
            <TripPackage
              id={bookingSectionId}
              inclusions={tourDetails.inclusions}
          exclusions={tourDetails.exclusions}
          pricing={tourDetails.pricing}
            />
      )}

      {/* Trip CTA */}
      <TripCta />
      
      {/* trip photo gallery */}
      {tourDetails.gallery && tourDetails.gallery.length > 0 && (
            <PhotoGallery images={tourDetails.gallery} />
          )}       
    </>
  );
}