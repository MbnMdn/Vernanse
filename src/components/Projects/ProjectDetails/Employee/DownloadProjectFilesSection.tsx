import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import React from 'react';

export default function DownloadProjectFilesSection() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-medium">Files</h3>
      <div className="grid max-w-[400px] grid-cols-3 gap-2">
        <p>Room Size File</p>
        <div></div>

        <Button icon={<DownloadOutlined />}>Download</Button>
        <p>3D Design</p>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture"
          className="upload-list-inline "
        >
          <Button type={'dashed'} icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
        <Button icon={<DownloadOutlined />}>Download</Button>

        <p>2D Design</p>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture"
          className="upload-list-inline "
        >
          <Button type={'dashed'} icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
        <Button icon={<DownloadOutlined />}>Download</Button>

        <p>List Offer</p>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture"
          className="upload-list-inline "
        >
          <Button type={'dashed'} icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
        <Button icon={<DownloadOutlined />}>Download</Button>
      </div>
    </div>
  );
}
