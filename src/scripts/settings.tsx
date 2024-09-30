const SERVER = import.meta.env.DEV ? 'http://127.0.0.1' : '';

const ENV = {
  basePath: SERVER,
  apiUrl: `${SERVER}/api/`,
  tokenName: 'vernanse',
};

export { ENV };
