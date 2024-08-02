import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Image, Input, InputNumber, Upload } from "antd";
import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { GrLocation, GrPhone } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';

import man from '../../assets/man.jpeg';


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


export default function UserInfoSection({ user }: { user: any }) {
  return (
    <form
      {...layout}
      name="nest-messages"
      className="w-full"
    >
      <div className="flex flex-col items-center gap-5 align-middle text-neutral-700">
        <div>
          <Image width={150} src={man} className="rounded-full" />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-10 md:gap-y-2">
          <div className="flex flex-col gap-2">
            <p>Full Name</p>
            <Input
              className={'w-72'}
              defaultValue={user.fullName}
              prefix={<FaRegCircleUser style={{ color: 'rgba(0,0,0,.3)' }} />}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Username</p>
            <Input
              className={'w-72'}
              defaultValue={user.username}
              prefix={<MdAlternateEmail style={{ color: 'rgba(0,0,0,.3)' }} />}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Email Address</p>
            <Input
              className={'w-72'}
              defaultValue={user.email}
              type="email"
              required
              prefix={<HiOutlineMail style={{ color: 'rgba(0,0,0,.3)' }} />}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Phone Number</p>
            <InputNumber
              className={'w-72'}
              defaultValue={user.phoneNumber}
              prefix={<GrPhone style={{ color: 'rgba(0,0,0,.3)' }} />}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Address</p>
            <Input
              className={'w-72'}
              defaultValue={user.Address}
              prefix={<GrLocation style={{ color: 'rgba(0,0,0,.3)' }} />}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p>Profile Photo</p>
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              className="upload-list-inline "
            >
              <Button className=" w-72" icon={<UploadOutlined />}>
                Upload New Profile
              </Button>
            </Upload>
          </div>

          <div className="flex flex-col gap-2">
            <p>Need to Change your Password?</p>
            <Button className="w-72">Edit</Button>
          </div>

          <div className="flex flex-col gap-2">
            <br />
            <Button type="primary" className="w-72">
              Submit Changes
            </Button>{' '}
          </div>
        </div>
      </div>
    </form>
  );
}
