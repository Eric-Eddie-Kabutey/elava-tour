import CurrentTrips from '@/components/tours/ghana/current-trips'
import GhanaTourHero from '@/components/tours/ghana/ghana-hero'
import GhanaTourFaqs from '@/components/tours/ghana/ghana-tour-faqs'
import TourPhotos from '@/components/tours/ghana/tour-photos'
import React from 'react'
import ghanaflag from "@/public/assets/images/Flag_of_Ghana.png"
import { StaticImageData } from 'next/image'

type CountryContentProp = {
  name: string;
  image: StaticImageData;
  history: {
    title: string;
    contents: string[];
  }
}

const country_content : CountryContentProp = {
  name: "Ghana",
  image: ghanaflag,
  history: {
  title: "Ghana, The Rhythm of the Motherland. ",
  contents: [
    `Ghana is where Africa’s heartbeat finds its rhythm, a country where the spirit of the past dances beautifully with the 
    vibrance of the present. Along the golden sands of Labadi and Busua beaches, laughter ripples through ocean breezes, 
    and drumbeats echo the soul of a nation proud of its roots. In Accra, creativity pulses through every street corner, 
    from the art-filled alleys of Jamestown to the rhythmic energy of Osu’s night markets. This is a country where every 
    sunrise feels like a celebration, every meal a gathering, and every encounter a lesson in warmth.`,
    
    `Travel inland and feel time slow in the lush greenery of Kakum National Park, where suspended walkways sway above emerald 
    treetops. Journey north to Mole National Park, where elephants roam free under amber skies, or let the mist of Wli Waterfalls 
    wash your spirit clean. In Kumasi, the heart of the Ashanti Kingdom, tradition and pride merge in vivid displays of kente, 
    gold, and storytelling. Ghana’s magic lies not just in its landscapes but in its people, their laughter, resilience, and 
    unmatched hospitality. This is not merely a destination; it’s a homecoming, a reconnection to the heartbeat of the 
    Motherland that never truly fades.`
    ],
  }
}


function GhanaTourPage() {
  return (
    <div>
        <GhanaTourHero country_content={country_content} />
        <CurrentTrips />
        <TourPhotos />
        <GhanaTourFaqs />
    </div>
  )
}

export default GhanaTourPage