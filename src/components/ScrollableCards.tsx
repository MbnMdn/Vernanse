import React, { useRef } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import StyleCard from './Home/StyleCard';

export default function ScrollableCards({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="scrollbar-hide relative flex items-center">
      <button onClick={scrollLeft} className="absolute -left-10 z-10 rounded-full p-2">
        <HiOutlineChevronLeft size={24} />
      </button>
      <div
        ref={scrollRef}
        className="scrollbar-hide flex space-x-4 overflow-x-auto "
        style={{ scrollBehavior: 'smooth' }}
      >
        {children}
        {children}
        {children}
        {children}
        {children}
      </div>
      <button onClick={scrollRight} className="absolute -right-10 z-10 rounded-full p-2">
        <HiOutlineChevronRight size={24} />
      </button>
    </div>
  );
}
