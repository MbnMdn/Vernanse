import { ProFormText } from '@ant-design/pro-components';

import DragAndDrop from './DragAndDrop';

export default function UploadIndexStep() {
  return (
    <div className="flex flex-col items-center gap-5">
      <p>Upload the Index Photo</p>
      <DragAndDrop />
      <ProFormText
        placeholder="Index Height (cm)"
        rules={[{ required: true }]}
        tooltip="upload"
        className="w-32"
      />
    </div>
  );
}
