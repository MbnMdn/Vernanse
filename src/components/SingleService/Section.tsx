import BioCard from './BioCard';

export default function Section() {
  return (
    <div className="grid grid-cols-2 gap-2 max-[768px]:grid-cols-2 max-[600px]:grid-cols-2  min-[900px]:grid-cols-3 ">
      <BioCard />
      <BioCard />
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
