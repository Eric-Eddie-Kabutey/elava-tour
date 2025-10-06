'use client';
import Link from "next/link";
import Typography from "./typography";
import dinerLogoImg from "@/public/assets/icons/diners_club_int_logo.png"
import visacardLogo from "@/public/assets/icons/visacard_logo.jpg"
import mastercardLogo from "@/public/assets/icons/mastercard_logo.png"
import americanexpressLogo from "@/public/assets/icons/american_express_logo.png"
import Image from "next/image";

const partner_logos = [americanexpressLogo, dinerLogoImg, mastercardLogo, visacardLogo]

const footer_links = [
    {
        id: "1",
        title: "About Emirates Holidays",
        href: "/"
    },
    {
        id: "2",
        title: "Emirates Skywards",
        href: "/"
    },
    {
        id: "3",
        title: "Flight Only",
        href: "/"
    },
    {
        id: "4",
        title: "Frequently Asked Questions",
        href: "/"
    },
    {
        id: "5",
        title: "Holiday Booking Conditions",
        href: "/"
    },
    {
        id: "6",
        title: "Privacy Notice",
        href: "/"
    },
    {
        id: "7",
        title: "Sitemap",
        href: "/"
    },
    {
        id: "8",
        title: "Website Terms of Use",
        href: "/"
    },
    {
        id: "9",
        title: "Why Book with Us?",
        href: "/"
    },
    {
        id: "10",
        title: "Cookie Policy",
        href: "/"
    },
    {
        id: "11",
        title: "Update your preferences",
        href: "/"
    },
    {
        id: "12",
        title: "Cookie Details",
        href: "/"
    },
]

export default function div() {
    return (
        <div className="w-full flex flex-col">
            <div className="w-full bg-app-primary">
                <section className="max-container relative 2xl:w-[85%] w-[95%] mx-auto py-4 text-white">
                    <Typography
                        typo="header-6-medium"
                    >
                        Useful Links
                    </Typography>
                </section>
            </div>
            <div className="w-full bg-app-secondary">
                <section className="max-container relative 2xl:w-[85%] w-[95%] mx-auto py-4 flex flex-col gap-4 text-white">
                    <Typography
                        typo="body-large-medium"
                    >
                        About Us
                    </Typography>
                    <ul className="flex flex-col -gap-[3px] list-inside list-disc">
                        {footer_links.map(data => (
                            <li>
                                <Link href={data.href}
                                    className="hover:underline text-[16px]"
                                >
                                    {data.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
            <div className="w-full py-6 bg-app-primary">
                <section className="max-container relative 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-10">
                    <div className="flex flex-col gap-2 text-white">
                        <Typography
                            typo="header-4-semibold"
                        >
                            We accept:
                        </Typography>
                        <div className="flex items-center gap-3">
                            {partner_logos.map((logo, index) => (
                                <div key={`Logo on${index+1}`} className={`w-fit h-8`}>
                                    <Image 
                                        src={logo}
                                        alt={`Logo ${index+1}`}
                                        className="w-full h-full  bg-white rounded-sm"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full ">
                        <div className="text-center text-[14px] text-white">© 2025 Emirates Holidays</div>
                    </div>
                </section>
            </div>
        </div>
    );
}
