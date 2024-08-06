import { Button, Tooltip } from 'antd';
import React from 'react';
import { LuInfo } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import tailwindColors from '../../../tailwindColors';
import Progressbar from './Progressbar';

export default function ProjectCard() {
  return (
    <div
      className="flex w-64 min-w-[250px] flex-col items-center  gap-4 rounded-xl border-2
       border-mainGreen bg-neutral-50 p-10 hover:shadow-sm hover:shadow-mainGreen"
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

      <Link to={'/projects/2'}>
        <Button type="primary">Open</Button>
      </Link>
    </div>
  );
}
