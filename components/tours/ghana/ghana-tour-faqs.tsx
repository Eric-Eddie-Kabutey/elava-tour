'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HoverAccordion } from '@/components/ui/hover-accordion'

const faqs = [
  {
    id: 1,
    question: "What types of tours does Eleva Tours offer?",
    answer: `We create curated travel experiences across Africa, from adventure safaris and cultural immersions to 
                wellness retreats and group getaways.`,
  },
  {
    id: 2,
    question: "Can I customize a tour package?",
    answer: `Yes! We specialize in tailor-made itineraries based on your preferences, whether you’re traveling solo, as a 
                couple, or in a group.`,
  },
  {
    id: 3,
    question: "Do you handle flights and visas as well?",
    answer: `We focus on tours, accommodations, and activities. However, we can guide you on trusted partners for flights 
                and visa assistance.`,
  },
  {
    id: 4,
    question: "What makes Eleva Tours different from other travel agencies?",
    answer: `Our tours highlight authentic local experiences, connecting you with communities, culture, and hidden gems 
                beyond the typical tourist path.`,
  },
]

function GhanaTourFaqs() {
  return (
    <div className="w-full py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="max-container w-[85%] mx-auto flex flex-col gap-8 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-8">
              <h1 className="text-4xl text-black">FAQ</h1>
                <p className="text-lg text-gray-900 md:max-w-sm">
                  Here are some of the most common questions we get about working
                  together.
                </p>           
                <Button variant="secondary" className="w-fit py-4 text-white bg-black hover:bg-gray-800">
                  <Link href="#">Partner With Elava Tour</Link>
                </Button>
            </div>
            <div className="flex flex-col gap-12 border-t border-gray-300 ">
              <HoverAccordion
                    items={faqs.map((faq) => ({
                    value: `item-${faq.id}`,
                    trigger: (
                        <span className="text-2xl font-normal">
                        {faq.question}
                        </span>
                    ),
                    content: (
                        <span className="text-[16px] text-gray-500">
                        {faq.answer}
                        </span>
                    ),
                    }))}
                />
                <Button
                    className='w-fit !px-4 !py-3 text-white hover:text-gray-100 bg-black hover:bg-gray-700'
                >See More</Button>
            </div>
          </div>

      </section>
    </div>
  )
}

export default GhanaTourFaqs
