import { Outlet } from 'react-router-dom';

import Breadcrumbs from './Breadcrumbs';
import NavBar from './NavBar';

export default function LayoutsWithNavbar() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:mt-5 md:w-60">
        <NavBar />
      </div>
      <div className=" m-4 flex-grow overflow-y-auto rounded-3xl bg-neutral-100 md:p-10">
        <Breadcrumbs />
        <div className="my-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
