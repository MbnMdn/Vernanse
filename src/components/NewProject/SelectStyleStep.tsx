import DragAndDrop from "./DragAndDrop";
import SelectStyleSection from "./SelectStyleSection";
import AddFavoriteStyleSection from "./AddFavoriteStyleSection";

export default function SelectStyleStep() {
  return(
    <div className="flex flex-col gap-10">
      <SelectStyleSection />
      <AddFavoriteStyleSection />
    </div>
  );
}