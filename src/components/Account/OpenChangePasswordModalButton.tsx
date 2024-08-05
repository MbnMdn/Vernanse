import { Button, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';

export default function OpenChangePasswordModalButton() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
    setOpen(true);
  };

  const handleOk = () => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   setOpen(false);
    // }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="w-72" onClick={showModal}>
        Edit
      </Button>
      <Modal
        className="profile-modal"
        centered
        width={400}
        open={open}
        title="Change Password"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          {...layout}
          id="myForm"
          name="nest-messages"
          onFinish={onFinish}
          className="m-2 mt-5 flex w-full flex-col items-center"
          validateMessages={validateMessages}
        >
          <Form.Item name={['Current Password']} rules={[{ required: true }]}>
            <Input.Password placeholder="Current Password" className="w-44 lg:w-60" />
          </Form.Item>

          <Form.Item name={['New Password']} rules={[{ required: true }]}>
            <Input.Password placeholder="New Password" className="w-44 lg:w-60" />
          </Form.Item>

          <Form.Item name={['Repeat New Password']} rules={[{ required: true }]}>
            <Input.Password placeholder="Repeat New Password" className="w-44 lg:w-60" />
          </Form.Item>
          <Form.Item key="submit" name={['change']}>
            <Button type="primary" htmlType="submit" className="items-end">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
