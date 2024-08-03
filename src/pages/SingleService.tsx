import DesignerCard from '../components/DesignerCard';
import SingleServiceCard from '../components/SingleService/SingleServiceCard';

export default function SingleService() {
  return (
    // remember to change mt-14
    <div className="flex items-center w-full mt-14 justify-center">
      <div className="grid max-w-[800px] grid-cols-1 justify-items-center gap-5 max-[900px]:grid-cols-1 max-[765px]:grid-cols-2 max-[700px]:grid-cols-1 min-[1120px]:grid-cols-2	">
        <SingleServiceCard service={'Measure'} />
        <SingleServiceCard service={'Design'} />
        <SingleServiceCard service={'Install'} />
        <SingleServiceCard service={'Produce'} />
      </div>
    </div>
  );
}
