import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, MapPin, ShieldCheck, Wallet } from "lucide-react";

// Define a type for our feature data for better type safety
type WhyUsFeature = {
  icon: React.ElementType; // We'll pass the icon component directly
  title: string;
  description: string;
};

// Array containing the data for the four feature cards
const whyUsData: WhyUsFeature[] = [
  {
    icon: UserCheck,
    title: "Personalized Itineraries",
    description: "Every trip is uniquely crafted to match your interests and travel style, ensuring a truly personal experience.",
  },
  {
    icon: MapPin,
    title: "Expert Local Guides",
    description: "Discover hidden gems and authentic culture with our knowledgeable and passionate local guides.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & 24/7 Support",
    description: "Travel with peace of mind knowing our team is available around the clock to support you.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description: "Enjoy fair, upfront pricing with no hidden fees. We believe in providing exceptional value for your journey.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Why Travel With Us?</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We are dedicated to creating unforgettable travel experiences with a personal touch and unwavering support.
          </p>
        </div>

        {/* Responsive Grid for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsData.map((feature) => (
            <Card
              key={feature.title}
              className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <CardHeader>
                {/* Icon Wrapper */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 mb-4">
                  <feature.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};