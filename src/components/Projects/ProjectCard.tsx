import { Button } from 'antd';
import React from 'react';

import Progressbar from './Progressbar';

export default function ProjectCard() {
  return (
    <div
      className="flex w-1/4 flex-col items-center  gap-5  rounded-xl bg-neutral-50 p-10 shadow-sm
       shadow-tertiary hover:shadow-md hover:shadow-tertiary"
    >
      <p>Darman Project</p>
      <Progressbar />
      <Button type="primary" className="bg-tertiary">
        Open
      </Button>
    </div>
  );
}
