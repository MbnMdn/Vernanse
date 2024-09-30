import { Link } from 'react-router-dom';

import SingleServiceCard from './SingleServiceCard';

export default function CustomerSingleService() {
  return (
    <div className="mt-5 flex w-full items-center justify-center md:mt-10">
      <div className="mt-2 grid max-w-[800px] grid-cols-1 justify-items-center gap-5 max-[900px]:grid-cols-1 max-[765px]:grid-cols-2 max-[700px]:grid-cols-1 md:gap-10 min-[1120px]:grid-cols-2	">
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
