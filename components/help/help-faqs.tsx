'use client'
import React from 'react'
import Typography from '../shared/typography'
import { HoverAccordion } from '../ui/hover-accordion'
import { Button } from '../ui/button'
import Link from 'next/link'

const faqs = [
  {
    id: 1,
    question: "What do you need from me to be successful?",
    answer: `Clear communication, commitment to the process and timely
              feedback. We know you're busy, and we do everything possible to
              respect your time.`,
  },
  {
    id: 2,
    question: "What’s the time commitment for me?",
    answer: `You should expect to invest ~1-2 hours per week as a standard
              (during the onboarding and ramp-up phases, it may be a bit
              more). Most of this time is spent reading your content and
              providing us with feedback on it.`,
  },
  {
    id: 3,
    question: "What’s the typical timeline to get started?",
    answer: `Our goal with new Members is to begin publishing within 30 days
              of their Kickoff Call, we ramp-up production during days 30-60,
              and then we settle into a “steady state”.`,
  },
  {
    id: 4,
    question: "What type of content do you support?",
    answer: `We produce original written content and supporting graphic
              designs.`,
  },
]

function HelpFaqs() {
  return (
    <div className="w-full py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="max-container w-[85%] mx-auto flex flex-col gap-8 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 class">
            <div className="flex flex-col space-y-8">
              <h1 className="text-4xl text-black">FAQ</h1>
                <p className="text-lg text-gray-900 md:max-w-sm">
                  Here are some of the most common questions we get about working
                  together.
                </p>           
                <Button variant="secondary" className="max-w-[280px] py-4">
                  <Link href="#">Partner With Elava Tour</Link>
                </Button>
            </div>
            <div className="border-t border-gray-300 ">
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
            </div>
          </div>

      </section>
    </div>
  )
}

export default HelpFaqs
