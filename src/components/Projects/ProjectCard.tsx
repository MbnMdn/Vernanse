import { Button, Tooltip } from 'antd';
import React from 'react';
import { LuInfo } from 'react-icons/lu';

import tailwindColors from '../../../tailwindColors';
import Progressbar from './Progressbar';

export default function ProjectCard() {
  return (
    <div
      className="flex w-64 flex-col items-center  gap-4  rounded-xl bg-neutral-50 p-10 shadow-sm
       shadow-tertiary hover:shadow-md hover:shadow-tertiary"
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1">
          <span>Darman Project</span>
          <Tooltip title="design in progress">
            <LuInfo color={tailwindColors.lightGrey} />
          </Tooltip>
        </div>
        <span className="text-sm text-lightGrey">install</span>
      </div>

      <Progressbar percent={40} />

      <Button type="primary">Open</Button>
    </div>
  );
}
