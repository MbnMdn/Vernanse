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

export default function NewTicketForm() {
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      className="w-full"
      validateMessages={validateMessages}
    >
      <div className="flex flex-col items-start">
        <div className="flex">
          <Form.Item name={['project']} rules={[{ required: true }]}>
            <Input placeholder="Project Name" />
          </Form.Item>
          <Form.Item
            name={['email']}
            // label="Email"
            rules={[{ type: 'email', required: true }]}
          >
            <Input placeholder="Email" />
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
            className=" max-w-full"
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
