"use client"
import Navigation from "@/components/ui/navigation";
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
// import emirateLogo from "@/public/assets/icons/emirates-retina.png";

export default function Navbar() {
    
    return (
        <div className="sticky top-0 z-50 ">
            <Header />
            <header className="bg-blue-700">
                {/* <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div> */}
                <div className="max-container 2xl:w-[85%] w-[95%] mx-auto text-white">
                    <NavbarComponent>
                        <NavbarLeft>
                            {/* <Link
                                href="/"
                                className="w-20 h-fit relative left-20 top-0 z-[40]"
                            >
                                <Image 
                                    src={emirateLogo}
                                    alt="Emirate Logo"
                                    className="w-full h-full"
                                />
                            </Link> */}
                            <Navigation />
                            <div className="px-1 sm:py-5 py-3 flex items-center justify-center gap-1 bg-white">
                                <Image 
                                    src={telephoneIcon}
                                    alt="Telephone icon"
                                    className="w-4 h-fit"
                                />
                                <span className="font-semibold text-black">+27 60 982 5693</span>
                            </div>
                        </NavbarLeft>
                        <NavbarRight>
                            
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="shrink-0 md:hidden"
                                    >
                                        <Menu className="h-5 w-5" />
                                        <span className="sr-only">Toggle navigation menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right">
                                    <nav className="grid gap-6 text-lg font-medium">
                                        <Link
                                            href="/"
                                            className="flex items-center gap-2 text-xl font-bold"
                                        >
                                            <span>KtechHub</span>
                                        </Link>
                                        <Link
                                            href="/"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Getting Started
                                        </Link>
                                        <Link
                                            href="/"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Components
                                        </Link>
                                        <Link
                                            href="/contact-us"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Contact Us
                                        </Link>
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </NavbarRight>
                    </NavbarComponent>
                </div>
            </header>
        </div>
    );
}
