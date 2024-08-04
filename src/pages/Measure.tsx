import SearchBar from '../components/SearchBar';
import Section from '../components/SingleService/Section';

export default function Measure() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium text-darkGreen">Select Measure</h2>
        <SearchBar placeholder={"Select Measure"} />
      </div>
      <Section />
    </div>
  );
}
