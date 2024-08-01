import SearchBar from '../components/SearchBar';
import Section from '../components/SingleService/Section';

export default function Design() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium text-darkGreen">Select Designer</h2>
        <SearchBar />
      </div>
      <Section />
    </div>
  );
}
