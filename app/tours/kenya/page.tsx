import React from 'react'
import AllInclusiveHero from '@/components/trip-types/all-inclusive/all-inclusive-hero'
import FeastTours from '@/components/trip-types/all-inclusive/feast-tours'
import TravelReasons from '@/components/trip-types/all-inclusive/travel-reasons'
import SawCaptured from '@/components/trip-types/all-inclusive/saw-captured'
import WhereHeaded from '@/components/trip-types/all-inclusive/where-headed'
import ThingsExperience from '@/components/trip-types/all-inclusive/things-experience'

function KenyaPage() {
  return (
    <div>
        <AllInclusiveHero />
			<FeastTours />
			<TravelReasons />
			<SawCaptured />
			<WhereHeaded />
			<ThingsExperience />
    </div>
  )
}

export default KenyaPage