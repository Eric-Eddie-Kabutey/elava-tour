import navImg1 from "@/public/assets/images/home/handpicked_1.png";
import navImg2 from "@/public/assets/images/home/handpicked_2.png";
import navImg3 from "@/public/assets/images/home/handpicked_3.png";
import { StaticImageData } from "next/image";

type NavLinkItem = {
  title: string;
  href: string;
  description: string;
  current?: {
    title: string;
    href: string;
    img: StaticImageData;
    description: string;
  }[];
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
    title: "Destinations",
    columns: [
      { 
        title: "All Destinations",
        links: [
          {
            title: "South Africa",
            href: "/tours/south-africa",
            description: "Witness breathtaking landscapes and diverse wildlife.",
            current: [
                {
                    title: "South African Tour",
                    img: navImg1,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
                {
                    title: "Ghana Tour",
                    img: navImg2,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
                {
                    title: "Kenya Tour",
                    img: navImg3,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
            ]
          },
          {
            title: "Ghana",
            href: "/tours/ghana",
            description: "Explore the vibrant culture and history of Ghana.",
            current: [
                {
                    title: "South African Tour",
                    img: navImg1,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
                {
                    title: "Ghana Tour",
                    img: navImg2,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
                {
                    title: "Kenya Tour",
                    img: navImg3,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
            ]
          },
          {
            title: "Kenya",
            href: "/tours/kenya",
            description: "Discover the magic of savannahs and wildlife safaris.",
            current: [
                {
                    title: "South African Tour",
                    img: navImg1,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
                {
                    title: "Ghana Tour",
                    img: navImg2,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
                {
                    title: "Kenya Tour",
                    img: navImg3,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
            ]
          },
        ],
      },
    ],
  },
  {
    title: "Trip Types",
    columns: [
      { 
        title: "All Destinations",
        links: [
          {
            title: "Solo Trips",
            href: "/tours/south-africa",
            description: "Witness breathtaking landscapes and diverse wildlife.",
            current: [
                {
                    title: "South African Tour",
                    img: navImg1,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
                {
                    title: "Ghana Tour",
                    img: navImg2,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
                {
                    title: "Kenya Tour",
                    img: navImg3,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
            ]
          },
          {
            title: "Group Tours",
            href: "/tours/ghana",
            description: "Explore the vibrant culture and history of Ghana.",
            current: [
                {
                    title: "South African Tour",
                    img: navImg1,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
                {
                    title: "Ghana Tour",
                    img: navImg2,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
                {
                    title: "Kenya Tour",
                    img: navImg3,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
            ]
          },
          {
            title: "Family Holidays",
            href: "/tours/kenya",
            description: "Discover the magic of savannahs and wildlife safaris.",
            current: [
                {
                    title: "South African Tour",
                    img: navImg1,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
                {
                    title: "Ghana Tour",
                    img: navImg2,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
                {
                    title: "Kenya Tour",
                    img: navImg3,
                    href: "/tours/south-africa",
                    description: "Experience the Rainbow Nation — vibrant cities, safaris, and coastlines.",
                },
            ]
          },
        ],
      },
    ],
  },
  {
    title: "Deals",
    href: "/deals",
    links: [
      { title: "Trip Saving ", href: "/insights/news", description: "Make a Deposit for next Trip " },
      { title: "Loyalty Discount ", href: "/insights/gallery", description: "Get 10% Discount on Next Trip" },
      { title: "Student Discounts", href: "/insights/gallery", description: "Get Student travel voucher" },
    ],
  },
  {
    title: "About",
    href: "/about-us",
  },
  {
    title: "Insights",
    href: "/insights",
    links: [
      { title: "News & Stories", href: "/insights/news", description: "Read the latest stories from our travels." },
      { title: "Gallery", href: "/insights/gallery", description: "A visual journey through our amazing destinations." },
    ],
  },
];