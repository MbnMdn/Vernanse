import { ColumnWidthOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';

import DragAndDrop from '../DragAndDrop';

export default function UploadIndexStep() {
  return (
    <div className="flex flex-col items-center gap-5">
      <p>Upload the Index Photo</p>
      <DragAndDrop />
      <Input
        className={'w-64'}
        placeholder="Index Height (cm)"
        prefix={<ColumnWidthOutlined style={{ color: 'rgba(0,0,0,.6)' }} />}
        suffix={
          <Tooltip title="Enter the index height in cm">
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }
      />
    </div>
  );
}
