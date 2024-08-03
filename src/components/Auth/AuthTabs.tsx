import { Tabs } from 'antd';
import { ConfigProvider } from 'antd';
import React from 'react';

import tailwindColors from '../../../tailwindColors';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function AuthTabs() {
  const items = [
    {
      label: 'Sign In',
      key: '1',
      children: <SignInForm />,
    },
    {
      label: 'Sign Up',
      key: '2',
      children: <SignUpForm />,
    },
  ];

  return (
    <div className="flex h-full flex-col justify-center rounded-2xl ">
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              // itemColor: tailwindColors.tertiary,
              // itemSelectedColor: tailwindColors.ternaryDarker,
              colorBgContainer: tailwindColors.tertiary,
              /* here is your component tokens */
            },
          },
        }}
      >
        <Tabs defaultActiveKey="1" centered items={items} />
      </ConfigProvider>
    </div>
  );
}
