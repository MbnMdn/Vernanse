import DesignerCard from '../DesignerCard';

export default function DesignersSection() {
  return (
    <div className="grid grid-cols-2 gap-2 max-[768px]:grid-cols-2 max-[600px]:grid-cols-2  min-[900px]:grid-cols-3 ">
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
