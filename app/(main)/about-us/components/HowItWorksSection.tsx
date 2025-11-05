"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { processSteps } from "@/data/processes";



export const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
          <p className="text-gray-600 mt-2">A clear and simple path from idea to impact.</p>
        </div>

        {/* This is the new responsive grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <Card key={step.title} className="overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative h-48 w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Container */}
              <CardContent className="p-6">
                <div className="mb-3 inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                  {step.tag}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};