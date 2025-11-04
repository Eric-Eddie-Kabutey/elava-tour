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
    },
];