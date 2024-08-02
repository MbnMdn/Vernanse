import DesignerCard from '../DesignerCard';

export default function DesignersSection() {
  return (
    <div className="grid grid-cols-2 gap-2 max-[1200px]:grid-cols-2 max-[600px]:grid-cols-1  min-[1200px]:grid-cols-3 ">
      <DesignerCard />
      <DesignerCard />
      <DesignerCard />
      <DesignerCard />
      <DesignerCard />
      <DesignerCard />
      <DesignerCard />
    </div>
  );
}
