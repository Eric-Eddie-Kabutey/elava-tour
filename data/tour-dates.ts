export type TourDate = {
    id: string; // A unique ID for React keys
    displayDate: string; // The text shown on the button
    slug: string; // The unique identifier for the URL
};

export type YearData = {
    year: number;
    dates: TourDate[]; // This now uses the new TourDate type
};

export type DestinationDates = {
    destinationSlug: string;
    destinationName: string;
    years: YearData[];
};

export const upcomingTourDatesData: DestinationDates[] = [
    {
        destinationSlug: "south-africa-tour",
        destinationName: "South Africa",
        years: [
            {
                year: 2026,
                dates: [
                    { id: "sa-2026-may", displayDate: "May 14 - May 22", slug: "south-africa-may-2026" },
                    { id: "sa-2026-nov", displayDate: "Nov 7 - Nov 15", slug: "south-africa-nov-2026" },
                ],
            },
            {
                year: 2027,
                dates: [
                    { id: "sa-2027-may", displayDate: "May 14 - 22", slug: "south-africa-may-2027" },
                    { id: "sa-2027-sept", displayDate: "Sept 25 - Oct 3", slug: "south-africa-sept-2027" },
                ],
            },
        ],
    },
    {
        destinationSlug: "ghana-tour",
        destinationName: "Ghana",
        years: [
            {
                year: 2026,
                dates: [ { id: "gh-2026-june", displayDate: "June 5 - June 13", slug: "ghana-june-2026" } ],
            },
            {
                year: 2027,
                dates: [
                    { id: "gh-2027-june", displayDate: "June 5 - 13", slug: "ghana-june-2027" },
                    { id: "gh-2027-dec", displayDate: "Dec 10 - Dec 18", slug: "ghana-dec-2027" },
                ],
            },
        ],
    },    
    {
        destinationSlug: "kenya-tour",
        destinationName: "Kenya",
        years: [
            {
                year: 2026,
                dates: [ { id: "kh-2026-june", displayDate: "June 5 - June 13", slug: "kenya-june-2026" } ],
            },
            {
                year: 2027,
                dates: [
                    { id: "kh-2027-june", displayDate: "June 5 - 13", slug: "kenya-june-2027" },
                    { id: "kh-2027-dec", displayDate: "Dec 10 - Dec 18", slug: "kenya-dec-2027" },
                ],
            },
        ],
    },
];