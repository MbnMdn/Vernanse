import './index.css';

import { purple } from '@ant-design/colors';
import { ConfigProvider } from 'antd';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import tailwindColors from '../tailwindColors';
import App from './App';

const rootElement = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: tailwindColors.secondary,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
