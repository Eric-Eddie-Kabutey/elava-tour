import CurrentTrips from '@/components/tours/ghana/current-trips'
import GhanaTourHero from '@/components/tours/ghana/ghana-hero'
import GhanaTourFaqs from '@/components/tours/ghana/ghana-tour-faqs'
import TourPhotos from '@/components/tours/ghana/tour-photos'
import React from 'react'
import countryFlag from "@/public/assets/images/south_africa_flag.png"
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
  name: "South Africa",
  image: countryFlag,
  history: {
  title: "South Africa, A World in One Country.",
  contents: [
    `South Africa is a story of contrasts and harmony, a land where mountains kiss the ocean, deserts bloom, and cultures weave a colorful tapestry of life. Begin in Cape Town, where Table Mountain towers like a guardian over a city alive with art, flavor, and freedom. Wander through Bo-Kaap’s rainbow-colored streets, sip world-class wines in Stellenbosch, or watch penguins waddle along Boulders Beach. Drive the iconic Garden Route, tracing rugged coastlines and forests that feel untouched by time, or journey north to Kruger National Park for encounters with Africa’s Big Five beneath a fiery sunset.`,
    `But South Africa’s beauty extends beyond its landscapes, it lives in its people. From the rhythmic township beats of Soweto to the quiet grace of the Drakensberg Mountains, every experience feels layered, textured, human. Johannesburg hums with creativity and innovation, while Durban invites you with spice, surf, and sun. This is a country where adventure meets soul; where history whispers through Robben Island, and renewal breathes through every dawn. In South Africa, every corner holds a new world, and every traveler leaves with more than memories. 
      They leave transformed.`
    ],
  }
}

function SouthAfricaPage() {
  return (
    <div>
        <GhanaTourHero country_content={country_content} />
        <CurrentTrips />
        <TourPhotos />
        <GhanaTourFaqs />
    </div>
  )
}

export default SouthAfricaPage