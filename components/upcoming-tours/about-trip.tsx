"use client";

import { useState } from "react";

type AboutTripProps = {
  aboutText: string;
  disclaimerText: string;
  truncateLength?: number; // Optional prop to control truncation length
};

export function AboutTrip({
  aboutText,
  disclaimerText,
  truncateLength = 350, // Default to 350 characters
}: AboutTripProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine if the text is long enough to be truncated
  const isTruncatable = aboutText.length > truncateLength;

  // Get the text to display based on the expanded state
  const displayText =
    isExpanded || !isTruncatable
      ? aboutText
      : `${aboutText.slice(0, truncateLength)}...`;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          About This Trip
        </h2>
        
        {/* The main description text */}
        <p className="text-lg text-gray-700 leading-relaxed">
          {displayText}
        </p>

        {/* The "Read more/less" button, which only shows if the text is truncatable */}
        {isTruncatable && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 font-semibold text-custom-gold hover:underline"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}

        {/* Disclaimer Text */}
        <p className="mt-8 text-gray-600">
          {disclaimerText}
        </p>
      </div>
    </section>
  );
}