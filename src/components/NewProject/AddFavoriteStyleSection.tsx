import { Empty, Typography } from 'antd';

import DragAndDrop from './DragAndDrop';

export default function AddFavoriteStyleSection() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-neutral-600">Didn’t find your favorite style? Add your favorite. </span>
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
      {/*<DragAndDrop />*/}
    </div>
  );
}
