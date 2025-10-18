"use client";

import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Ensure window is defined (for server-side rendering)
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      const listener = () => setMatches(media.matches);
      
      // Initial check
      listener();
      
      // Listen for changes
      media.addEventListener('change', listener);

      // Cleanup listener on component unmount
      return () => media.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
};