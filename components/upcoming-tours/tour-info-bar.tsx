import { CalendarDays, MapPin } from "lucide-react";

type TourInfoBarProps = {
  tourDate: string;
  location: string;
};

export function TourInfoBar({ tourDate, location }: TourInfoBarProps) {
  return (  
    <section className="pt-36 pb-12 md:py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Grid layout for the two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Left Card: Tour Dates */}
          <div className="bg-custom-brown-dark text-white p-6 rounded-lg shadow-xl flex flex-col items-center justify-center text-center">
            <CalendarDays className="h-8 w-8 mb-2" />
            <span className="text-sm text-gray-200">Tour Dates</span>
            <p className="text-lg font-semibold">{tourDate}</p>
          </div>

          {/* Right Card: Location */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-xl flex flex-col items-center justify-center text-center">
            <MapPin className="h-8 w-8 mb-2 text-gray-700" />
            <span className="text-sm text-gray-500">Location</span>
            <p className="text-lg font-semibold text-gray-800">{location}</p>
          </div>

        </div>
      </div>
    </section>
  );
}