import { Empty, Typography } from 'antd';

import DragAndDrop from './DragAndDrop';

export default function AddFavoriteStyleSection() {
  return (
    <div>
      <p>Didn’t find your favorite style? </p>
      <p>Add your favorite.</p>
      <div className="flex  items-start gap-5">
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
