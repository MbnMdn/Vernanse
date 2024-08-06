import DragAndDrop from '../DragAndDrop';
import Picture from '../Picture';
import ScrollableCards from '../ScrollableCards';

export default function UploadKitchenPhotoStep() {
  return (
    <div className="flex flex-col gap-10 pt-3 md:pt-5">
      <div className="flex flex-col items-center gap-5">
        <DragAndDrop />
      </div>
      <ScrollableCards>
        <Picture />
      </ScrollableCards>
    </div>
  );
}
