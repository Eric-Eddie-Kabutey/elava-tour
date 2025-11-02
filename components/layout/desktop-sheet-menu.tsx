"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import AnimatedHamburgerIcon from "@/components/ui/AnimatedHamburgerIcon";
import { megaMenuData } from "@/data/nav-data"; 


const DesktopSheetMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Body scroll lock effect
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const sheetVariants: Variants = {
    closed: { y: "-100%", transition: { type: "tween", ease: "easeInOut", duration: 0.5 } },
    open: { y: "0", transition: { type: "tween", ease: "easeInOut", duration: 0.5 } },
  };

  return (
    // This entire component is hidden on mobile and visible on desktop
    <div className="hidden lg:block">
      <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
        <AnimatedHamburgerIcon isOpen={isOpen} className="text-black outline" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sheetVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-20 left-0 right-0 bg-white z-40 shadow-lg border-t"
          >
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-4 gap-8">
                {/* --- Col 1: Learn More --- */}
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{megaMenuData.learnMore.title}</h3>
                    <p className="mt-4 text-gray-600">{megaMenuData.learnMore.description}</p>
                  </div>
                  <Link href={megaMenuData.learnMore.link.href} className="flex items-center gap-2 text-red-600 font-semibold mt-12 hover:underline">
                    {megaMenuData.learnMore.link.text} <ArrowRight className="w-5 h-5"/>
                  </Link>
                </div>
                {/* --- Col 2: Insights --- */}
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{megaMenuData.insights.title}</h3>
                  <ul className="space-y-5">
                    {megaMenuData.insights.links.map(link => (
                      <li key={link.title} className="border-b pb-5">
                        <Link href={link.href} className="text-lg text-gray-700 hover:text-red-600 transition-colors">{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <Link href={megaMenuData.insights.seeMoreLink.href} className="flex items-center gap-2 text-red-600 font-semibold mt-6 hover:underline">
                    {megaMenuData.insights.seeMoreLink.text} <ArrowRight className="w-5 h-5"/>
                  </Link>
                </div>
                {/* --- Col 3: Career --- */}
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{megaMenuData.career.title}</h3>
                  <ul className="space-y-5">
                    {megaMenuData.career.links.map(link => (
                      <li key={link.title} className="border-b pb-5">
                        <Link href={link.href} className="text-lg text-gray-700 hover:text-red-600 transition-colors">{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* --- Col 4: CEO's Desk --- */}
                <div className="relative bg-blue-100 p-8 rounded-lg overflow-hidden h-full">
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-gray-800">{megaMenuData.featured.title}</h3>
                    <Quote className="w-10 h-10 text-gray-400 my-4 transform -scale-x-100" strokeWidth={1}/>
                    <blockquote className="text-gray-800 italic text-lg leading-relaxed">{megaMenuData.featured.quote}</blockquote>
                    <div className="mt-auto pt-4">
                      <p className="font-semibold">{megaMenuData.featured.author}</p>
                      <p className="text-sm text-gray-600">{megaMenuData.featured.authorTitle}</p>
                      <Link href={megaMenuData.featured.link.href} className="flex items-center gap-2 text-red-600 font-semibold mt-4 hover:underline">
                        {megaMenuData.featured.link.text} <ArrowRight className="w-5 h-5"/>
                      </Link>
                    </div>
                  </div>
                  <Image src={megaMenuData.featured.imageSrc} alt={megaMenuData.featured.author} width={300} height={400} className="absolute -bottom-10 -right-20 z-0 opacity-80 object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesktopSheetMenu;