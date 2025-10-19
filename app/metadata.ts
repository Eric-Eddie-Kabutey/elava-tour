import { Metadata } from "next";

interface MetadataProps {
    title: string;
    description: string;
    url?: string;
}

export function generateMetadata({
    title = "Elava Tour | Discover the World with Unforgettable Travel Experiences",
    description = "Elava Tour brings you closer to the world’s most breathtaking destinations with personalized travel packages, guided tours, and unforgettable adventures designed just for you.",
    url = "/",
}: MetadataProps): Metadata {
    const defaultUrl = process.env.WEBAPP_URL || 'https://www.elavatour.com';
    return {
        title: { default: title, template: "%s | Discover the World with Elava Tour" },
        description: description,
        applicationName: "Elava Tour",
        authors: [{ name: "Elava Tour Team", url: defaultUrl }],
        generator: "Next.js",
        keywords: [
            "travel",
            "tours",
            "vacation packages",
            "adventure travel",
            "holiday destinations",
            "Elava Tour",
            "guided tours",
            "luxury travel",
            "group trips",
            "honeymoon packages",
            "world travel",
            "custom tours"
        ],
        referrer: "origin",
        creator: "Elava Tour Team",
        publisher: "Elava Tour",
        robots: "index, follow",
        alternates: {
            canonical: `${defaultUrl}${url}`,
            types: {
                "application/rss+xml": [{ url: "/feed/rss.xml", title: "Elava Tour RSS Feed" }]
            }
        },
        icons: {
            icon: "/icon-192x192.png",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/manifest.json",
        openGraph: {
            type: "website",
            url: defaultUrl,
            title: title,
            description: description,
            siteName: "Elava Tour",
            images: [
                {
                    url: `${defaultUrl}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: "Elava Tour - Explore the World Your Way",
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@ElavaTour",
            creator: "@ElavaTour",
            title: title,
            description: description,
            images: `${defaultUrl}/twitter-image.jpg`
        },
        verification: {
            google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
            yandex: "YOUR_YANDEX_VERIFICATION_CODE"
        },
        appleWebApp: {
            capable: true,
            title: "Elava Tour",
            statusBarStyle: "black-translucent",
        },
        formatDetection: {
            telephone: false
        },
        abstract: "Elava Tour curates immersive travel experiences across the globe—adventure, relaxation, culture, and discovery—crafted for every type of traveler.",
        archives: [`${defaultUrl}/archives`],
        assets: [`${defaultUrl}/assets`],
        bookmarks: [`${defaultUrl}/bookmarks`],
        category: "Travel & Tourism",
        classification: "Global Travel and Tour Services",
    }
}
