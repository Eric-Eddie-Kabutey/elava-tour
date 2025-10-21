"use client";

import { Button } from "@/components/ui/button";
import { whyUsData } from "@/data/why-us";
import { useState } from "react";

// The component accepts an optional 'limit' prop


export const WhyUsSection = () => {
  // If a limit is provided, slice the array. Otherwise, use the full array.
  const [isMore, setIsMore] = useState(false);
  const displayedFeatures = isMore ?  whyUsData : whyUsData.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="w-[75%] container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Elava Tours Difference</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We’re the small-group adventure travel experts, and have been for over 30 years.
          </p>
        </div>

        {/* Responsive Grid for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedFeatures.map((feature) => (
            <div key={feature.title} className="bg-purple-50 p-8 ">
              <feature.icon className="h-10 w-10 text-purple-700 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

          <div   className="text-center mt-12">
            <Button variant="outline" size="lg"
              onClick={() => setIsMore(!isMore)}
              
            >
              {isMore ? "See Less" : "See More"}
            </Button>
          </div>
      </div>
    </section>
  );
};