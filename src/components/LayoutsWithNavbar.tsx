import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Breadcrumbs from './Breadcrumbs';
import MenuBarMobile from './SideBar/MenuBarMobile';
import NewNav from './SideBar/SideBar';

export default function LayoutsWithNavbar() {
  // Mobile sidebar visibility state
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:mt-5 md:w-60">
        <MenuBarMobile setter={setShowSidebar} />
        <NewNav show={showSidebar} setter={setShowSidebar} showSidebar={showSidebar} />
      </div>
      <div className=" m-4 flex-grow overflow-y-auto rounded-3xl bg-neutral-100 p-10">
        <Breadcrumbs />
        <div className=" my-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
