import HelpFaqs from '@/components/help/help-faqs'
import HelpHero from '@/components/help/help-hero'
import Testimonial from '@/components/home/testimonial'
import React from 'react'

function HelpPage() {
  return (
    <div>
        <HelpHero />
        <HelpFaqs />
        <Testimonial />
    </div>
  )
}

export default HelpPage