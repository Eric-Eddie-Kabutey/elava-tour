import { Destination } from "@/types/destination";

export const destinations: Destination[] = [
    {
        id: 1,
        slug: "ghana-tour",
        name: "Ghana",
        pageDescription:
            "Explore the vibrant culture, rich history, and welcoming spirit of Ghana. Known as the 'Gateway to Africa', it offers a journey through time from the castles of the slave trade to the bustling markets of today.",
        imageUrl: "/assets/images/tour_photos/ghana-1.webp",
        tours: [
            {
                id: 101,
                name: "Accra City Experience",
                description: "Discover the capital's highlights, including Independence Square and Makola Market.",
                imageUrl: "/assets/images/tour_photos/ghana-1.webp",
            },
            {
                id: 102,
                name: "Cape Coast Castle Tour",
                description: "A poignant journey into the history of the slave trade at this historic fortress.",
                imageUrl: "/assets/images/tour_photos/ghana-1.webp",
            },
            {
                id: 103,
                name: "Cape Coast Castle Tour",
                description: "A poignant journey into the history of the slave trade at this historic fortress.",
                imageUrl: "/assets/images/tour_photos/ghana-1.webp",
            },
        ],
        funFactsIntro: "Welcome to the vibrant world of Ghana, a land of rich traditions and captivating wonders. Get ready to be enchanted by the unique charm and colorful culture that make Ghana truly special.",       
        faqIntro: "Here you'll find answers to some of the most commonly asked questions about our tour destination and what you can expect during your trip.",
    },
    {
        id: 2,
        slug: "south-africa-tour",
        name: "South Africa",
        pageDescription:
            "From the iconic Table Mountain to the wild plains of Kruger National Park, South Africa is a country of breathtaking diversity. Experience its unique cultures, stunning landscapes, and unforgettable wildlife encounters.",
        imageUrl: "/assets/images/tour_photos/south_africa1.webp",
        tours: [
            {
                id: 201,
                name: "Cape Town & Table Mountain",
                description: "Explore the Mother City and take a cable car to the top of the world-famous Table Mountain.",
                imageUrl: "https://images.unsplash.com/photo-1600056153399-a4c84b436a5a?q=80&w=2070",
            },
            {
                id: 202,
                name: "Kruger National Park Safari",
                description: "Embark on a thrilling safari adventure to spot the 'Big Five' in their natural habitat.",
                imageUrl: "https://images.unsplash.com/photo-1588269752454-e4165511b88e?q=80&w=2070",
            },
            {
                id: 203,
                name: "The Garden Route Journey",
                description: "A scenic drive through lush forests, serene lakes, and stunning coastal towns.",
                imageUrl: "https://images.unsplash.com/photo-1572972401147-3948a9c3a93c?q=80&w=2070",
            },
        ],
        funFactsIntro: "Discover the secrets of the Rainbow Nation, from its diverse ecosystems to its rich tapestry of cultures. There's more to South Africa than meets the eye.",
        faqIntro: "Preparing for your South African adventure? Find answers to your questions here to ensure your journey is seamless and unforgettable.",
    },    
    {
        id: 3,
        slug: "kenya-tour",
        name: "Kenya",
        pageDescription:
            "Home to the vast Maasai Mara and iconic wildlife, Kenya is the heart of the African safari. Witness the Great Migration, meet the Maasai people, and experience the raw beauty of the savanna.",
        imageUrl: "/assets/images/tour_photos/kenya1.webp",
        tours: [
            {
                id: 301,
                name: "Maasai Mara Great Migration",
                description: "Witness one of the most incredible natural spectacles on earth in the legendary Maasai Mara.",
                imageUrl: "https://images.unsplash.com/photo-1534349762237-72275653da38?q=80&w=2070",
            },
        ],
        funFactsIntro: "Explore the wild heart of Africa and learn what makes Kenya a jewel of the continent, from its incredible wildlife migrations to its ancient traditions.",
        faqIntro: "From safari essentials to cultural etiquette, get the answers you need for your upcoming Kenyan safari right here.",

    },
];


// about destination data 

export const ghanaTourData = {
    title: "GHANA: THE GATEWAY TO AFRICA EXPERIENCE",
    description: [
        "The name Ghana means warrior king. It is called the Gateway to Africa because it is often the first country newcomers to the continent visit. It is one of the safest destinations in all of Africa and the people are friendly and welcoming. The port city of Accra is the seat of the government and commercial hub of Ghana. Travel with us to explore the post-colonial country of Ghana on the West Coast of Africa. It’s more than mere sightseeing, it’s an engaging experience to behold. Experience famed Ghanaian cuisine featuring cassava, beans, maize, plantain, rice, and yams. The spices, culture, and love that go into preparing each meal will keep you asking for more. ​",
        "Come with us to hear the drumbeats and witness the dancing. You will see the national parks, wildlife, waterfalls, mountains, caves, and white-sand beaches. Partake in the joy, the culture, and the traditions. Visit street markets to shop for handicrafts and enjoy delicious street foods and snacks! Come with the expectation of being welcomed in the tropical paradise of Ghana! Watch the Ghana Chronicles, a mini documentary about Ghana: The Gateway to Africa Experience.",
    ],
    bookNowLink: "/booking/platinum-experience",
    funFactsLink: "/destinations/south-africa/fun-facts",
    heroImageUrl: "https://images.unsplash.com/photo-1547471080-7108bab160a5?q=80&w=2070",
};

export const kenyaTourData = {
    title: "KENYA: THE WILD SIDE",
    description: [
        "Kenya is affectionately known as the Rainbow Nation due to its diversity of people and cultures. With more than 11 official languages and dozens of ethnic groups, there's something for everyone in Kenya. Experience lush green streets, scrumptious meals, and impressive wildlife. Immerse yourself into Kenyan culture during our 10-day journey through Nairobi and Maasai Mara.",
        "Your life will certainly change after exploring the wonderful country of Kenya with a professional team of local guides. Enjoy top-level accommodations, walk through history-filled towns, marvel at African wildlife, and get to know welcoming locals. It's time for a change of pace...the city of gold awaits!",
    ],
    bookNowLink: "/booking/platinum-experience",
    funFactsLink: "/destinations/south-africa/fun-facts",
    heroImageUrl: "https://images.unsplash.com/photo-1547471080-7108bab160a5?q=80&w=2070",
};


export const southAfricaTourData = {
    title: "SOUTH AFRICA: JOHANNESBURG AND CAPE TOWN - THE PLATINUM EXPERIENCE",
    description: [
        "South Africa is affectionately known as the Rainbow Nation due to its diversity of people and cultures. With more than 11 official languages and dozens of ethnic groups, there's something for everyone in South Africa. Experience lush green streets, scrumptious meals, and impressive wildlife. Immerse yourself into South African culture during our 10-day journey through Johannesburg and Cape Town.",
        "Your life will certainly change after exploring the wonderful country of South Africa with a professional team of local guides. Enjoy top-level accommodations, walk through history-filled towns, marvel at African wildlife, and get to know welcoming locals. It's time for a change of pace...the city of gold awaits!",
    ],
    bookNowLink: "/booking/platinum-experience",
    funFactsLink: "/destinations/south-africa/fun-facts",
    heroImageUrl: "https://images.unsplash.com/photo-1547471080-7108bab160a5?q=80&w=2070",
};