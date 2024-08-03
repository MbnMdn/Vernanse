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
    <div className=" flex h-full flex-col justify-center rounded-2xl border-4 border-mainGreen border-double md:border-none">
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              colorBgContainer: tailwindColors.tertiary,
            },
          },
        }}
      >
        <Tabs defaultActiveKey="1" centered items={items} />
      </ConfigProvider>
    </div>
  );
}
