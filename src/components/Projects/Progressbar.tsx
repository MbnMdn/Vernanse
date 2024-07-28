import type { ProgressProps } from 'antd';
import { Progress } from 'antd';
import React from 'react';

export default function Progressbar() {
  const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#108ee9',
    '100%': '#87d068',
  };

  const conicColors: ProgressProps['strokeColor'] = {
    '0%': '#87d068',
    '50%': '#ffe58f',
    '100%': '#ffccc7',
  };
  return <Progress type="dashboard" percent={90} strokeColor={twoColors} />;
}
