import { StaticImageData } from 'next/image'
import TourHero from '@/components/tours/TourHero'
import CurrentTrips from '@/components/tours/ghana/current-trips'
import TourPhotos from '@/components/tours/ghana/tour-photos'
import GhanaTourFaqs from '@/components/tours/ghana/ghana-tour-faqs'

import countryFlag from "@/public/assets/images/kenya_flag.png"

type CountryContentProp = {
  name: string;
  image: StaticImageData;
  history: {
  title: string;
  contents: string[];
  }
}


const tourHeroData : CountryContentProp = {
  name: "Kenya",
  image: countryFlag,
  history: {
  title: "Kenya, Where the Wild Roams Free.",
  contents: [
    `Kenya is nature’s grand theatre, a living, breathing masterpiece where every horizon tells a story. It’s where lions 
    rule the endless plains of the Maasai Mara and elephants tread softly against the silhouette of Mount Kilimanjaro. 
    Witness the breathtaking Great Migration, one of Earth’s most extraordinary spectacles, as wildebeests thunder across 
    rivers under a sky splashed with African gold. Yet beyond its wild heart, Kenya reveals layers of soul: the rhythmic 
    hum of Nairobi, the cultural mosaic of its people, and the serenity that whispers through the Rift Valley’s lakes.`,
    `Lose yourself on the powdery sands of Diani Beach, where the Indian Ocean shimmers in shades of turquoise and silver. 
    Wander through Mombasa’s Old Town, its air perfumed with spice and sea breeze, or sail on a traditional dhow beneath a 
    painted sunset. For a taste of tranquility, Lake Naivasha and the flamingos of Lake Nakuru offer scenes so vivid they 
    seem dreamlike. Venture to Mount Kenya’s cool highlands for breathtaking hikes, tea-scented breezes, and quiet moments 
    of awe. Kenya is not just about safaris; it’s about awakening, about standing still as the world moves around you, 
    feeling life in its raw, untamed beauty. Here, you don’t just watch the wild, you become part of it, forever changed 
    by its rhythm and grace.`
    ],
  }
}

function KenyaPage() {
  return (
    <>
       <TourHero tourHeroData={tourHeroData} />
			 <CurrentTrips />
        <TourPhotos />
        <GhanaTourFaqs />
    </>
  )
}

export default KenyaPage