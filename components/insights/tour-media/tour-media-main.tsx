"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import dubaiImg from "@/public/assets/images/home/handpicked_1.png";
import maldivesImg from "@/public/assets/images/home/handpicked_2.png";
import mauritiusImg from "@/public/assets/images/home/handpicked_3.png";

const countries = {
  Ghana: ["Accra City Tour", "Cape Coast Adventure", "Volta Lake Cruise"],
  "South Africa": ["Cape Town Safari", "Garden Route Experience", "Durban Beach Escape"],
  Kenya: ["Nairobi National Park", "Masai Mara Safari", "Mombasa Coastal Tour"],
};

interface Tour {
  id: number;
  country: string;
  title: string;
  image: StaticImageData; // Using 'any' since the image imports are external, could be made more specific with StaticImageData
  description: string;
}

const tours: Tour[] = [
  {
    id: 1,
    country: "Ghana",
    title: "Accra City Tour",
    image: dubaiImg,
    description:
      "Explore the vibrant streets of Accra, visit Independence Square, and experience local culture.",
  },
  {
    id: 2,
    country: "South Africa",
    title: "Cape Town Safari",
    image: maldivesImg,
    description:
      "Witness stunning wildlife, Table Mountain, and breathtaking landscapes of Cape Town.",
  },
  {
    id: 3,
    country: "Kenya",
    title: "Masai Mara Safari",
    image: mauritiusImg,
    description:
      "Experience the legendary Great Migration and connect with the rich Maasai culture.",
  },
  {
    id: 4,
    country: "Ghana",
    title: "Volta Lake Cruise",
    image: dubaiImg,
    description:
      "Relax and unwind on a scenic cruise across the beautiful Volta Lake.",
  },
];

export default function TourMediaMain() {
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const [selectedTour, setSelectedTour] = useState<string>("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Filter tours by country and selected tour
  const filteredTours = tours.filter((tour) => {
    if (selectedCountry === "All") return true;
    if (selectedTour !== "All") return tour.title === selectedTour;
    return tour.country === selectedCountry;
  });

  return (
    <div className="py-20 pt-28 px-4 md:px-12 bg-gray-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-opaque mb-2">
          Discover Our Destinations
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore breathtaking tours and adventures across Africa — choose a
          country and find your next unforgettable experience.
        </p>
      </div>

      {/* Country Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "Ghana", "South Africa", "Kenya"].map((country) => (
          <button
            key={country}
            onClick={() => {
              setSelectedCountry(country);
              setSelectedTour("All");
              setIsDropdownOpen(false); // Close dropdown when switching countries
            }}
            className={`px-4 py-2 text-sm font-medium border transition-all ${
              selectedCountry === country
                ? "bg-yellow-opaque text-green-opaque border-green-opaque hover:text-yellow-opaque hover:bg-green-opaque"
                : "bg-transparent text-green-opaque border-yellow-opaque hover:text-green-opaque hover:bg-yellow-opaque"
            }`}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Tours Dropdown */}
      {selectedCountry !== "All" && (
        <div className="flex justify-center mb-10 relative">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center justify-between w-64 px-5 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-green-opaque">
                {selectedTour === "All"
                  ? `Select a tour in ${selectedCountry}`
                  : selectedTour}
              </span>
              <ChevronDown className="w-4 h-4 text-green-opaque" />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-12 left-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10 animate-fade-in">
                {countries[selectedCountry as keyof typeof countries]?.map(
                  (tourName) => (
                    <div
                      key={tourName}
                      onClick={() => {
                        setSelectedTour(tourName);
                        setIsDropdownOpen(false);
                      }}
                      className="px-5 py-2 hover:bg-blue-50 cursor-pointer text-green-opaque"
                    >
                      {tourName}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tour Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* I have fake the conditionally render, it suppose to be 0 when real data is available */}
        {filteredTours.length > 10 ? (
          filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="relative group h-[400px] overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                <p className="text-sm text-gray-200 mb-4">{tour.description}</p>
                <span className="text-xs uppercase tracking-wide bg-white/20 px-3 py-1 rounded-full">
                  {tour.country}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No tours found for this selection.
          </p>
        )}
      </div>
    </div>
  );
}
