import { ColumnWidthOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Image, Input, InputNumber, Upload, UploadFile } from 'antd';
import React from 'react';

import man from '../assets/man.jpeg';

export default function Account() {
  const fileList: UploadFile[] = [
    {
      uid: '0',
      name: 'xxx.png',
      status: 'uploading',
      percent: 33,
    },
    {
      uid: '-1',
      name: 'yyy.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'zzz.png',
      status: 'error',
    },
  ];

  return (
    <div className="flex flex-col items-center gap-5 align-middle">
      <div>
        <Image width={150} src={man} className="rounded-full" />
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-2">
          <p>Full Name</p>
          <Input
            className={'w-72'}
            defaultValue="John Brown"
            prefix={<ColumnWidthOutlined style={{ color: 'rgba(0,0,0,.6)' }} />}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Username</p>
          <Input
            className={'w-72'}
            defaultValue="John"
            prefix={<ColumnWidthOutlined style={{ color: 'rgba(0,0,0,.6)' }} />}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Email Address</p>
          <Input
            className={'w-72'}
            defaultValue="John@gmail.com"
            prefix={<ColumnWidthOutlined style={{ color: 'rgba(0,0,0,.6)' }} />}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Phone Number</p>
          <InputNumber className={'w-72'} defaultValue={1325456789} />
          {/*<Input*/}
          {/*  className={'w-72'}*/}
          {/*  defaultValue="+1325456789"*/}
          {/*  prefix={<ColumnWidthOutlined style={{ color: 'rgba(0,0,0,.6)' }} />}*/}
          {/*/>*/}
        </div>
        <div className="flex flex-col gap-2">
          <p>Address</p>
          <Input
            className={'w-72'}
            defaultValue="New York No. 1 Lake Park"
            prefix={<ColumnWidthOutlined style={{ color: 'rgba(0,0,0,.6)' }} />}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Profile Photo</p>
          {/*<Button onClick={() => console.log('changePassword')} >*/}
          {/*  Change Password*/}
          {/*</Button>*/}

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

        <Button className="w-72">Edit Password</Button>

        <Button type="primary" className="w-72">
          Submit Changes
        </Button>
      </div>
    </div>
  );
}
