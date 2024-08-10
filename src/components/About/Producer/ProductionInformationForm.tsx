import {
  Button,
  DatePicker,
  type DatePickerProps,
  Form,
  Input,
  InputNumber,
  message,
  type UploadProps,
} from 'antd';
import React, { useState } from 'react';

import DragAndDrop from '../../DragAndDrop';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

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

export default function ProductionInformationForm() {
  return (
    <Form
      {...layout}
      id="myForm"
      name="nest-messages"
      onFinish={onFinish}
      className="mt-5 w-full"
      validateMessages={validateMessages}
    >
      <div className="flex flex-col">
        <div className="flex gap-10 ">
          <div>
            <div className="flex gap-4">
              <Form.Item name={['Production Capacity']} rules={[{ required: true }]}>
                <Input placeholder="Production Capacity" className="w-44 lg:w-60" />
              </Form.Item>
              <Form.Item name={['Phone Number']} rules={[{ required: true }]}>
                <InputNumber placeholder="Phone Number" className="w-44 lg:w-60" />
              </Form.Item>

              <Form.Item name={['Establish Date']} rules={[{ required: true }]}>
                <DatePicker
                  onChange={onChange}
                  placeholder="Establish Date"
                  className="w-60"
                />
              </Form.Item>
            </div>

            <Form.Item
              name={['address']}
              className=" w-full"
              rules={[{ required: true }]}
            >
              <Input placeholder="Address" className="max-w-full" />
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
          </div>

          <DragAndDrop />
        </div>

        <div className="flex gap-5">
          <Form.Item key="submit" name={['change']}>
            <Button htmlType="submit">Cancel</Button>
          </Form.Item>

          <Form.Item key="submit" name={['change']}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
}
