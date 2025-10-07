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


const links: { title: string; href: string; description: string, links?: { title: string; href: string; description: string }[] }[] = [
  {
    title: "Destinations",
    href: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    links: [
      {
        title: "Ghana",
        href: "/",
        description:
          "How to install dependencies and structure your app.",
      },
      {
        title: "South Africa",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Namibia",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Morocco",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Kenya",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Europe",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Zimbabwe",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Dubai",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Thailand",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Egypt",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Mauritius",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Turkey",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "India",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
    ]
  },
  {
    title: "Tours",
    href: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    links: [
      {
        title: "South Africa Tours",
        href: "/",
        description:
          "How to install dependencies and structure your app.",
      },
      {
        title: "Zimbabwe Tours ",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Namibia Tours",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Kenya Tours",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Morocco Tours",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Safaris",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
    ]
  },
  {
    title: "Trip Types",
    href: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    links: [
      {
        title: "All-inclusive Holiday",
        href: "/",
        description:
          "Re-usable components built using Radix UI and Tailwind CSS.",
      },
      {
        title: "Beach Holiday",
        href: "/",
        description:
          "How to install dependencies and structure your app.",
      },
      {
        title: "City Breaks",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Family Holidays",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Romantic Retreats",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Business Trips",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
      {
        title: "Group Tours",
        href: "/",
        description:
          "Styles for headings, paragraphs, lists...etc",
      },
    ]
  },
  {
    title: "About",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Insights",
    href: "/",
    description:
      "Get in touch with our team for any questions or inquiries.",
  },
  {
    title: "Help",
    href: "/",
    description:
      "Get in touch with our team for any questions or inquiries.",
  },
];

export default function Navigation() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {
          links.map((link) => (
            link.links ? (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] text-">
                    {link.links.map((sublink) => (
                      <ListItem key={sublink.href} href={sublink.href} title={sublink.title}>
                        {sublink.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} title={link.description}>
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          ))
        }
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
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
