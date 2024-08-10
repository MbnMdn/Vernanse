import { Empty, Typography } from 'antd';

import DragAndDrop from '../../DragAndDrop';

export default function AddPortfolioPicture() {
  return (
    <div className="flex items-start gap-10">
      <DragAndDrop />
      <Empty
        // image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        imageStyle={{ height: 60 }}
        description={
          <Typography.Text className="text-neutral-500">
            Nothing selected yet
          </Typography.Text>
        }
      ></Empty>
    </div>
  );
}
