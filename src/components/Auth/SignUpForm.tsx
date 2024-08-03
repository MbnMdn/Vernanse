import { Button, Form, Input } from 'antd';
import React from 'react';

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

export default function SignUpForm() {
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      className="w-full"
      validateMessages={validateMessages}
    >
      <div className="flex flex-col items-start">
        <div className="flex gap-7">
          <Form.Item name={['project']} rules={[{ required: true }]}>
            <Input placeholder="Project Name" className="w-44 lg:w-60" />
          </Form.Item>
          <Form.Item name={['subject']} rules={[{ required: true }]}>
            <Input placeholder="Subject" className="w-44 md:w-56 lg:w-60" />
          </Form.Item>
        </div>

        <Form.Item
          name={['description']}
          className="w-full"
          // label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea
            style={{ height: 100 }}
            className=" w-128"
            placeholder="Type Description"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
          <Button type="primary" htmlType="submit">
            Send Ticket
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
