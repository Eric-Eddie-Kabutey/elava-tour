import { Users, Globe, Binoculars, Hand, Home, ShieldCheck } from "lucide-react";

// Define a type for our feature data
export type WhyUs = {
    icon: React.ElementType;
    title: string;
    description: string;
};

// Array containing the data for all six whyUs cards
export const whyUsData: WhyUs[] = [
    {
        icon: Users,
        title: "Guides so good we call them CEOs",
        description: "Our Chief Experience Officers have local smarts, big energy, and serious skills to make your trip unforgettable.",
    },
    {
        icon: Globe,
        title: "Small groups, lots of passports",
        description: "Small groups mean big connections. And with travellers from all over, every trip feels globally inspired.",
    },
    {
        icon: Binoculars,
        title: "As ungrouped as it gets",
        description: "The safety of a group, with freedom to explore on your own terms.",
    },
    {
        icon: Hand,
        title: "Immersive experiences are how we roll",
        description: "Get hands-on with culture, food, and local life. No sidelines, just full-on adventure.",
    },
    {
        icon: Home,
        title: "Doing good has never been so fun",
        description: "Travel that helps people, places, and the planet – powered by our Community Tourism model.",
    },
    {
        icon: ShieldCheck,
        title: "Book with all the confidence in the world",
        description: "No stress here. Flexible policies, guaranteed departures, and support whenever you need it.",
    },
];