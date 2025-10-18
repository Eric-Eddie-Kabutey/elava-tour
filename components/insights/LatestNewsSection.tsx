"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { categories, postsData, PostCategory } from "@/data/news"; 
import { cn } from "@/lib/utils";

const POSTS_PER_PAGE = 6;

export const LatestNewsSection = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | PostCategory>("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Memoize filtered posts to avoid re-calculating on every render
  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return postsData;
    }
    return postsData.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  // Calculate total pages and the posts for the current page
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryClick = (category: "All" | PostCategory) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  return (
    <section className="py-16 bg-[#e4e4e4]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Latest News</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Responsive Grid for News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paginatedPosts.map((post) => (
            <Card key={post.id} className="bg-white flex flex-col overflow-hidden shadow-md transition-shadow hover:shadow-xl">
              <CardHeader className="p-0 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div
                  className={cn(
                    "absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white ",
                    post.category === "Press Release" && "bg-blue-600",
                    post.category === "Articles" && "bg-red-600",
                    post.category === "News" && "bg-green-600"
                  )}
                >
                  {post.category.toUpperCase()}
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-4 h-24">
                  {post.title}
                </h3>
                <Link
                  href={post.slug}
                  className="text-sm font-semibold text-red-600 hover:underline"
                >
                  READ MORE »
                </Link>
              </CardContent>
              <CardFooter className="p-6 border-t">
                <p className="text-xs text-gray-500">{post.date.toUpperCase()}</p>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((prev) => Math.max(1, prev - 1));
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50 text-gray-700" : "text-gray-900 hover:text-gray-700"}
                  />
                </PaginationItem>
                {/* For simplicity, we'll use a text indicator. You can add page numbers here if needed. */}
                <PaginationItem>
                  <span className="px-4 py-2 text-sm text-blue-700">
                    Page {currentPage} of {totalPages}
                  </span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50 text-gray-700" : "text-gray-900 hover:text-gray-700"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
};