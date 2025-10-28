"use client"
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Navbar as NavbarComponent,
    NavbarLeft,
    NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import telephoneIcon from "@/public/assets/icons/telephone.svg"
import Image from "next/image";
import Header from "./header";
import Nav from "../ui/nav";
import NavRight from "../ui/nav-right";
import elavaTourImg from "@/public/assets/images/elava_logo.png";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();
    return (
        <div className="sticky top-0 z-50 ">
            <Header />
            <div className="w-full bg-blue-700">
                <header className="max-container mx-auto w-[95%]">
                    {/* <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div> */}
                    <div className=" h-[70px]  flex items-center text-white">
                        <Link
                            href="/"
                            className="w-20 h-fit relative top-5 z-[40]"
                        >
                            <Image 
                                src={elavaTourImg}
                                alt="Elava Logo"
                                className="w-full h-full"
                            />
                        </Link>
                        <NavbarComponent className="h-full w-[87%] mx-auto overflow-visible">
                            <NavbarLeft>
                                
                                {/* <Navigation /> */}
                                <div className="">
                                    <Nav />
                                </div>
                                <div className="px-1 sm:py-5 py-3 hidden xs:flex items-center justify-center gap-1 bg-white">
                                    <Image 
                                        src={telephoneIcon}
                                        alt="Telephone icon"
                                        className="w-4 h-fit"
                                    />
                                    <span className="font-semibold text-black">+27 60 982 5693</span>
                                </div>
                            </NavbarLeft>
                            <NavbarRight>
                                <NavRight />
                                <Button
                                    variant="outline"
                                    onClick={() => router.push("help")}
                                    className="border-white text-white hover:bg-white hover:text-blue-700 "
                                >Get Help Now</Button>
                                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                    <SheetTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="shrink-0 lg:hidden"
                                        >
                                            <Menu className="h-5 w-5" />
                                            <span className="sr-only">Toggle navigation menu</span>
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="right" className='pr-0 flex flex-col p-6'>                                        

                                        <MobileMenu setIsOpen={setIsOpen} />

                                    <div className='mt-auto pt-6'>
                                        <div className='flex flex-col space-y-2'>
                                            <Link
                                                href='/get-help'
                                                className='w-full bg-blue-700 text-white text-center py-2.5'>
                                                Get Help Now
                                            </Link>
                                            <Link
                                                href='tel:+27609825693'
                                                    className='w-full text-center py-2.5 text-black flex items-center justify-center gap-4'>
                                                     <Image 
                                        src={telephoneIcon}
                                        alt="Telephone icon"
                                        className="w-4 h-fit"
                                                    />
                                                    <span>+27 60 982 5693</span>
                                                
                                            </Link>
                                        </div>
							        </div>
                                    </SheetContent>
                                </Sheet>
                            </NavbarRight>
                        </NavbarComponent>
                    </div>
                </header>
            </div>
        </div>
    );
}
