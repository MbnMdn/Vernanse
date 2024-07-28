import StyleCard from '../Home/StyleCard';
import Picture from '../Picture';
import ScrollableCards from '../ScrollableCards';
import DragAndDrop from './DragAndDrop';

export default function UploadKitchenPhotoStep() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col items-center gap-5">
        <DragAndDrop />
      </div>
      <ScrollableCards>
        <Picture />
      </ScrollableCards>
    </div>
  );
}
