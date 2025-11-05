import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

import elavaTourImg from '@/public/assets/images/elava_logo.png'

export function TripCta() {
  return (
    <section className="bg-custom-gold text-white">
      <div className="container max-w-6xl mx-auto px-4 py-12">
            
        <div className="-mb-10">
          {/* z-10 ensures the logo sits on top of the border line */}
          <div className="relative z-10 ">
            <Image
              src={elavaTourImg} 
              alt="Maximum Impact Logo"
              width={80}
              height={80}
            />
          </div>
        </div>
        
        {/* Main content area with top border and padding to clear the logo */}
        <div className="border-t border-white/30 pt-20">
          <h2 className="text-3xl font-semibold">
            Maximum Impact Travel International
          </h2>
          <p className="mt-2 text-gray-200">
            Creating amazing travel adventures around the world.
          </p>
          
          <div className="mt-6 space-y-3">
            {/* Phone Number */}
            <a
              href="tel:+1-888-760-8747"
              className="flex items-center gap-3 transition-colors hover:text-gray-300"
            >
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span>+1-888-760-TRIP (8747)</span>
            </a>
            
            {/* Address */}
            <a
              href="#"              
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-gray-300"
            >
              <MapPin className="h-5 w-5 flex-shrink-0" />
              <span>1 Research Court #450 Rockville, MD 20855</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}