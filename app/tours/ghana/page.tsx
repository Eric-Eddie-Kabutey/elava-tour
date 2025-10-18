import CurrentTrips from '@/components/tours/ghana/current-trips'
import GhanaTourHero from '@/components/tours/ghana/ghana-hero'
import TourPhotos from '@/components/tours/ghana/tour-photos'
import React from 'react'

function GhanaTourPage() {
  return (
    <div>
        <GhanaTourHero />
        <CurrentTrips />
        <TourPhotos />
    </div>
  )
}

export default GhanaTourPage