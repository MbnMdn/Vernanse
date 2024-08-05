import SearchBar from '../components/SearchBar';
import Section from '../components/SingleService/Section';

export default function Produce() {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium text-darkGreen">Select Producer</h2>
        <SearchBar placeholder={'Search Producer'} />
      </div>
      <Section />
    </div>
  );
}
