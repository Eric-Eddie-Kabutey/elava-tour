'use client';

import React, { useState } from 'react';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Pause } from 'lucide-react';
import { testimonial_clients } from '@/constants';
import { cn } from '@/lib/utils';

const tripTypes = [
  { label: 'All', value: 'all' },
  { label: 'Ghana Tour', value: 'ghana' },
  { label: 'South African Tour', value: 'south-africa' },
  { label: 'Kenya Tour', value: 'kenya' },
];

function ClientsFeedback() {
  const [selectedType, setSelectedType] = useState('all');

  const filteredTestimonials =
    selectedType === "all"
        ? testimonial_clients
        : testimonial_clients.filter(
            (testimonial) =>
            testimonial?.tripType?.toLowerCase() === selectedType.toLowerCase()
        );

  return (
    <div className="w-full py-20 bg-gray-50 min-h-screen">
      <section className="max-container xl:w-[75%] w-[95%] mx-auto flex flex-col gap-8">
        <div className="w-full flex flex-col items-center text-center gap-4">
          <Typography typo="header-2-semibold" className="text-gray-800">
            What Our Travelers Say
          </Typography>
          <Typography
            typo="body-large-regular"
            className="text-gray-600 max-w-2xl"
          >
            Real stories from real journeys — see what our travelers loved about
            their experience with us.
          </Typography>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
          {tripTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setSelectedType(type.value)}
              className={cn(
                'px-5 py-2.5 rounded-full border transition-all duration-300',
                selectedType === type.value
                  ? 'bg-[#165AA1] text-white border-[#165AA1]'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-[#165AA1]'
              )}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {filteredTestimonials.length > 0 ? (
            filteredTestimonials.map((data, index) => (
              <Card
                key={data.id || index}
                className="flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 border-none bg-white"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src={data.img}
                    alt={`Trip testimonial ${index + 1}`}
                    className="object-cover object-top w-full h-full rounded-t-xl"
                  />
                </div>
                <CardContent className="flex flex-col items-center gap-2 text-center pt-4 pb-2 px-3">
                  <Pause size={18} color="#165AA1" fill="#165AA1" />
                  <Typography
                    typo="body-medium-regular"
                    className="text-gray-600 leading-relaxed"
                  >
                    {data.description}
                  </Typography>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-1 pb-6">
                  <Typography typo="body-medium-semibold">
                    {data.name}
                  </Typography>
                  <Typography
                    typo="body-medium-regular"
                    className="text-gray-500"
                  >
                    {data.position}
                  </Typography>
                  <div className="w-10 h-6 mt-2">
                    <Image
                      src={data.flag}
                      alt={`${data.name} flag`}
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <Typography
                typo="body-large-regular"
                className="text-gray-500 italic"
              >
                No testimonials available for this trip type yet.
              </Typography>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ClientsFeedback;
