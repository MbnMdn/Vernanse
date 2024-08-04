import React from 'react';

import pic1 from '../../assets/bath.jpg';

export default function SingleServiceCard({ service }: { service: string }) {
  return (
    <div className="group relative w-90 flex-none  rounded-lg md:w-96">
      <img src={pic1} alt="Classic" className=" rounded-md" />
      <div className="absolute inset-0  rounded-md bg-mainGreen opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
        <h2 className="text-3xl font-semibold md:text-4xl">{service}</h2>
      </div>
    </div>
  );
}
