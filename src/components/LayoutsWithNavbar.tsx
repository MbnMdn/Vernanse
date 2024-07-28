import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';
import Breadcrumbs from "./Breadcrumbs";

export default function LayoutsWithNavbar() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:mt-5 md:w-60">
        <NavBar />
      </div>
      <div className=" m-3 flex-grow overflow-y-auto rounded-xl bg-neutral-200 md:p-10">
        <Breadcrumbs />
        <Outlet />
      </div>
    </div>
  );
}
