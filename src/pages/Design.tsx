import SearchBar from '../components/SearchBar';
import Section from '../components/SingleService/Section';

export default function Design() {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <h2 className="text-2xl font-medium text-darkGreen ">Select Designer</h2>
        <div className="self-end">
          <SearchBar placeholder={'Search Designer'} />
        </div>
      </div>
      <Section />
    </div>
  );
}
