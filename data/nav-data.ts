export const navigationData = [
    {
        title: "About Us",
        href: "/about-us",
    },
    {
        title: "All Destinations",        
        links: [
            { title: "South Africa", href: "/tours/south-africa-tour" },
            { title: "Ghana Tour", href: "/tours/ghana-tour" },
            { title: "Kenya Tour", href: "/tours/kenya-tour" },
        ],        
        tripTypes: [
            { title: "Solo Trips", href: "/trip-types/solo-trips" },
            { title: "Group Tours", href: "/trip-types/group-tours" },
            { title: "Family Holidays", href: "/trip-types/family-holidays" },
        ],
    },    
    {
        title: "Deals",
        links: [
            { title: "Trip Saving", href: "/deals/trip-saving" },
            { title: "Loyalty Discount", href: "/deals/loyalty-discount" },
            { title: "Student Discounts", href: "/deals/student-discounts" },
        ],
    },
    {
        title: "Insights",
        links: [
            { title: "News & Stories", href: "/news" },
            { title: "Client Feedback", href: "/client-feedback" },
            { title: "Media", href: "/tour-media" },
        ],
    },
    {
        title: "FAQs",
        href: "/help",
    },
];

export type FeaturedContent = {
    title: string;
    quote: string;
    author: string;
    authorTitle: string;
    link: { text: string; href: string };
    imageSrc: string; // Path to the image
};


export const megaMenuData = {
    learnMore: {
        title: "Learn More",
        description: "Discover how our services can drive your digital transformation",
        link: { text: "Talk To An Expert", href: "/contact/expert" },
    },
    insights: {
        title: "Insights",
        links: [
            { title: "Elevating IT Talent Solutions for Enhanced Client Success", href: "/insights/talent-solutions" },
            { title: "Revolutionizing Branch Efficiency for a Leading Bank", href: "/insights/branch-efficiency" },
        ],
        seeMoreLink: { text: "See More Insights", href: "/insights" },
    },
    career: {
        title: "Career",
        links: [
            { title: "Experienced Hires", href: "/career/experienced" },
            { title: "Internship", href: "/career/internship" },
            { title: "Talent Mgnt. Outsourcing", href: "/career/outsourcing" },
        ],
    },
    featured: {
        title: "CEO's Desk",
        quote: "At the core of our mission lies the aspiration to establish Heirs Technologies as a sustainable investment fostering economic prosperity and social wealth across Africa",
        author: "Obong Idiong",
        authorTitle: "Managing Director / CEO",
        link: { text: "Our Leaders", href: "/about/leaders" },
        imageSrc: "/ceo-photo.png", // Replace with actual path
    } as FeaturedContent,
};