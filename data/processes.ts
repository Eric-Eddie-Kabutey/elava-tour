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
        description: 'Stand out with a professional email at your company domain. Create branded layouts and personalize messaging.',
        image: processImg1,
        variant: 'default',
    },
    {
        icon: Calendar,
        tag: '02',
        title: 'Tell us how we can reach you',
        description: 'Let customers book time with you directly within Google Calendar via a personal booking page.',
        image: processImg2,
        variant: 'default',
    },
    {
        icon: FileText,
        tag: '03',
        title: 'Submit your details ofter filling forms',
        description: 'Request electronic signatures and easily manage vendor agreements, customer contracts, and more.',
        image: processImg3,
        variant: 'primary',
    },
    {
        icon: FileText,
        tag: '04',
        title: 'Get on a call with our consultants in minutes',
        description: 'Request electronic signatures and easily manage vendor agreements, customer contracts, and more.',
        image: processImg4,
        variant: 'primary',
    },
];