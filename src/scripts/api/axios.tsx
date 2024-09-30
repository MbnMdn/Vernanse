import { message } from 'antd';
import axios from 'axios';

import { ENV } from '../settings';

const delCookie = (name: string, domain: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/;`;
};

const getCookie = (name: string) => {
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  name = `${name}=`;

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

const setCookie = (name: string, domain: string, value: any, days: number) => {
  const d = new Date();

  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);

  const expires = 'expires=' + d.toUTCString();

  document.cookie = `${name}=${value}; ${expires}; domain=${domain}; path=/`;
};

const api = axios.create({
  baseURL: ENV.apiUrl,
  headers: { accept: 'application/json' },
});

const _delCookie = () => delCookie(ENV.tokenName, location.hostname);
const _getCookie = () => getCookie(ENV.tokenName);
const _setCookie = (token: string, days: number) =>
  setCookie(ENV.tokenName, location.hostname, token, days);

// api.interceptors.request.use(
//   (config) => {
//     const token = _getCookie();
//
//     if (token) {
//       config.headers = {
//         ...config.headers,
//         Authorization: `Bearer ${token}`,
//         // 'Accept-Language': document.documentElement.lang,
//       };
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error.response);
//   },
// );

api.interceptors.request.use(
  (config) => {
    const token = _getCookie();

    if (token) {
      if (config.headers) {
        config.headers.set('Authorization', `Bearer ${token}`);
      } else {
        config.headers = new axios.AxiosHeaders();
        config.headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  },
);

api.interceptors.response.use(
  ({ config, data }) => {
    if (data?.message) message.success(data?.message);

    if (!isNaN(data?.count)) {
      data.pagination = {
        current: config?.params?.page,
        pageSize: config?.params?.pageSize,
        total: data?.count,
        showSizeChanger: false,
      };
    }
    return data;
  },
  ({ response: { data, status } }) => {
    if (data?.message) message.error(data?.message);

    switch (status) {
      case 401:
        //window.location.href = paths.auth.login;
        break;
      case 403:
        _delCookie();

        location.href = '/auth';
        break;
      default:
        break;
    }

    return Promise.reject(data);
  },
);
