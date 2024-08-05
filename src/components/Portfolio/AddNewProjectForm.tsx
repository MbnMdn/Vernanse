import { Button, Form, Input } from 'antd';
import React from 'react';

import AddPortfolioPicture from './AddPortfolioPicture';

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

const onFinish = (values: any) => {
  console.log(values);
};

export default function AddNewProjectForm() {
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      className="w-full"
      validateMessages={validateMessages}
    >
      <div className="flex flex-col items-start">
        <div className="flex flex-col gap-1 md:flex-row md:gap-7">
          <Form.Item name={['Project Name']} rules={[{ required: true }]}>
            <Input placeholder="Project Name" className="w-44 lg:w-60" />
          </Form.Item>
          <Form.Item name={['Style']} rules={[{ required: true }]}>
            <Input placeholder="Style" className="w-44 md:w-56 lg:w-60" />
          </Form.Item>
        </div>

        {/*<Form.Item*/}
        {/*  name={['description']}*/}
        {/*  className="w-full"*/}
        {/*  // label="Description"*/}
        {/*  rules={[{ required: true }]}*/}
        {/*>*/}
        {/*  <Input.TextArea*/}
        {/*    style={{ height: 100 }}*/}
        {/*    className=" w-128"*/}
        {/*    placeholder="Type Description"*/}
        {/*  />*/}
        {/*</Form.Item>*/}

        <Form.Item
          name={['Description']}
          className=" w-full"
          rules={[{ required: true }]}
        >
          <Input.TextArea
            className="max-w-full"
            style={{ height: 100 }}
            placeholder="Type Description"
          />
        </Form.Item>

        <AddPortfolioPicture />

        <div className="mt-2 flex gap-4">
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
            <Button>Cancel</Button>
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
}
