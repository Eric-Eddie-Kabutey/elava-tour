import CurrentTrips from '@/components/tours/ghana/current-trips'
import GhanaTourHero from '@/components/tours/ghana/ghana-hero'
import GhanaTourFaqs from '@/components/tours/ghana/ghana-tour-faqs'
import TourPhotos from '@/components/tours/ghana/tour-photos'
import React from 'react'
import moroccoImg from "@/public/assets/images/morocco_flag.png"


function MoroccoPage() {
  return (
    <div>
        <GhanaTourHero img={moroccoImg} />
        <CurrentTrips />
        <TourPhotos />
        <GhanaTourFaqs />
    </div>
  )
}

export default MoroccoPage