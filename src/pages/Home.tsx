import React from 'react';

import NewStylesSection from '../components/Home/Customer/NewStylesSection';
import SpecialOffersSection from '../components/Home/Customer/SpecialOffersSection';
import OverviewSection from '../components/Home/Employee/OverviewSection';
import RecentProjectsSection from '../components/Home/Employee/RecentProjectsSection';

export default function Home({ user_role }: { user_role: string }) {
  return (
    <div className="flex flex-col gap-10">
      {user_role == 'customer' && (
        <>
          <SpecialOffersSection />
          <NewStylesSection />
        </>
      )}

      {(user_role === 'designer' ||
        user_role === 'producer' ||
        user_role === 'installer') && (
        <>
          <OverviewSection />
          <RecentProjectsSection />
        </>
      )}
    </div>
  );
}
