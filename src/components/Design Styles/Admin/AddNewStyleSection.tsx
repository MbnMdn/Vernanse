import { Button, Form, Input } from 'antd';
import React from 'react';

import AddPortfolioPicture from '../../Portfolio/Designer - Installer/AddPortfolioPicture';

export default function AddNewStyleSection() {
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
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      className="w-full"
      validateMessages={validateMessages}
    >
      <div className="flex flex-col items-start">
        <Form.Item className=" w-80" name={['Style Name']} rules={[{ required: true }]}>
          <Input placeholder="Style Name" />
        </Form.Item>

        {/*<Form.Item*/}
        {/*  name={['Description']}*/}
        {/*  className=" w-full"*/}
        {/*  rules={[{ required: true }]}*/}
        {/*>*/}
        {/*  <Input.TextArea*/}
        {/*    className="max-w-full"*/}
        {/*    style={{ height: 100 }}*/}
        {/*    placeholder="Type Description"*/}
        {/*  />*/}
        {/*</Form.Item>*/}

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
