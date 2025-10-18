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

// Define the type for our feature cards
type Feature = {
    icon: React.ElementType;
    tag: string;
    title: string;
    description: string;
    image: string;
    variant: 'default' | 'primary'; // To handle the blue card
};

export const featuresData: Feature[] = [
    {
        icon: Mail,
        tag: 'Gmail',
        title: 'Look professional with custom email @yourcompany',
        description: 'Stand out with a professional email at your company domain. Create branded layouts and personalize messaging.',
        image: '/assets/images/process/45.png',
        variant: 'default',
    },
    {
        icon: Calendar,
        tag: 'Calendar',
        title: 'Simplify booking with appointment scheduling',
        description: 'Let customers book time with you directly within Google Calendar via a personal booking page.',
        image: '/assets/images/process/46.png',
        variant: 'default',
    },
    {
        icon: FileText,
        tag: 'Docs',
        title: 'Streamline contract management with eSignature',
        description: 'Request electronic signatures and easily manage vendor agreements, customer contracts, and more.',
        image: '/assets/images/process/47.png',
        variant: 'primary',
    },
    {
        icon: FileText,
        tag: 'Docs',
        title: 'Streamline contract management with eSignature',
        description: 'Request electronic signatures and easily manage vendor agreements, customer contracts, and more.',
        image: '/assets/images/process/48.png',
        variant: 'primary',
    },
];