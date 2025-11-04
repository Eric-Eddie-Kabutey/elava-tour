export type YearData = {
    year: number;
    dates: string[];
};

export type DestinationDates = {
    destinationSlug: string; // To link with your main destination data
    destinationName: string;
    years: YearData[];
};

export const tourDatesData: DestinationDates[] = [
    {
        destinationSlug: "south-africa-tour",
        destinationName: "South Africa",
        years: [
            {
                year: 2026,
                dates: [ "May 14 - May 22", "Nov 7 - Nov 15" ],
            },
            {
                year: 2027,
                dates: [ "May 14 - 22", "Sept 25 - Oct 3" ],
            },
            {
                year: 2028,
                dates: [ "Mar 23 - 31", "Nov 7 - 15" ],
            },
        ],
    },
    {
        destinationSlug: "ghana-tour",
        destinationName: "Ghana",
        years: [
            {
                year: 2026,
                dates: [ "June 5 - June 13" ],
            },
            {
                year: 2027,
                dates: [ "June 5 - 13", "Dec 10 - Dec 18" ],
            },
        ],
    },
    {
        destinationSlug: "kenya-tour",
        destinationName: "Kenya",
        years: [
            {
                year: 2026,
                dates: [ "Aug 1 - Aug 9" ],
            },
            {
                year: 2027,
                dates: [ "Aug 1 - 9" ],
            },
        ],
    },
];