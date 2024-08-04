import { Link } from 'react-router-dom';

import DesignerCard from '../components/DesignerCard';
import SingleServiceCard from '../components/SingleService/SingleServiceCard';

export default function SingleService() {
  return (
    // remember to change mt-14
    <div className="mt-14 flex w-full items-center justify-center">
      <div className="grid max-w-[800px] grid-cols-1 justify-items-center gap-5 max-[900px]:grid-cols-1 max-[765px]:grid-cols-2 max-[700px]:grid-cols-1 min-[1120px]:grid-cols-2	">
        <Link to={'/single-service/measure'}>
          <SingleServiceCard service={'Measure'} />
        </Link>
        <Link to={'/single-service/design'}>
          <SingleServiceCard service={'Design'} />
        </Link>
        <Link to={'/single-service/install'}>
          <SingleServiceCard service={'Install'} />
        </Link>
        <Link to={'/single-service/produce'}>
          <SingleServiceCard service={'Produce'} />
        </Link>
      </div>
    </div>
  );
}
