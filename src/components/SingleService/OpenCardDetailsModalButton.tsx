import { UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  DatePicker,
  type DatePickerProps,
  Form,
  Input,
  message,
  Modal,
  Upload,
  type UploadProps,
} from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DesignerDetails from './DesignerDetails';
import MeasureDetails from './MeasureDetails';
import ProducerDetails from './ProducerDetails';
export default function OpenCardDetailsModalButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);

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
  return (
    <div>
      <Button className="w-full" onClick={showModal}>Show Details</Button>
      <Modal
        className="details-modal"
        title="John Team"
        centered
        width={900}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Request"
        cancelText="Close"
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            disabled={!componentDisabled}
          >
            Send Request
          </Button>,
        ]}
      >
        <div className="mx-10 mt-6 flex flex-col gap-2">
          {/*<MeasureDetails />*/}
          {/*<DesignerDetails />*/}
          <ProducerDetails />

          <Checkbox
            checked={componentDisabled}
            onChange={(e) => setComponentDisabled(e.target.checked)}
          >
            By send this request I will sign the contract.
            <Link to={'/contract-details'}>
              <span className="pl-2 text-xs text-secondary">Read Contract</span>
            </Link>
          </Checkbox>

          <div className={componentDisabled ? '' : 'hidden'}>
            <Form
              {...layout}
              id="myForm"
              name="nest-messages"
              onFinish={onFinish}
              className="mt-5 w-full"
              validateMessages={validateMessages}
              disabled={!componentDisabled}
            >
              <div className="flex gap-4">
                <Form.Item name={['projectName']} rules={[{ required: true }]}>
                  <Input placeholder="Project Name" className="w-44 lg:w-60" />
                </Form.Item>
                <Form.Item name={['phoneNumber']} rules={[{ required: true }]}>
                  <Input placeholder="Phone Number" className="w-44 lg:w-60" />
                </Form.Item>
              </div>

              <div className="flex gap-4">
                <Form.Item name={['deadline']} rules={[{ required: true }]}>
                  <DatePicker
                    onChange={onChange}
                    placeholder="Deadline"
                    className="w-60"
                  />
                </Form.Item>

                <Form.Item name={['File']} rules={[{ required: true }]}>
                  <Upload {...props}>
                    <Button className="w-44 lg:w-60" icon={<UploadOutlined />}>
                      Click to Upload
                    </Button>
                  </Upload>{' '}
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

              <Form.Item key="submit" name={['change']}>
                <Button type="primary" htmlType="submit">
                  Send Request
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
