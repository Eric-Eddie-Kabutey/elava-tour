import AllInclusiveHero from '@/components/trip-types/all-inclusive/all-inclusive-hero'
import FeastTours from '@/components/trip-types/all-inclusive/feast-tours'
import SawCaptured from '@/components/trip-types/all-inclusive/saw-captured'
import ThingsExperience from '@/components/trip-types/all-inclusive/things-experience'
import TravelReasons from '@/components/trip-types/all-inclusive/travel-reasons'
import WhereHeaded from '@/components/trip-types/all-inclusive/where-headed'
import React from 'react'

function AllInclusiveTrips() {
  return (
    <div>
        {/* <svg
            className="yellow-header"
            width="162"
            height="162"
            viewBox="0 0 162 162"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M117.39 65.9251C161.895 26.3101 135.69 0.105048 96.075 44.6101C99.525 -14.865 62.475 -14.865 65.925 44.6101C26.31 0.105048 0.105032 26.3101 44.61 65.9251C-14.865 62.4751 -14.865 99.525 44.61 96.0751C0.105032 135.69 26.31 161.895 65.925 117.39C62.475 176.865 99.525 176.865 96.075 117.39C135.69 161.895 161.895 135.69 117.39 96.0751C176.865 99.525 176.865 62.4751 117.39 65.9251Z"
            fill="#FDB627"
        />
        </svg> */}
        <AllInclusiveHero />
        <FeastTours />
        <TravelReasons />
        <SawCaptured />
        <WhereHeaded />
        <ThingsExperience />
    </div>
  )
}

export default AllInclusiveTrips