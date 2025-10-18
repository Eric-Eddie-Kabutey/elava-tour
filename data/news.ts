// Define the types for our data for type safety
export type PostCategory = "Articles" | "Press Release" | "News";

export type Post = {
    id: number;
    title: string;
    description?: string; // Add this line
    image: string; // Path to the image in the /public folder
    category: PostCategory;
    date: string;
    slug: string; // For the "Read More" link, e.g., "/news/my-post-title"
    featured: boolean; // Add this line
};

// Define the available categories for the filter buttons
export const categories: ("All" | PostCategory)[] = [ "All", "Articles", "Press Release", "News" ];

// Sample data for the news posts (add as many as you need)
export const postsData: Post[] = [
    {
        id: 1,
        title: "Over 1,000 Women-Led Businesses to Receive Funding Under Second Cohort of the IYBA-WE4A Programme",
        description: "The initiative, a cornerstone of our commitment to gender equality in entrepreneurship, aims to bridge the funding gap",
        image: "/assets/images/news/news-1.avif", 
        category: "Press Release",
        date: "October 6, 2025",
        slug: "/news/over-1000-women-led-businesses",
        featured: true,
    },
    {
        id: 2,
        title: "From Philanthropy to Markets: How the Tony Elumelu Foundation is Building Africa's Investible Future",
        description: "The initiative, a cornerstone of our commitment to gender equality in entrepreneurship, aims to bridge the funding gap...",
        image: "/assets/images/news/news-2.avif",
        category: "Articles",
        date: "September 25, 2025",
        slug: "/news/from-philanthropy-to-markets",
        featured: false,
    },
    {
        id: 3,
        title: "The Private Sector's Playbook for Human Capital in Africa",
        image: "/assets/images/news/news-3.avif",
        description: "The initiative, a cornerstone of our commitment to gender equality in entrepreneurship, aims to bridge the funding gap...",
        category: "Articles",
        date: "September 25, 2025",
        slug: "/news/private-sector-playbook",
        featured: false,
    },
    {
        id: 4,
        title: "The Gendered ROI: Measuring the Economic Return on Investing in Women Founders",
        description: "In a bid to bridge the digital divide, a new partnership has been formed to enhance digital literacy in underserved rural areas.",
        image: "/assets/images/news/news-4.webp",
        category: "Articles",
        date: "September 24, 2025",
        slug: "/news/gendered-roi",
        featured: false,
    },
    {
        id: 5,
        title: "Democratising Luck: How $5,000 is Redefining Africa's Economy",
        description: "In a bid to bridge the digital divide, a new partnership has been formed to enhance digital literacy in underserved rural areas.",
        image: "/assets/images/news/news-5.webp",
        category: "Articles",
        date: "September 24, 2025",
        slug: "/news/democratising-luck",
        featured: false,
    },
    {
        id: 6,
        title: "Green Jobs, Green Profits: How Young Africans are Turning Waste into Wealth",
        description: "In a bid to bridge the digital divide, a new partnership has been formed to enhance digital literacy in underserved rural areas.",
        image: "/assets/images/news/news-6.webp",
        category: "News",
        date: "September 24, 2025",
        slug: "/news/green-jobs-green-profits",
        featured: false,
    },
    {
        id: 7,
        title: "New Partnership to Boost Digital Literacy Across Rural Communities",
        description: "In a bid to bridge the digital divide, a new partnership has been formed to enhance digital literacy in underserved rural areas.",
        image: "/assets/images/news/news-7.webp",
        category: "Press Release",
        date: "September 20, 2025",
        slug: "/news/new-partnership-digital-literacy",
        featured: true,
    },
];