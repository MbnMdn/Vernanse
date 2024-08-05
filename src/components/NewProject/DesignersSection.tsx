import BioCard from '../SingleService/BioCard';

export default function DesignersSection() {
  return (
    <div className="grid grid-cols-2 gap-2 max-[900px]:grid-cols-1  max-[765px]:grid-cols-2 max-[650px]:grid-cols-1 min-[1200px]:grid-cols-3 ">
      <BioCard />
      <BioCard />
      <BioCard />
      <BioCard />
      <BioCard />
      <BioCard />
      <BioCard />
    </div>
  );
}
