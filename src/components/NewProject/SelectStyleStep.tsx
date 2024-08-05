import DragAndDrop from '../DragAndDrop';
import AddFavoriteStyleSection from './AddFavoriteStyleSection';
import SelectStyleSection from './SelectStyleSection';

export default function SelectStyleStep() {
  return (
    <div className="flex flex-col gap-10">
      <SelectStyleSection />
      <AddFavoriteStyleSection />
    </div>
  );
}
