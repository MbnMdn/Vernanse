import { Button, Checkbox, Form, Modal } from 'antd';
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  return (
    <>
      <Button onClick={showModal}>Show Details</Button>
      <Modal
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
          <Form.Item key="submit" wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
            <Button form="myForm" type="primary" htmlType="submit">
              Send Request
            </Button>
          </Form.Item>,
        ]}
      >
        <Form
          {...layout}
          id="myForm"
          name="nest-messages"
          onFinish={onFinish}
          className="w-full"
          validateMessages={validateMessages}
        >
          <div className="mx-10 mt-6 flex flex-col gap-2">
            {/*<MeasureDetails />*/}
            {/*<DesignerDetails />*/}
            <ProducerDetails />
            <Form.Item
              name="Contract Sign"
              valuePropName="checked"
              className="w-full"
              rules={[{ required: true }]}
            >
              <Checkbox
                checked={componentDisabled}
                onChange={(e) => setComponentDisabled(e.target.checked)}
              >
                By send this request I will sign the contract.
                <Link to={'/contract-details'}>
                  <span className="pl-2 text-xs text-secondary">Read Contract</span>
                </Link>
              </Checkbox>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
}
