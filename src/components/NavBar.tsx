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
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from "react-icons/io";
import { NavLink } from 'react-router-dom';

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
    <div className="flex flex-col justify-between px-3 py-4 md:h-screen  md:pb-11">
      <div className="flex flex-col justify-between md:h-screen">
        <div className="fixed bottom-0 left-0 right-0 flex grow flex-row gap-5 space-x-2 rounded-md md:static md:ml-3 md:flex-col md:space-x-0 md:space-y-1 lg:static">
          <div className="mb-4">
            <Logo />
          </div>
          <div>
            {items.map((item) => (
              <div
                key={item.key}
                className="mb-2 rounded-lg bg-tertiary  text-mainGreen "
              >
                {item.children ? (
                  <>
                    <div
                      // role="presentation"
                      onClick={() => handleOpenChange(item.key)}
                      className={` flex cursor-pointer items-center space-x-2 rounded-lg p-2 ${
                        openKeys.includes(item.key) ? 'bg-tertiary ' : ''
                      }`}
                    >
                      {item.label}
                    </div>
                    {openKeys.includes(item.key) && (
                      <div className="ml-6 mr-2 pb-2">
                        {item.children.map((child) => (
                          <div
                            // role="presentation"
                            key={child.key}
                            onClick={() => handleSelect(child.key, [child.key, item.key])}
                            className={` flex cursor-pointer items-center  space-x-2 rounded-lg p-2 ${
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
                    // role="presentation"
                    onClick={() => handleSelect(item.key, [item.key])}
                    className={`flex cursor-pointer items-center  space-x-2 rounded-lg p-2 ${
                      selectedKeys.includes(item.key) ? ' bg-secondary text-white' : ''
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
  );
};

export default NavBar;
