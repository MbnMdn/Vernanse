import { NavLink } from 'react-router-dom';

import ContractFilledIcon from '../assets/icons/ContractIcon/ContractFilledIcon';
import ContractIcon from '../assets/icons/ContractIcon/ContractIcon';
import FinancialFilledIcon from '../assets/icons/Financial/FinancialFilledIcon';
import FinancialIcon from '../assets/icons/Financial/FinancialIcon';
import HomeFilledIcon from '../assets/icons/HomeIcon/HomeFilledIcon';
import HomeIcon from '../assets/icons/HomeIcon/HomeIcon';
import NewProjectFilledIcon from '../assets/icons/NewProjectIcon/NewProjectFilledIcon';
import NewProjectIcon from '../assets/icons/NewProjectIcon/NewProjectIcon';
import ProjectsFilledIcon from '../assets/icons/ProjectsIcon/ProjectsFilledIcon';
import ProjectsIcon from '../assets/icons/ProjectsIcon/ProjectsIcon';
import SingleServiceFilledIcon from '../assets/icons/SingleServiceIcon/SingleServiceFilledIcon';
import SingleServiceIcon from '../assets/icons/SingleServiceIcon/SingleServiceIcon';
import tailwindColors from '../../tailwindColors';

export default function NavLinks() {
  const activeColor = '#323232';

  return (
    <nav className="text-tertiary">
      <ul className="flex flex-col gap-3">
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) => {
              return {
                color: isActive ? activeColor : '',
              };
            }}
          >
            <span className="flex">
              <HomeIcon />
              <HomeFilledIcon />
              Home
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new-project"
            style={({ isActive }) => {
              return {
                color: isActive ? activeColor : '',
              };
            }}
          >
            <span className="flex">
              <NewProjectIcon />
              <NewProjectFilledIcon />
              New Project
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/single-service"
            style={({ isActive }) => {
              return {
                color: isActive ? activeColor : '',
              };
            }}
          >
            <span className="flex">
              <SingleServiceIcon />
              <SingleServiceFilledIcon />
              Single Service
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={({ isActive }) => {
              return {
                color: isActive ? activeColor : '',
              };
            }}
          >
            <span className="flex">
              <ProjectsIcon />
              <ProjectsFilledIcon />
              Projects
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contract"
            style={({ isActive }) => {
              return {
                color: isActive ? activeColor : '',
              };
            }}
          >
            <span className="flex">
              <ContractIcon />
              <ContractFilledIcon />
              Contract
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/financial"
            style={({ isActive }) => {
              return {
                color: isActive ? activeColor : '',
              };
            }}
          >
            <span className="flex">
              <FinancialIcon />
              <FinancialFilledIcon />
              Financial
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
