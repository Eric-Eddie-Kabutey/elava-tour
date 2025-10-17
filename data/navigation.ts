// Define the types for our navigation links
type NavLinkItem = {
    title: string;
    href: string;
    description: string;
};

type NavColumn = {
    title: string;
    links: NavLinkItem[];
};

// The main type for each top-level navigation item
type NavigationItem = {
    title: string;
    href?: string; // Optional for dropdown triggers
    description?: string; // Optional
    links?: NavLinkItem[]; // For single-list dropdowns like "Trip Types"
    columns?: NavColumn[]; // For multi-column dropdowns like "Tours"
};

// The refactored data using the types above
export const navigationData: NavigationItem[] = [
    {
        title: "Tours",
        columns: [
            {
                title: "All Destinations",
                links: [
                    {
                        title: "Ghana Tour",
                        href: "/tours/ghana",
                        description: "Explore the vibrant culture and history of Ghana.",
                    },
                    {
                        title: "South African Tour",
                        href: "/tours/south-africa",
                        description: "Witness breathtaking landscapes and diverse wildlife.",
                    },
                    {
                        title: "Morocco Tour",
                        href: "/tours/morocco",
                        description: "Discover the magic of imperial cities and deserts.",
                    },
                    {
                        title: "Kenya Tour",
                        href: "/tours/kenya",
                        description: "Embark on an unforgettable safari adventure.",
                    },
                ],
            },
            {
                title: "Current Destinations",
                links: [
                    {
                        title: "South African Tour",
                        href: "/tours/south-africa",
                        description: "Witness breathtaking landscapes and diverse wildlife.",
                    },
                    {
                        title: "Ghana Tour",
                        href: "/tours/ghana",
                        description: "Explore the vibrant culture and history of Ghana.",
                    },
                ],
            },
        ],
    },
    {
        title: "Trip Types",
        href: "/trip-types",
        links: [
            { title: "All-inclusive Holiday", href: "/trip-types/all-inclusive", description: "Everything you need for a perfect getaway." },
            { title: "Beach Holiday", href: "/trip-types/beach", description: "Relax and unwind on sun-kissed shores." },
            { title: "City Breaks", href: "/trip-types/city-breaks", description: "Explore the world's most exciting cities." },
            { title: "Family Holidays", href: "/trip-types/family", description: "Create unforgettable memories with your loved ones." },
            { title: "Romantic Retreats", href: "/trip-types/romantic", description: "Escape with your special someone." },
            { title: "Group Tours", href: "/trip-types/group", description: "Adventure with a group of like-minded travelers." },
        ],
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Insights",
        href: "/insights",
        links: [
            { title: "News & Stories", href: "/insights/news", description: "Read the latest stories from our travels." },
            { title: "Gallery", href: "/insights/gallery", description: "A visual journey through our amazing destinations." },
        ],
    },
    {
        title: "Help",
        href: "/help",
    },
];