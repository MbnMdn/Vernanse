import { Button } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';

import SelectedStyleSection from './SelectedStyleSection';
import OpenEditDetailsModalButton from "./OpenEditDetailsModalButton";

export default function EmployeeProjectInfoSection({ user_role }: { user_role: string }) {
  const { id } = useParams();
  // <div>Project {id}</div>

  return (
    <div className="flex flex-col gap-5 md:gap-3">
      <div className="flex flex-col gap-5 md:gap-3">
        <div className="flex flex-col items-start justify-between gap-3 lg:flex-row lg:items-center">
          <p className="text-2xl font-semibold text-darkGreen">Darman Project</p>
          <div className="flex gap-3">
            <OpenEditDetailsModalButton />
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-10">
          <div className="flex gap-2">
            <span className="font-medium">
              {user_role === 'designer' ? 'Design Cost:' : 'Estimated Cost:'}
            </span>
            <span className="text-lightGrey">350$</span>
          </div>

          <div className="flex gap-2">
            <span className="font-medium">Status:</span>
            <span className="text-lightGrey">Design completed / Select producer</span>
          </div>

          <div className="flex gap-2">
            <span className="font-medium">Start Date:</span>
            <span className="text-lightGrey">21/02/2024</span>
          </div>

          <div className="flex gap-2">
            <span className="font-medium">Deadline:</span>
            <span className="text-lightGrey">21/02/2024</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:flex-row lg:gap-10">
          <div className="flex gap-2">
            <span className="font-medium">Customer:</span>
            <span className="text-lightGrey">Jack Norman</span>
          </div>

          <div className="flex gap-2">
            <span className="font-medium">Address:</span>
            <span className="text-lightGrey">New York No. 1 Lake Park</span>
          </div>

          <div className="flex gap-2">
            <span className="font-medium">Phone Number:</span>
            <span className="text-lightGrey">+1245312545</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-medium">Description:</span>
          <span className="text-justify text-lightGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
    </div>
  );
}
