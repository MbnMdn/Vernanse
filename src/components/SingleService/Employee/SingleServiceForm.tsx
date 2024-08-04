import { UploadOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';
import type { UploadProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { message, Upload } from 'antd';
import { DatePicker, Space } from 'antd';
import React from 'react';

import SelectSingleService from './SelectSingleService';
import { Link } from "react-router-dom";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
};

const onFinish = (values: any) => {
  console.log(values);
};

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const props: UploadProps = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default function SingleServiceForm({ user_role }: { user_role: string }) {
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      className="w-full"
      validateMessages={validateMessages}
    >
      <div className="flex flex-col items-start">
        <div className="flex gap-10">
          <Form.Item name={['Order Type']} rules={[{ required: true }]} className="w-72">
            <SelectSingleService user_role={user_role} />
          </Form.Item>

          <Form.Item name={['Provider']} rules={[{ required: true }]} className="w-72">
            <SelectSingleService user_role={user_role} />
          </Form.Item>
        </div>

        <div className="flex gap-10">
          <Form.Item
            name={['Project Name']}
            rules={[{ required: true }]}
            className="w-72"
          >
            <Input placeholder="Project Name" />
          </Form.Item>

          <Form.Item name={['Address']} rules={[{ required: true }]} className="w-72">
            <Input placeholder="Address" />
          </Form.Item>
        </div>

        <div className="flex gap-10">
          <Form.Item name={['Deadline']} rules={[{ required: true }]}>
            <DatePicker className="w-72" onChange={onChange} placeholder="Deadline" />
          </Form.Item>

          <Form.Item name={['File']} rules={[{ required: true }]} className="w-72">
            <Upload {...props}>
              <Button className="w-72" icon={<UploadOutlined />}>
                Click to Upload
              </Button>
            </Upload>{' '}
          </Form.Item>
        </div>

        <div className="flex w-full">
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
        </div>

        <div className="flex w-full">
          <Form.Item
            name="Contract Sign"
            valuePropName="checked"
            className="w-full"
            rules={[{ required: true }]}
          >
            <Checkbox>
              By send this request I will sign the contract.
              <Link to={'/contract-details'}><span className="text-xs text-secondary">Read Contract</span></Link>

            </Checkbox>
          </Form.Item>
        </div>

        <div className="flex w-full gap-7">
          <Button htmlType="submit">Cancel</Button>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
            <Button type="primary" htmlType="submit">
              Send Request
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
}
