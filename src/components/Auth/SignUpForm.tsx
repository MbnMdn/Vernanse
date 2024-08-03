import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
// https://www.npmjs.com/package/react-password-strength-bar -> Password Strength Package
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const onFinish = (values: never) => {
  console.log(values);
};

export default function SignInForm() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex w-full flex-col items-center">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        className="w-full"
        validateMessages={validateMessages}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            <Form.Item name={['email']} rules={[{ required: true, type: 'email' }]}>
              <Input size={"large"} placeholder="Email" className="w-72 md:w-72 lg:w-80" />
            </Form.Item>
            <Form.Item name={['password']} rules={[{ required: true }]}>
              <Input.Password
                size={"large"}
                placeholder="Password"
                className="mb-0 w-72 md:w-72 lg:w-80"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Form.Item>
            <p className="mt-0 text-neutral-400">
              Use more than 8 characters, A-Z, 1-0,#
            </p>
            <PasswordStrengthBar
              password={inputValue}
              minLength={4}
              onChangeScore={(score, feedback) => {
                console.log(score, feedback);
              }}
            />
            <Form.Item name={['repeatPass']} rules={[{ required: true }]}>
              <Input.Password
                placeholder="Repeat Password"
                className="mt-3 w-72 md:w-72 lg:w-80"
              />
            </Form.Item>
          </div>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
            <Button className="w-72 md:w-72 lg:w-80" type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
