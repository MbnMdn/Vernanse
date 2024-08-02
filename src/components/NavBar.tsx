// export default function NavBar() {
//   return (
//     <div>
//       <div className="flex flex-col justify-between px-3 py-4 md:h-screen md:px-4 md:pb-11 ">
//         <div className="flex flex-col justify-between md:h-screen">
//           <div className="fixed bottom-0 left-0 right-0 flex grow flex-row gap-5 space-x-2 rounded-md md:static md:ml-3 md:flex-col  md:space-x-0 md:space-y-1  lg:static">
//             <Logo />
//             <NavLinks />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//
//

import { SettingOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosClose, IoIosMenu } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';

import tailwindColors from '../../tailwindColors';
import ContractFilledIcon from '../assets/icons/ContractIcon/ContractFilledIcon';
import FinancialFilledIcon from '../assets/icons/Financial/FinancialFilledIcon';
import HelpFilledIcon from '../assets/icons/HelpIcon/HelpFilledIcon';
import HomeFilledIcon from '../assets/icons/HomeIcon/HomeFilledIcon';
import NewProjectFilledIcon from '../assets/icons/NewProjectIcon/NewProjectFilledIcon';
import PayOutFilledIcon from '../assets/icons/PayOutIcon/PayOutFilledIcon';
import ProjectsFilledIcon from '../assets/icons/ProjectsIcon/ProjectsFilledIcon';
import SettingsFilledIcon from '../assets/icons/SettingsIcon/SettingsFilledIcon';
import SingleServiceFilledIcon from '../assets/icons/SingleServiceIcon/SingleServiceFilledIcon';
import UserFilledIcon from '../assets/icons/UserIcon/UserFilledIcon';
import Logo from '../assets/Logo';

const activeColor = '#345';

const items = [
  {
    key: '1',
    label: (
      <NavLink to="/" className="flex items-center space-x-2">
        {/*<HomeIcon />*/}
        <HomeFilledIcon color={tailwindColors.mainGreen} />
        <span>Home</span>
      </NavLink>
    ),
  },
  {
    key: '2',
    label: (
      <NavLink
        to="/new-project"
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? ' ' : ''}`}
      >
        {/*<NewProjectIcon />*/}
        <NewProjectFilledIcon color={tailwindColors.mainGreen} />
        <span>New Project</span>
      </NavLink>
    ),
  },
  {
    key: 'sub1',
    label: (
      <div className="flex w-full cursor-pointer  justify-between">
        <div className="flex flex-row items-center space-x-2">
          <SingleServiceFilledIcon color={tailwindColors.mainGreen} />
          <span>Single Service</span>
        </div>
        <div className="flex flex-row place-content-between content-between items-center justify-between">
          <IoIosArrowDown />
        </div>
      </div>
    ),
    children: [
      {
        key: '3',
        label: (
          <NavLink
            to="/single-service/measure"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${isActive ? ' ' : ''}`
            }
          >
            {/*<FinancialIcon />*/}
            {/*<FinancialFilledIcon color={tailwindColors.mainGreen} />*/}
            <span>Measure</span>
          </NavLink>
        ),
      },
      {
        key: '4',
        label: (
          <NavLink
            to="/single-service/design"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${isActive ? ' ' : ''}`
            }
          >
            {/*<FinancialIcon />*/}
            {/*<FinancialFilledIcon color={tailwindColors.mainGreen} />*/}
            <span>Design</span>
          </NavLink>
        ),
      },
      {
        key: '5',
        label: (
          <NavLink
            to="/single-service/install"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${isActive ? ' ' : ''}`
            }
          >
            {/*<FinancialIcon />*/}
            {/*<FinancialFilledIcon color={tailwindColors.mainGreen} />*/}
            <span>Install</span>
          </NavLink>
        ),
      },
      {
        key: '6',
        label: (
          <NavLink
            to="/single-service/produce"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${isActive ? ' ' : ''}`
            }
          >
            {/*<FinancialIcon />*/}
            {/*<FinancialFilledIcon color={tailwindColors.mainGreen} />*/}
            <span>Produce</span>
          </NavLink>
        ),
      },
    ],
  },
  {
    key: '7',
    label: (
      <NavLink
        to="/projects"
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? ' ' : ''}`}
      >
        {/*<ProjectsIcon />*/}
        <ProjectsFilledIcon color={tailwindColors.mainGreen} />
        <span>Projects</span>
      </NavLink>
    ),
  },
  {
    key: '8',
    label: (
      <NavLink
        to="/contract"
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? ' ' : ''}`}
      >
        {/*<ContractIcon />*/}
        <ContractFilledIcon color={tailwindColors.mainGreen} />
        <span>Contract</span>
      </NavLink>
    ),
  },
  {
    key: '9',
    label: (
      <NavLink
        to="/financial"
        className={({ isActive }) => `flex items-center space-x-2 ${isActive ? ' ' : ''}`}
      >
        <FinancialFilledIcon color={tailwindColors.mainGreen} />
        <span>Financial</span>
      </NavLink>
    ),
  },
  {
    key: 'sub2',
    label: (
      <div className="flex w-full cursor-pointer  justify-between">
        <div className="flex flex-row items-center space-x-2">
          <SettingsFilledIcon color={tailwindColors.mainGreen} />
          <span>Settings</span>
        </div>
        <div className="flex flex-row place-content-between content-between items-center justify-between">
          <IoIosArrowDown />
        </div>
      </div>
    ),
    children: [
      {
        key: '10',
        label: (
          <NavLink
            to="/account"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${isActive ? ' ' : ''}`
            }
          >
            {/*<FinancialIcon />*/}
            {/*<UserFilledIcon color={tailwindColors.mainGreen} />*/}
            <span>Account</span>
          </NavLink>
        ),
      },
      {
        key: '11',
        label: (
          <NavLink
            to="/halp-and-support"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${isActive ? ' ' : ''}`
            }
          >
            {/*<FinancialIcon />*/}
            {/*<HelpFilledIcon color={tailwindColors.mainGreen} />*/}
            <span>Help And Support</span>
          </NavLink>
        ),
      },
      {
        key: '12',
        label: (
          <NavLink
            to="/payout-prefrences"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${isActive ? ' ' : ''}`
            }
          >
            {/*<PayOutFilledIcon color={tailwindColors.mainGreen} />*/}
            <span>Payout Preferences</span>
          </NavLink>
        ),
      },
    ],
  },
];

