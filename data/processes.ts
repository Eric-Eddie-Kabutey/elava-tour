// Define the updated type for our process steps
type ProcessStep = {
    tag: string;
    title: string;
    description: string;
    image: string; // The path to the image in the /public folder
};

export const processSteps: ProcessStep[] = [
    {
        tag: "Step 01",
        title: "Discovery & Planning",
        description: "We start by understanding your vision and goals to create a tailored strategy.",
        image: "/assets/images/process/45.png",
    },
    {
        tag: "Step 02",
        title: "Design & Prototype",
        description: "Our team crafts a stunning, user-centric design and interactive prototype.",
        image: "/assets/images/process/46.png",
    },
    {
        tag: "Step 03",
        title: "Development & Testing",
        description: "We build your solution with clean code and test it rigorously for performance.",
        image: "/assets/images/process/47.png",
    },
    {
        tag: "Step 04",
        title: "Launch & Optimize",
        description: "We deploy your project and monitor its performance, making data-driven optimizations.",
        image: "/assets/images/process/48.png",
    },
];


// new data for the new design
import { Mail, Calendar, FileText } from 'lucide-react';
import processImg1 from "@/public/assets/images/process/45.png"
import processImg2 from "@/public/assets/images/process/46.png"
import processImg3 from "@/public/assets/images/process/47.png"
import processImg4 from "@/public/assets/images/process/48.png"
import { StaticImageData } from 'next/image';

// Define the type for our feature cards
type Feature = {
    icon: React.ElementType;
    tag: string;
    title: string;
    description: string;
    image: string | StaticImageData;
    variant: 'default' | 'primary'; // To handle the blue card
};

export const featuresData: Feature[] = [
  {
    icon: Mail,
    tag: '01',
    title: 'Tell us what you want and when',
    description:
      'Share your dream destination, travel dates, and preferences — whether it’s a relaxing beach escape, cultural adventure, or wildlife experience. We’ll help you plan it your way.',
    image: processImg1,
    variant: 'default',
  },
  {
    icon: Calendar,
    tag: '02',
    title: 'Tell us how we can reach you',
    description:
      'Provide your contact details so our travel experts can get in touch quickly to confirm your trip details and assist you throughout your travel planning.',
    image: processImg2,
    variant: 'default',
  },
  {
    icon: FileText,
    tag: '03',
    title: 'Submit your details after filling forms',
    description:
      'Complete our short travel form with your preferences and traveler information. This helps us personalize your itinerary and prepare the best travel options for you.',
    image: processImg3,
    variant: 'primary',
  },
  {
    icon: FileText,
    tag: '04',
    title: 'Get on a call with our consultants in minutes',
    description:
      'Once we receive your request, one of our tour consultants will reach out to discuss your plan, refine your itinerary, and answer any questions you have before your adventure begins.',
    image: processImg4,
    variant: 'primary',
  },
];