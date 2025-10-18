import CurrentTrips from '@/components/tours/ghana/current-trips'
import GhanaTourHero from '@/components/tours/ghana/ghana-hero'
import GhanaTourFaqs from '@/components/tours/ghana/ghana-tour-faqs'
import TourPhotos from '@/components/tours/ghana/tour-photos'
import React from 'react'
import ghanaflag from "@/public/assets/images/Flag_of_Ghana.png"


function GhanaTourPage() {
  return (
    <div>
        <GhanaTourHero img={ghanaflag} name="Ghana" />
        <CurrentTrips />
        <TourPhotos />
        <GhanaTourFaqs />
    </div>
  )
}

export default GhanaTourPage