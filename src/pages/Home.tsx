import React from 'react';

import NewStylesSection from '../components/Home/NewStylesSection';
import SpecialOffersSection from '../components/Home/SpecialOffersSection';

export default function Home() {
  return (
    <div className="flex h-full flex-col gap-5">
      <SpecialOffersSection />
      <NewStylesSection />
    </div>
  );
}
