import React from 'react';
import { NavLink } from 'react-router-dom';

import tailwindColors from '../../../tailwindColors';
import AboutFilledIcon from '../../assets/icons/AboutIcon/AboutFilledIcon';
import ContractFilledIcon from '../../assets/icons/ContractIcon/ContractFilledIcon';
import FinancialFilledIcon from '../../assets/icons/Financial/FinancialFilledIcon';
import HelpFilledIcon from '../../assets/icons/HelpIcon/HelpFilledIcon';
import HomeFilledIcon from '../../assets/icons/HomeIcon/HomeFilledIcon';
import LogOutIcon from '../../assets/icons/LogOutIcon/LogOutIcon';
import NewProjectFilledIcon from '../../assets/icons/NewProjectIcon/NewProjectFilledIcon';
import PortfolioFilledIcon from '../../assets/icons/PortfolioIcon/PortfolioFilledIcon';
import ProjectsFilledIcon from '../../assets/icons/ProjectsIcon/ProjectsFilledIcon';
import RequestFilledIcon from '../../assets/icons/RequestIcon/RequestFilledIcon';
import SingleServiceFilledIcon from '../../assets/icons/SingleServiceIcon/SingleServiceFilledIcon';
import UserFilledIcon from '../../assets/icons/UserIcon/UserFilledIcon';
import Logo from '../../assets/Logo';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function Sidebar({ show, setter, showSidebar, user_role }) {
  const className =
    'w-[250px] bg-mainGreen transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40';
  const appendClass = show ? ' ml-0' : ' ml-[-250px] md:ml-0';

  const CustomerNavLinks = [
    {
      key: '1',
      label: (
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <HomeFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Home</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '2',
      label: (
        <NavLink
          to="/new-project"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <NewProjectFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>New Project</span>
            </div>
          )}
        </NavLink>
      ),
    },

    {
      key: '3',
      label: (
        <NavLink
          to="/single-service/"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <SingleServiceFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Single Service</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '4',
      label: (
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <ProjectsFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Projects</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '5',
      label: (
        <NavLink
          to="/contract"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <ContractFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Contract</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '6',
      label: (
        <NavLink
          to="/financial"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <FinancialFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Financial</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '7',
      label: (
        <NavLink
          to="/account"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center rounded-lg p-3 ${
              isActive ? 'bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <UserFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Account</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '8',
      label: (
        <NavLink
          to="/help-and-support"
          className={({ isActive }) =>
            `my- mx-3 my-1 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <HelpFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Help And Support</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '9',
      label: (
        <NavLink
          to="/auth"
          className={({ isActive }) =>
            `my- mx-3 my-1 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <LogOutIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Log Out</span>
            </div>
          )}
        </NavLink>
      ),
    },
  ];

  const DesignerAndInstallerNavLinks = [
    {
      key: '1',
      label: (
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <HomeFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Home</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '2',
      label: (
        <NavLink
          to="/single-service/"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <SingleServiceFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Single Service</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '3',
      label: (
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <ProjectsFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Projects</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '4',
      label: (
        <NavLink
          to="/requests"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <RequestFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Requests</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '5',
      label: (
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <PortfolioFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Portfolio</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '6',
      label: (
        <NavLink
          to="/contract"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center rounded-lg p-3 ${
              isActive ? 'bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <ContractFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Contract</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '7',
      label: (
        <NavLink
          to="/financial"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center rounded-lg p-3 ${
              isActive ? 'bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <FinancialFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Financial</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '8',
      label: (
        <NavLink
          to="/account"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center rounded-lg p-3 ${
              isActive ? 'bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <UserFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Account</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '9',
      label: (
        <NavLink
          to="/help-and-support"
          className={({ isActive }) =>
            `my- mx-3 my-1 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <HelpFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Help And Support</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '10',
      label: (
        <NavLink
          to="/auth"
          className={({ isActive }) =>
            `my- mx-3 my-1 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <LogOutIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Log Out</span>
            </div>
          )}
        </NavLink>
      ),
    },
  ];

  const ProducerNavLinks = [
    {
      key: '1',
      label: (
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <HomeFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Home</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '2',
      label: (
        <NavLink
          to="/single-service/"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <SingleServiceFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Single Service</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '3',
      label: (
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <ProjectsFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Projects</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '4',
      label: (
        <NavLink
          to="/requests"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <RequestFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Requests</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '5',
      label: (
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <AboutFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>About</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '6',
      label: (
        <NavLink
          to="/contract"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center rounded-lg p-3 ${
              isActive ? 'bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <ContractFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Contract</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '7',
      label: (
        <NavLink
          to="/financial"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center rounded-lg p-3 ${
              isActive ? 'bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <FinancialFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Financial</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '8',
      label: (
        <NavLink
          to="/account"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center rounded-lg p-3 ${
              isActive ? 'bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <UserFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Account</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '9',
      label: (
        <NavLink
          to="/help-and-support"
          className={({ isActive }) =>
            `my- mx-3 my-1 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <HelpFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Help And Support</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '10',
      label: (
        <NavLink
          to="/auth"
          className={({ isActive }) =>
            `my- mx-3 my-1 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <LogOutIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Log Out</span>
            </div>
          )}
        </NavLink>
      ),
    },
  ];

  const AdminNavLinks = [
    {
      key: '1',
      label: (
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <HomeFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Home</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '2',
      label: (
        <NavLink
          to="/user-management/"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <HomeFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>User Management</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '4',
      label: (
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <RequestFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Projects</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '5',
      label: (
        <NavLink
          to="/customer-service"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <AboutFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Customer Service</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '6',
      label: (
        <NavLink
          to="/offers"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center rounded-lg p-3 ${
              isActive ? 'bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <ContractFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Offers</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '7',
      label: (
        <NavLink
          to="/design-styles"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center rounded-lg p-3 ${
              isActive ? 'bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <HomeFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Design Styles</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '8',
      label: (
        <NavLink
          to="/contract"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center rounded-lg p-3 ${
              isActive ? 'bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <ContractFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Contract</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '9',
      label: (
        <NavLink
          to="/financial"
          className={({ isActive }) =>
            `my- mx-3 my-1 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <FinancialFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Financial</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '11',
      label: (
        <NavLink
          to="/price-and-material"
          className={({ isActive }) =>
            `my- mx-3 my-1 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <FinancialFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>Price And Material</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '12',
      label: (
        <NavLink
          to="/general-settings"
          className={({ isActive }) =>
            `my- mx-3 my-1 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              <FinancialFilledIcon
                isActive={isActive}
                activeColor={tailwindColors.tertiary}
                notActiveColor={tailwindColors.mainGreen}
              />
              <span>General Settings</span>
            </div>
          )}
        </NavLink>
      ),
    },
  ];

  const ModalOverlay = () => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-30 flex bg-black/50 md:hidden"
      onClick={() => {
        setter((oldVal: boolean) => !oldVal);
      }}
    />
  );

  // const navLinks =
  //   user_role === 'designer' || user_role === 'installer'
  //     ? DesignerAndInstallerNavLinks
  //       ? user_role === 'producer'
  //       : ProducerNavLinks
  //     : CustomerNavLinks;

  const navLinks =
    user_role === 'designer' || user_role === 'installer'
      ? DesignerAndInstallerNavLinks
      : user_role === 'producer'
      ? ProducerNavLinks
      : user_role === 'customer'
      ? CustomerNavLinks
      : AdminNavLinks;

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="my-3 flex flex-col items-center">
          {/*{showSidebar ? <div></div> : <Logo />}*/}
          <Logo />
        </div>
        <div className="flex flex-col">
          {navLinks.map((item) => (
            <div key={item.key} className="text-mainGreen">
              {item.label}
            </div>
          ))}
        </div>
      </div>
      {show ? <ModalOverlay /> : null}
    </>
  );
}
