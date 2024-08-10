import { Button, Form, Input } from 'antd';
import React from 'react';

import AddPortfolioPicture from '../../Portfolio/Designer - Installer/AddPortfolioPicture';

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

export default function OfferForm() {
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      className="w-full"
      validateMessages={validateMessages}
    >
      <div className="flex flex-col items-start">
        <Form.Item className=" w-full" name={['Title']} rules={[{ required: true }]}>
          <Input placeholder="Title" />
        </Form.Item>

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

        <Form.Item className=" w-full" name={['Link']} rules={[{ required: true }]}>
          <Input placeholder="Link" />
        </Form.Item>

        <AddPortfolioPicture />

        <div className="mt-3 flex gap-4">
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
