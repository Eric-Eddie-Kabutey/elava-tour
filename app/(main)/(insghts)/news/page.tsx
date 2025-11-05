import { FeaturedNewsCarousel } from "@/components/insights/FeaturedNewCarousel";
import { LatestNewsSection } from "@/components/insights/LatestNewsSection";

export default function NewsPage() {
    return (<>
        {/* Hero section */}        
        <FeaturedNewsCarousel />
        {/* Listing */}
        <LatestNewsSection />
    </>)
}