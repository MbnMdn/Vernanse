import React from 'react';

import NewStylesSection from '../components/Home/Customer/NewStylesSection';
import SpecialOffersSection from '../components/Home/Customer/SpecialOffersSection';
import OverviewSection from '../components/Home/Employee/OverviewSection';
import RecentProjectsSection from '../components/Home/Employee/RecentProjectsSection';

export default function Home({ user_role }: { user_role: string }) {
  return (
    <div className="flex flex-col gap-5">
      {user_role === 'customer' && (
        <>
          <SpecialOffersSection />
          <NewStylesSection />
        </>
      )}

      {user_role === 'designer' && (
        <>
          <OverviewSection />
          <RecentProjectsSection />
        </>
      )}
    </div>
  );
}
