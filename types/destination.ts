export type TourPackage = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;    
};

export type Destination = {
    id: number;
    slug: string; // This will now be like "south-africa-tour"
    name: string;
    pageDescription: string; // A general description for the destination page
    imageUrl: string; // A main hero image for the destination
    tours: TourPackage[]; // An array of available tours:
    funFactsIntro: string; // Intro text for the fun facts section
    faqIntro: string; // Intro text for the FAQ section
};

export type ComingSoonDestination = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
};