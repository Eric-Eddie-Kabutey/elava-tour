"use client";

import * as React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import { navigationData, NavigationItem } from "@/data/navigation";

type Tour = {
  title: string;
  href: string;
  img: string | StaticImageData;
};

type DestinationLink = {
  title: string;
  href: string;
  description?: string;
  current?: Tour[];
};

export default function Nav() {
  const firstItemWithColumns = navigationData.find(
    (item: NavigationItem) => item.columns && item.columns.length > 0
  );

  const defaultDestination =
    firstItemWithColumns?.columns?.[0]?.links?.[0] ?? null;

    const [hoveredDestination, setHoveredDestination] =
      React.useState<DestinationLink | null>(defaultDestination);

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navigationData.slice(0, 3).map((item: NavigationItem) => (
          <NavigationMenuItem key={item.title}>
            {item.columns ? (
              <>
                <NavigationMenuTrigger className="uppercase">
                  {item.title}
                </NavigationMenuTrigger>

                <NavigationMenuContent className="!rounded-none">
                  <div className="w-[600px] flex justify-between gap-x-6 p-4">
                    {/* LEFT COLUMN - All Destinations */}
                    <div className="flex-1 flex flex-col space-y-3">
                      <h3 className="font-bold text-gray-900 capitalize">
                        All Destinations
                      </h3>

                      <ul className="space-y-1">
                        {item.columns[0].links.map((link) => (
                          <li
                            key={link.title}
                            onMouseEnter={() => setHoveredDestination(link)}
                            onMouseLeave={() =>
                              setHoveredDestination(defaultDestination)
                            }
                          >
                            <ListItem href={link.href} title={link.title}>
                              {link.description}
                            </ListItem>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RIGHT COLUMN - Current Destination Preview */}
                    <div className="w-[250px] border-l border-gray-200 pl-6">
                      {hoveredDestination?.current ? (
                        <div className="flex flex-col gap-4">
                          {hoveredDestination.current.map((tour, index) => (
                            <Link
                              key={index}
                              href={tour.href}
                              className="group block overflow-hidden hover:shadow-md transition-all duration-200 rounded-md"
                            >
                              <div className="relative w-full h-28">
                                <Image
                                  src={tour.img}
                                  alt={tour.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-200 rounded-md"
                                />
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-2 text-sm text-gray-500 italic">
                          Hover over a destination to see current tours.
                        </p>
                      )}
                    </div>
                  </div>
                </NavigationMenuContent>
              </>
            ) : item.links ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1">
                    {item.links.map((link) => (
                      <ListItem
                        key={link.title}
                        href={link.href}
                        title={link.title}
                      >
                        {link.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href!} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
