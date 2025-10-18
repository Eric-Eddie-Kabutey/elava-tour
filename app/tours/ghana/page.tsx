import CurrentTrips from '@/components/tours/ghana/current-trips'
import GhanaTourHero from '@/components/tours/ghana/ghana-hero'
import GhanaTourFaqs from '@/components/tours/ghana/ghana-tour-faqs'
import TourPhotos from '@/components/tours/ghana/tour-photos'
import React from 'react'

function GhanaTourPage() {
  return (
    <div>
        <GhanaTourHero />
        <CurrentTrips />
        <TourPhotos />
        <GhanaTourFaqs />
    </div>
  )
}

export default GhanaTourPage