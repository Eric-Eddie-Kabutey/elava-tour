"use client";

import * as React from "react";
import Link from "next/link";
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
import { navigationData } from "@/data/navigation";


export default function Nav() {
  return (
    <NavigationMenu className="hidden md:flex ">
      <NavigationMenuList>
        {navigationData.slice(0, 3).map((item) => (
          <NavigationMenuItem key={item.title}>
            {/* Case 1: Item has columns (e.g., "Tours") */}
            {item.columns ? (
              <>
                <NavigationMenuTrigger className="uppercase">{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-x-6 p-4">
                    {item.columns.map((column, index) => (
                      <div
                        key={column.title}
                        className={cn(
                          "flex flex-col space-y-3",
                          // Add a border divider to all columns except the first one
                          index > 0 && "border-l border-gray-200 pl-6"
                        )}
                      >
                        <h3 className="font-bold text-gray-900 capitalize">{column.title}</h3>
                        <ul className="space-y-1">
                          {column.links.map((link) => (
                            <ListItem key={link.title} href={link.href} title={link.title} >
                              {link.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            ) : /* Case 2: Item has a single list of links (e.g., "Insights") */
            item.links ? (
              <>
                <NavigationMenuTrigger >{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1 uppercase">
                    {item.links.map((link) => (
                      <ListItem key={link.title} href={link.href} title={link.title}>
                        {link.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              /* Case 3: Item is a simple link (e.g., "About") */
              <Link href={item.href!} legacyBehavior passHref className="">
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

// The ListItem component remains unchanged, it's perfect as is.
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";