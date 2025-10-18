import CurrentTrips from '@/components/tours/ghana/current-trips'
import GhanaTourHero from '@/components/tours/ghana/ghana-hero'
import GhanaTourFaqs from '@/components/tours/ghana/ghana-tour-faqs'
import TourPhotos from '@/components/tours/ghana/tour-photos'
import React from 'react'
import southAfricaImg from "@/public/assets/images/south_africa_flag.png"


function SouthAfricaPage() {
  return (
    <div>
        <GhanaTourHero img={southAfricaImg} />
        <CurrentTrips />
        <TourPhotos />
        <GhanaTourFaqs />
    </div>
  )
}

export default SouthAfricaPage