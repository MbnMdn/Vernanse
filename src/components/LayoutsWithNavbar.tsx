import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';

export default function LayoutsWithNavbar() {
  return (
    // <div>
    //   <NavBar />
    //   <Outlet />
    // </div>

    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="mr-4 w-full flex-none md:mt-5 md:w-60">
        <NavBar />
      </div>
      <div className="m-3 flex-grow overflow-y-auto rounded-lg bg-neutral-50 md:p-11">
        <Outlet />
      </div>
    </div>
  );
}
