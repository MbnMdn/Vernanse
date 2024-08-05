import BioCard from './BioCard';

export default function Section() {
  return (
    <div className="grid grid-cols-1 gap-2  min-[1000px]:grid-cols-2 min-[1400px]:grid-cols-3 ">
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
