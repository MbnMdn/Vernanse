import { Button, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';

export default function OpenEditDetailsModalButton() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
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
      <Button className="w-44" onClick={showModal}>
        Edit
      </Button>
      <Modal
        className="edit-project-details-modal"
        centered
        width={400}
        open={open}
        title="Edit Details"
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
        >
          <Form.Item name={['Status']} className=" w-72">
            <Input placeholder="Status" className="w-44 lg:w-60" />
          </Form.Item>

          <Form.Item name={['Address']} className=" w-72">
            <Input placeholder="Address" className="w-44 lg:w-60" />
          </Form.Item>

          <Form.Item
            name={['Description']}
            className=" w-72"
            rules={[{ required: true }]}
          >
            <Input.TextArea style={{ height: 100 }} placeholder="Type Description" />
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