const NavBar = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['1']);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = items.find((item) =>
      item.children
        ? item.children.some((child) => child.label.props.to === currentPath)
        : item.label.props.to === currentPath,
    );
    if (currentItem) {
      setSelectedKeys([currentItem.key]);
      if (currentItem.children) {
        setOpenKeys([currentItem.key]);
      }
    }
  }, [location]);

  const handleOpenChange = (key: string) => {
    setOpenKeys((prevOpenKeys) =>
      prevOpenKeys.includes(key) ? prevOpenKeys.filter((k) => k !== key) : [key],
    );
  };

  const handleSelect = (key: string, keyPath: string[]) => {
    setSelectedKeys([key]);
    if (keyPath.length > 1) {
      setOpenKeys([keyPath[1]]);
    } else {
      setOpenKeys([]);
    }
  };

  return (
    <div className="relative ">
      <div className="md:hidden flex justify-between items-center p-4 bg-tertiary">
        <Logo />
        <button onClick={() => setIsNavVisible(!isNavVisible)}>
          <IoIosMenu size={24} />
        </button>
      </div>
      <div
        className={`${
          isNavVisible ? 'block' : 'hidden'
        } md:flex flex-col justify-between px-3 py-4 md:h-screen md:pb-11`}
      >
        <div className="flex flex-col justify-between md:h-screen ">
          <div className="fixed bg-red-900 z-50 flex grow flex-row gap-5 space-x-2 rounded-md md:static md:ml-3 md:flex-col md:space-x-0 md:space-y-1 lg:static">
            <div className="mb-4 hidden md:block">
              <Logo />
            </div>
            <div>
              {items.map((item) => (
                <div key={item.key} className="mb-2 rounded-lg bg-tertiary text-mainGreen">
                  {item.children ? (
                    <>
                      <div
                        onClick={() => handleOpenChange(item.key)}
                        className={`flex cursor-pointer items-center space-x-2 rounded-lg p-2 ${
                          openKeys.includes(item.key) ? 'bg-tertiary' : ''
                        }`}
                      >
                        {item.label}
                      </div>
                      {openKeys.includes(item.key) && (
                        <div className="ml-6 mr-2 pb-2">
                          {item.children.map((child) => (
                            <div
                              key={child.key}
                              onClick={() => handleSelect(child.key, [child.key, item.key])}
                              className={`flex cursor-pointer items-center space-x-2 rounded-lg p-2 ${
                                selectedKeys.includes(child.key)
                                  ? 'bg-secondary text-white'
                                  : ''
                              }`}
                            >
                              {child.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div
                      onClick={() => handleSelect(item.key, [item.key])}
                      className={`flex cursor-pointer items-center space-x-2 rounded-lg p-2 ${
                        selectedKeys.includes(item.key) ? 'bg-secondary text-white' : ''
                      }`}
                    >
                      {item.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="">
    //   {/* navbar */}
    //   <div className="flex  justify-between bg-red-900 px-5 py-6 text-neutral-300 lg:px-64">
    //     <span className="text-lg font-semibold">Material3</span>
    //
    //     {/*<ul className="hidden items-center space-x-5 md:flex">*/}
    //     {/*  <li>About</li>*/}
    //     {/*  <li>Contact</li>*/}
    //     {/*  <li>Sevice</li>*/}
    //     {/*  <li>Help</li>*/}
    //     {/*</ul>*/}
    //
    //     {/* hamburger menu */}
    //     <button className="group space-y-1 md:hidden">
    //       <div className="h-1 w-6 bg-white"></div>
    //       <div className="h-1 w-6 bg-white"></div>
    //       <div className="h-1 w-6 bg-white"></div>
    //
    //       {/* menu */}
    //       <ul className="absolute -top-full right-0 flex w-screen flex-col justify-end space-y-3 bg-[#252525] pb-10 duration-500 group-focus:top-0">
    //         <button className="relative ml-auto px-10 py-8">
    //           <div className="absolute h-1 w-6 rotate-45 bg-white"></div>
    //           <div className="absolute h-1 w-6 -rotate-45 bg-white"></div>
    //         </button>
    //         <li className="flex w-full justify-center py-4 hover:bg-[#202020]">About</li>
    //         <li className="flex w-full justify-center py-4 hover:bg-[#202020]">
    //           Contact
    //         </li>
    //         <li className="flex w-full justify-center py-4 hover:bg-[#202020]">Sevice</li>
    //         <li className="flex w-full justify-center py-4 hover:bg-[#202020]">Help</li>
    //       </ul>
    //     </button>
    //   </div>
    // </div>
  );
};

export default NavBar;

//
// import React, { useState } from 'react';
//
// export default function NavBar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//
//   return (
//     <div className="w-full flex-col md:flex md:min-h-screen md:flex-row">
//       <div
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//         className="flex w-full flex-shrink-0 flex-col bg-white text-gray-700 md:w-64 dark:bg-gray-800 dark:text-gray-200"
//       >
//         <div className="flex flex-shrink-0 flex-row items-center justify-between px-8 py-4">
//           <a
//             href="#"
//             className="focus:shadow-outline rounded-lg text-lg font-semibold uppercase tracking-widest text-gray-900 focus:outline-none dark:text-white"
//           >
//             Flowtrail UI
//           </a>
//           <button
//             className="focus:shadow-outline rounded-lg rounded-lg focus:outline-none md:hidden"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//           >
//             <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
//               <path
//                 className={!sidebarOpen ? '' : 'hidden'}
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               ></path>
//               <path
//                 className={sidebarOpen ? '' : 'hidden'}
//                 fillRule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <nav
//           className={`flex-grow px-4 pb-4 md:block md:overflow-y-auto md:pb-0 ${
//             sidebarOpen ? 'block' : 'hidden'
//           }`}
//         >
//           <a
//             className="focus:shadow-outline mt-2 block rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
//             href="#"
//           >
//             Blog
//           </a>
//           <a
//             className="focus:shadow-outline mt-2 block rounded-lg bg-transparent px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
//             href="#"
//           >
//             Portfolio
//           </a>
//           <a
//             className="focus:shadow-outline mt-2 block rounded-lg bg-transparent px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
//             href="#"
//           >
//             About
//           </a>
//           <a
//             className="focus:shadow-outline mt-2 block rounded-lg bg-transparent px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
//             href="#"
//           >
//             Contact
//           </a>
//           <div onClick={() => setDropdownOpen(!dropdownOpen)} className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="focus:shadow-outline mt-2 flex w-full flex-row items-center rounded-lg bg-transparent px-4 py-2 text-left text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:block dark:bg-transparent dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
//             >
//               <span>Dropdown</span>
//               <svg
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 className={`ml-1 mt-1 inline h-4 w-4 transform transition-transform duration-200 md:-mt-1 ${
//                   dropdownOpen ? 'rotate-180' : 'rotate-0'
//                 }`}
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-full origin-top-right rounded-md shadow-lg">
//                 <div className="rounded-md bg-white px-2 py-2 shadow dark:bg-gray-800">
//                   <a
//                     className="focus:shadow-outline mt-2 block rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0 dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
//                     href="#"
//                   >
//                     Link #1
//                   </a>
//                   <a
//                     className="focus:shadow-outline mt-2 block rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0 dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
//                     href="#"
//                   >
//                     Link #2
//                   </a>
//                   <a
//                     className="focus:shadow-outline mt-2 block rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0 dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
//                     href="#"
//                   >
//                     Link #3
//                   </a>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }
