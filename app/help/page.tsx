import HelpFaqs from '@/components/help/help-faqs'
import HelpHero from '@/components/help/help-hero'
import { Helpprocess } from '@/components/help/help-process'
import Testimonial from '@/components/home/testimonial'
import React from 'react'

function HelpPage() {
  return (
    <div>
        <HelpHero />
        <Helpprocess />
        <HelpFaqs />
        <Testimonial />
    </div>
  )
}

export default HelpPage