import { Button, Input } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';

import AuthContext from '../../Context/AuthProvider';
// import axios from '../../scripts/api/axios';
const LOGIN_URL = '/auth';

export default function SignInForm() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useContext must be used within an AuthProvider');
  }

  const { setAuth } = context;
  const userRef = useRef(null);
  const errRef = useRef(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //
  //   try {
  //     const response = await axios.post(
  //       LOGIN_URL,
  //       JSON.stringify({ username, password }),
  //     );
  //     setUsername('');
  //     setPassword('');
  //     console.log(JSON.stringify(response?.data));
  //     const accessToken = response?.data?.access_token;
  //     const roles = response?.data?.roles;
  //     setAuth({ username, password, accessToken, roles });
  //   } catch (error) {
  //     // if(!error?.response){
  //     //   setError('No Response')
  //     //
  //     // }
  //     console.log(error);
  //   }
  //
  //   console.log(username, password);
  // };

  // useEffect(() => {
  //   userRef.current?.focus();
  // }, []);

  useEffect(() => {
    setError('');
  }, [username, password]);

  return (
    <div className="mt-4 flex w-full flex-col items-center">
      <p ref={errRef} aria-live="assertive">
        {error}
      </p>
      <form name="nest-messages"
            // onSubmit={handleSubmit}
            className="w-full">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col gap-5">
            {/*<Form.Item name={['email']} rules={[{ required: true, type: 'email' }]}>*/}
            <Input
              required
              type="email"
              ref={userRef}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              size={'large'}
              placeholder="Email"
              className="w-72 md:w-72 lg:w-80"
            />
            {/*</Form.Item>*/}
            {/*<Form.Item name={['password']} rules={[{ required: true }]}>*/}
            <Input.Password
              autoComplete="on"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size={'large'}
              placeholder="Password"
              className="w-72 md:w-72 lg:w-80"
            />
            {/*</Form.Item>*/}
          </div>
          {/*<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>*/}
          <Button
            size={'large'}
            className="w-72 md:w-72 lg:w-80"
            type="primary"
            htmlType="submit"
          >
            Sign In
          </Button>
          {/*</Form.Item>*/}
        </div>
      </form>
      <div className="my-4 flex w-10/12 items-center">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-3 text-gray-500">OR</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      <Button
        size={'large'}
        className="w-72 bg-white text-neutral-800 md:w-72 lg:w-80"
        htmlType="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        Continue with Google
      </Button>
    </div>
  );
}
