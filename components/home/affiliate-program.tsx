"use client";

import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AffiliateProgram: FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* --- Full-bleed Background Image --- */}
      <Image
        src="/assets/images/home/affiliate-background.jpg" 
        alt="Lush green coastal landscape"
        fill
        className="object-cover -z-5"
        priority
      />

      {/* --- Semi-transparent Content Panel --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl bg-gray-900/70 backdrop-blur-sm text-yellow-opaque p-8 md:p-12 lg:p-16"
      >
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
            Earn While You Travel – Join Our Affiliate Program
          </h1>

          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-200">
            Are you passionate about travel, culture, and connecting people to Africa and its global influence?
            Turn your passion into profit by joining the Maximum Impact Travel Affiliate Program.
          </p>

          {/* How It Works Section */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              How It Works:
            </h2>
            <ul className="space-y-3 list-disc list-inside text-gray-300">
              <li>
                <span className="font-bold text-white">Earn Commissions</span> – Get paid for referring friends, family, and your network to our unforgettable experiences.
              </li>
              <li>
                <span className="font-bold text-white">Share the Vision</span> – Use your platform, whether social media, a blog, or word-of-mouth, to introduce others to Maximum Impact Travel.
              </li>
              <li>
                <span className="font-bold text-white">Travel with Purpose</span> – Our affiliate program allows you to earn rewards, discounts, and even free trips as you help others discover the beauty of Africa and its worldwide connections.
              </li>
            </ul>
          </div>

          {/* Who It's For Paragraph */}
          <p className="text-lg text-gray-200">
            Whether you’re an influencer, community leader, or just someone who loves sharing great travel experiences, our affiliate program is the perfect way to monetize your love for travel.
          </p>

          {/* Final CTA */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium">
              Your Next Adventure Starts Now
            </h2>
            <p className="mt-2 text-gray-300">
              The world is waiting—let Maximum Impact Travel take you there.{' '}
              <Link href="/join-affiliate" className="font-bold text-white underline hover:text-gray-200 transition-colors">
                Join the Journey & Affiliate Program Now
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AffiliateProgram;