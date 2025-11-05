"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PricingPackage } from "@/data/tour-dates";

type PackageCardProps = {
  packageData: PricingPackage;
};

export function PackageCard({ packageData }: PackageCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncateLength = 100;

  // --- Calculations ---
  const hasDiscount = packageData.originalPrice && packageData.originalPrice > packageData.price;
  let discountPercent = 0;
  if (hasDiscount) {
    discountPercent = ((packageData.originalPrice! - packageData.price) / packageData.originalPrice!) * 100;
  }

  // --- Formatting ---
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const isTruncatable = packageData.description.length > truncateLength;
  const displayText = isExpanded || !isTruncatable
      ? packageData.description
      : `${packageData.description.slice(0, truncateLength)}...`;

  return (
    <div className="border bg-white rounded-lg p-6 shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        {/* Left side: Details */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{packageData.title}</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            Total: {formatCurrency(packageData.price)}
          </p>
          {hasDiscount && (
            <div className="flex items-center gap-2 text-sm mt-1">
              <span className="text-gray-500 line-through">
                {formatCurrency(packageData.originalPrice!)}
              </span>
              <span className="text-red-600 font-semibold">
                ({discountPercent.toFixed(2)}% off)
              </span>
            </div>
          )}
          <p className="text-gray-600 mt-4">{displayText}</p>
          {isTruncatable && (
             <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-custom-gold font-semibold hover:underline text-sm"
              >
                {isExpanded ? "Read Less" : "Read More"}
             </button>
          )}
        </div>
        {/* Right side: Button */}
        <div className="w-full sm:w-auto flex-shrink-0">
          <Button asChild className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
            <Link href={packageData.buttonLink}>{packageData.buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}