"use client";

import { motion, Variants } from "framer-motion";
import type { FC } from "react";

interface AnimatedHamburgerIconProps {
  isOpen: boolean;
  className?: string;
}

const lineVariants: Variants = {
  closed: { rotate: 0, y: 0 },
  open: {},
};

const top_line_variants: Variants = { ...lineVariants, open: { rotate: 45, y: 7 } };
const middle_line_variants: Variants = { closed: { opacity: 1 }, open: { opacity: 0 } };
const bottom_line_variants: Variants = { ...lineVariants, open: { rotate: -45, y: -7 } };

const AnimatedHamburgerIcon: FC<AnimatedHamburgerIconProps> = ({ isOpen, className }) => {
  const lineProps = {
    className: "w-6 h-0.5",
    initial: "closed",
    animate: isOpen ? "open" : "closed",
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  };

  return (
    <div className={`relative w-6 h-5  ${className}`}>
      <motion.div {...lineProps} variants={top_line_variants} style={{ top: 0 }} className="absolute text-black" />
      <motion.div {...lineProps} variants={middle_line_variants} style={{ top: 7 }} className="absolute text-black" />
      <motion.div {...lineProps} variants={bottom_line_variants} style={{ top: 14 }} className="absolute text-black" />
    </div>
  );
};

export default AnimatedHamburgerIcon;