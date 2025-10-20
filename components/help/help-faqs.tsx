'use client'
import React, { useState } from 'react'
import { HoverAccordion } from '../ui/hover-accordion'
import { Button } from '../ui/button'
import Link from 'next/link'

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
  {
    id: 5,
    question: "Is Eleva Tours suitable for large groups?",
    answer: `Definitely. We organize group tours for families, friends, and corporate retreats, with full logistical 
                support from start to finish.`,
  },
  {
    id: 6,
    question: "How can I book a tour with Eleva Tours?",
    answer: `Simply contact us via our website or email, and our team will help you plan and confirm your dream trip step by step.`,
  },
  {
    id: 7,
    question: "Which African countries does Eleva Tours operate in?",
    answer: `We currently curate journeys across Ghana, Kenya, and South Africa, with more destinations being added soon. Each tour is designed to highlight the country’s unique rhythm, culture, and hidden gems.`,
  },
  {
    id: 8,
    question: "Are your tours suitable for first-time visitors to Africa?",
    answer: `Absolutely. Whether it’s your first time or your fifteenth, our guided experiences make travel effortless, comfortable, and immersive. We handle the details  so you can focus on the discovery.`,
  },
  {
    id: 9,
    question: "Does Eleva Tours offer sustainable or community-based travel options?",
    answer: `Yes, sustainability is at the heart of what we do. We collaborate with local guides, artisans, and small businesses to ensure your travel supports communities and leaves a positive footprint.`,
  },
  {
    id: 10,
    question: "What should I expect from an Eleva Tours experience?",
    answer: `Expect authenticity, warmth, and connection. Our trips are crafted to help you see Africa beyond the postcards, to taste, feel, and live its spirit in every journey.`,
  },
]

function HelpFaqs() {
  const [isMore, setIsMore] = useState(false);

  const moreFaqs = isMore ?  faqs : faqs.slice(0, 5)
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
                    items={moreFaqs.map((faq) => ({
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
                  onClick={() => setIsMore(!isMore)}
                    className='w-fit !px-4 !py-3 text-white hover:text-gray-100 bg-black hover:bg-gray-700'
                >{isMore ? "See More" : "See Less"}</Button>
            </div>
          </div>

      </section>
    </div>
  )
}

export default HelpFaqs
