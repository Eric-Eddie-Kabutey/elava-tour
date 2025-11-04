import { destinations } from "@/data/destination";
import { TourCard } from "@/components/tours/tour-card";
import { notFound } from "next/navigation";
import { UnitingPeople } from "@/components/tours/uniting-people";
import { ComingSoonSection } from "@/components/tours/coming-soon-destination";

// Generate static pages for each destination at build time
export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

// Helper to get data for a specific destination by slug
const getDestinationData = async (slug: string) => {    
    
  // In a real app, this would be an API call
  // await fetch(`https://.../destinations?slug=${slug}`)
    const destination = destinations.find((d) => d.slug === slug);    

  // Simulate network delay to show the loading UI
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!destination) {
    notFound(); // Redirect to 404 if slug doesn't match
  }

  return destination;
};

type ToursPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ToursPage({ params }: ToursPageProps) {
  const {slug} = await params;
    const destination = await getDestinationData(slug);  

    // remove extract country name from destination.name for South Africa tour to south-africa
    const selectedCountry = destination.name.toLowerCase().replace(/ /g, "-"); // Extract country from slug    
    
    
    

  return (
    <main className="container mx-auto px-4 py-16 mt-28">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-6xl font-bold text-blue-700 tracking-wider">
          Tours in {destination.name}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          {destination.pageDescription}
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destination.tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} country={selectedCountry}  />
        ))}
          </div>
          
          {/* other static contents */}

          {/* uniting people section */}
          <UnitingPeople />

          {/*  ComingSoonSection section  */}
           <ComingSoonSection />
    </main>
  );
}