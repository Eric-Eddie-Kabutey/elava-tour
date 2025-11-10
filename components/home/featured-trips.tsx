import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TripCard } from "@/components/shared/cards/trip-card";

// lib/featured-trips-data.ts

export type FeaturedTrip = {
  id: number;
  imageUrl: string;
  title: string;
  subTitle: string;
  description: string;
  location: string;
  duration: string;
  href: string; // The link for the card
};

export const featuredTripsData: FeaturedTrip[] = [
  {
    id: 1,
    imageUrl: "/assets/images/home/featured-trips/east-african-love.png",
    title: "East African Love (Rwanda x Uganda)",
    subTitle: "(10 Days - 8.17.25 - 8.26.25)",
    description: "3 Regions (Accra x Aburi x Cape Coast) | One...",
    location: "Rwanda, Uganda",
    duration: "10 Days",
    href: "/tour/east-african-love-2025",
  },
  {
    id: 2,
    imageUrl: "/assets/images/home/featured-trips/take-me-home-cover.png",
    title: "Take Me Home | 3 Region Ghana Tour | 7 Nights",
    subTitle: "", // This one doesn't have a date subtitle
    description: "Experience the vibrant rhythm and captivating culture of Ghana in...",
    location: "Ghana",
    duration: "7 Nights", 
    href: "/tour/ghana-take-me-home-1",
  },
  {
    id: 3,
    imageUrl: "/assets/images/home/featured-trips/slider2.jpg",
    title: "Take Me Home | 3 Region Ghana Tour | 7 Nights",
    subTitle: "",
    description: "Experience the vibrant rhythm and captivating culture of Ghana in...",
    location: "Ghana",
    duration: "7 Nights",
    href: "/tour/ghana-take-me-home-2",
  },
];

export function FeaturedTrips() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-h-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-opaque">
            Get started with these hand-picked top rated trips
          </h2>
        </div>

        {/* Responsive Grid of Trip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredTripsData.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>

        {/* View All Trips Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-yellow-opaque text-green-opaque hover:bg-green-opaque font-semibold">
            <Link href="/tours">VIEW ALL TRIPS</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}