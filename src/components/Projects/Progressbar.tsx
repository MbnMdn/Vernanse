import type { ProgressProps } from 'antd';
import { Progress } from 'antd';
import React from 'react';

import tailwindColors from '../../../tailwindColors';

export default function Progressbar({ percent }: { percent: number }) {
  return (
    <Progress type="circle" percent={percent} strokeColor={tailwindColors.mainGreen} />
  );
}
