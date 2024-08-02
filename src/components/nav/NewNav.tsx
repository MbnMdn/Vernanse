import { SettingOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosClose, IoIosMenu } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';

import tailwindColors from '../../../tailwindColors';
import ContractFilledIcon from '../../assets/icons/ContractIcon/ContractFilledIcon';
import FinancialFilledIcon from '../../assets/icons/Financial/FinancialFilledIcon';
import HelpFilledIcon from '../../assets/icons/HelpIcon/HelpFilledIcon';
import HomeFilledIcon from '../../assets/icons/HomeIcon/HomeFilledIcon';
import NewProjectFilledIcon from '../../assets/icons/NewProjectIcon/NewProjectFilledIcon';
import PayOutFilledIcon from '../../assets/icons/PayOutIcon/PayOutFilledIcon';
import ProjectsFilledIcon from '../../assets/icons/ProjectsIcon/ProjectsFilledIcon';
import SettingsFilledIcon from '../../assets/icons/SettingsIcon/SettingsFilledIcon';
import SingleServiceFilledIcon from '../../assets/icons/SingleServiceIcon/SingleServiceFilledIcon';
import UserFilledIcon from '../../assets/icons/UserIcon/UserFilledIcon';
import Logo from '../../assets/Logo';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function Sidebar({ show, setter }) {
  const className =
    'w-[250px] bg-mainGreen transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40';
  const appendClass = show ? ' ml-0' : ' ml-[-250px] md:ml-0';

  const items = [
    {
      key: '1',
      label: (
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary' : 'bg-tertiary' + ''
            }`
          }
        >
          <div className="flex items-center gap-1">
            <HomeFilledIcon color={tailwindColors.mainGreen} />
            <span>Home</span>
          </div>
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
              isActive ? ' bg-secondary' : 'bg-tertiary'
            }`
          }
        >
          <div className="flex items-center gap-1">
            <NewProjectFilledIcon color={tailwindColors.mainGreen} />
            <span>New Project</span>
          </div>
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
              isActive ? ' bg-secondary' : 'bg-tertiary'
            }`
          }
        >
          <div className="flex items-center gap-1">
            <SingleServiceFilledIcon color={tailwindColors.mainGreen} />
            <span>Single Service</span>
          </div>
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
              isActive ? ' bg-secondary' : 'bg-tertiary'
            }`
          }
        >
          <div className="flex items-center gap-1">
            <ProjectsFilledIcon color={tailwindColors.mainGreen} />
            <span>Projects</span>
          </div>
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
              isActive ? ' bg-secondary' : 'bg-tertiary'
            }`
          }
        >
          <div className="flex items-center gap-1">
            <ContractFilledIcon color={tailwindColors.mainGreen} />
            <span>Contract</span>
          </div>
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
              isActive ? ' bg-secondary' : 'bg-tertiary'
            }`
          }
        >
          <div className="flex items-center gap-1">
            <FinancialFilledIcon color={tailwindColors.mainGreen} />
            <span>Financial</span>
          </div>
        </NavLink>
      ),
    },
    {
      key: '10',
      label: (
        // <NavLink
        //   to="/account"
        //   className={({ isActive }) =>
        //     `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
        //       isActive ? ' bg-secondary text-tertiary' : 'bg-tertiary'
        //     }`
        //   }
        // >
        //   <div className="flex items-center gap-1">
        //     {/*if the link is active pass true, otherwise pass false*/}
        //     <UserFilledIcon active={} />
        //     <span>Account</span>
        //   </div>
        // </NavLink>
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
              <UserFilledIcon active={isActive} />
              <span>Account</span>
            </div>
          )}
        </NavLink>
      ),
    },
    {
      key: '11',
      label: (
        <NavLink
          to="/help-and-support"
          className={({ isActive }) =>
            `my- mx-3 my-1 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-secondary' : 'bg-tertiary'
            }`
          }
        >
          <div className="flex items-center gap-1">
            <HelpFilledIcon color={tailwindColors.mainGreen} />
            <span>Help And Support</span>
          </div>
        </NavLink>
      ),
    },
  ];

  const ModalOverlay = () => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-30 flex bg-black/50 md:hidden"
      onClick={() => {
        setter((oldVal: any) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="my-3 flex flex-col items-center">
          <Logo />
        </div>
        <div className="flex flex-col">
          {items.map((item) => (
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
