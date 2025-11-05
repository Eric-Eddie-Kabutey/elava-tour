import AllInclusiveHero from '@/components/trip-types/all-inclusive/all-inclusive-hero'
import FeastTours from '@/components/trip-types/all-inclusive/feast-tours'
import SawCaptured from '@/components/trip-types/all-inclusive/saw-captured'
import ThingsExperience from '@/components/trip-types/all-inclusive/things-experience'
import TravelReasons from '@/components/trip-types/all-inclusive/travel-reasons'
import WhereHeaded from '@/components/trip-types/all-inclusive/where-headed'

function AllInclusiveTrips() {
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

export default AllInclusiveTrips