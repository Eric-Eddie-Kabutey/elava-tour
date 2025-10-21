import React from 'react'
import familyHolidayImg from "@/public/assets/images/home/holiday_1.png"
import Image from 'next/image'

function StudentDiscountMain() {
  return (
    <div className='w-full '>
        <section className=' w-full'>
            <div className="w-full h-[75vh] max-h-[700px] overflow-hidden relative">
                  <Image 
                    src={familyHolidayImg}
                    alt='Coming soon'
                    className='w-full h-full object-cover'
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="max-container w-[85%] absolute inset-0 flex items-center">
                        <div className="w-full sm:w-[65%] md:w-[55%] lg:w-[70%] px-8 sm:px-12 md:px-20 flex flex-col gap-6">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white md:leading-tight drop-shadow-lg">
                                Coming soon.
                            </h2>
                           
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default StudentDiscountMain