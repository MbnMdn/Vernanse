// import { PictureOutlined } from '@ant-design/icons';
// import { ConfigProvider, UploadProps } from 'antd';
// import { message, Upload } from 'antd';
// import React from 'react';
//
// import tailwindColors from '../../tailwindColors';
//
// const { Dragger } = Upload;
//
// const props: UploadProps = {
//   name: 'file',
//   multiple: true,
//   action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
//   onDrop(e) {
//     console.log('Dropped files', e.dataTransfer.files);
//   },
// };
//
// export default function DragAndDrop() {
//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBorder: tailwindColors.secondary,
//         },
//       }}
//     >
//       <Dragger {...props}>
//         <p className="ant-upload-drag-icon">
//           <PictureOutlined />
//         </p>
//         <p className="ant-upload-text">Click or drag file to this area to upload</p>
//         <p className="ant-upload-hint">Maximum size: 50MB</p>
//       </Dragger>
//     </ConfigProvider>
//   );
// }

// import { PictureOutlined } from '@ant-design/icons';
// import { ConfigProvider, message, Upload, UploadProps } from 'antd';
// import type { UploadFile } from 'antd/es/upload/interface';
// import React from 'react';
//
// import tailwindColors from '../../tailwindColors';
//
// const { Dragger } = Upload;
//
// interface DragAndDropProps {
//   onUploadSuccess: (url: string) => void;
// }
//
// const DragAndDrop: React.FC<DragAndDropProps> = ({ onUploadSuccess }) => {
//   const props: UploadProps = {
//     beforeUpload: () => {
//       return false;
//     },
//     name: 'file',
//     multiple: false,
//     action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
//     onChange(info) {
//       const { status, response } = info.file;
//       if (status !== 'uploading') {
//         console.log(info.file, info.fileList);
//       }
//       if (status === 'done') {
//         message.success(`${info.file.name} file uploaded successfully.`);
//         // Assuming the response contains the URL of the uploaded image
//         onUploadSuccess(response.url);
//       } else if (status === 'error') {
//         message.error(`${info.file.name} file upload failed.`);
//       }
//     },
//     onDrop(e) {
//       console.log('Dropped files', e.dataTransfer.files);
//     },
//   };
//
//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBorder: tailwindColors.secondary,
//         },
//       }}
//     >
//       <Dragger {...props}>
//         <p className="ant-upload-drag-icon">
//           <PictureOutlined />
//         </p>
//         <p className="ant-upload-text">Click or drag file to this area to upload</p>
//         <p className="ant-upload-hint">Maximum size: 50MB</p>
//       </Dragger>
//     </ConfigProvider>
//   );
// };
//
// export default DragAndDrop;

import { PictureOutlined } from '@ant-design/icons';
import { ConfigProvider, message, Upload, UploadProps } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import React from 'react';

import tailwindColors from '../../tailwindColors';

const { Dragger } = Upload;

interface DragAndDropProps {
  onUploadSuccess: (url: string) => void;
}

export default function DragAndDrop() {
  const props: UploadProps = {
    beforeUpload: () => {
      return false;
    },
    name: 'file',
    multiple: false,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status, response } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        // Assuming the response contains the URL of the uploaded image
        // onUploadSuccess(response.url);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBorder: tailwindColors.secondary,
        },
      }}
    >
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <PictureOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Maximum size: 50MB</p>
      </Dragger>
    </ConfigProvider>
  );
}
