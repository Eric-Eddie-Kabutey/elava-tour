import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { ScrollArea } from "../ui/scroll-area";
import { navigationData } from "@/data/navigation";

// Mobile Navigation Component
const MobileMenu = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <Accordion type="multiple" className="w-full mt-12">
      {navigationData.map((navItem, index) => {
        
        // CASE 1: Complex Dropdown with Columns (e.g., "Destinations")
        if (navItem.columns && navItem.columns.length > 0) {
          return (
            <AccordionItem value={`item-${index}`} key={navItem.title}>
              <AccordionTrigger className="text-gray-900 text-base font-semibold">
                {navItem.title}
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type="multiple" className="w-full pl-4">
                  {navItem.columns.map((column, colIndex) => (
                    <AccordionItem value={`sub-item-${index}-${colIndex}`} key={column.title}>
                      <AccordionTrigger className="text-sm font-semibold text-gray-800">
                        {column.title}
                      </AccordionTrigger>                      
                      <AccordionContent>
                        <div className="h-48"> 
                          <ScrollArea className="h-full"> 
                            <div className="flex flex-col space-y-1 pr-4"> 
                              {column.links.map((link) => (
                                <Link
                                  key={link.title}
                                  href={link.href}
                                  className="py-2 text-gray-700 hover:text-gray-900"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {link.title}
                                </Link>
                              ))}
                            </div>
                          </ScrollArea>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          );
        }
        
        // CASE 2: Simple Dropdown with a list of links (e.g., "Trip Types")
        if (navItem.links && navItem.links.length > 0) {
          return (
            <AccordionItem value={`item-${index}`} key={navItem.title}>
              <AccordionTrigger className="text-gray-900 text-base font-semibold">
                {navItem.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-1 pl-4">
                  {navItem.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="py-2 text-gray-700 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        }

        // CASE 3: A simple, non-dropdown link (e.g., "About")
        return (
          <Link
            key={navItem.title}
            href={navItem.href || '#'}
            className="flex w-full items-center py-4 text-gray-900 text-base font-semibold border-b"
            onClick={() => setIsOpen(false)}
          >
            {navItem.title}
          </Link>
        );
      })}
    </Accordion>
  );
};

export default MobileMenu;