'use client';
import { Star, StarHalf } from 'lucide-react';
import React from 'react';

type StarRatingProps = {
  rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<Star key={i} fill="#fff" stroke="#fff" size={25} className='p-1 bg-[#00b67a] text-white' />);
    } else if (rating >= i - 0.5) {
      stars.push(<StarHalf key={i} fill="#fff" stroke="#fff" size={14} />);
    } else {
      stars.push(<Star key={i} fill="none" color='#fff' stroke="#fff" size={14} />);
    }
  }

  return (
    <div className="p-2 flex items-center gap-1">
      {stars}
    </div>
  );
};

export default StarRating;
