
import React from 'react';
import { Button} from 'antd';

import Progressbar from './Progressbar';

export default function ProjectCard() {
  return (
    <div
      className="flex w-64 flex-col items-center  gap-5  rounded-xl bg-neutral-50 p-10 shadow-sm
       shadow-tertiary hover:shadow-md hover:shadow-tertiary"
    >
      <p>Darman Project</p>
      <Progressbar percent={40}/>
      <Button type="primary">
        Open
      </Button>
    </div>
  );
}
