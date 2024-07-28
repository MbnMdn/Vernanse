import React from 'react';

import pic1 from '../../assets/bath.jpg';

export default function StyleCard() {
  return (
    <div className="group relative w-80 flex-none rounded-lg">
      <img src={pic1} alt="Classic" className=" rounded-md" />
      <div className="absolute inset-0  rounded-md bg-mainGreen opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
        <h2 className="text-4xl font-semibold">Minimalism</h2>
      </div>
    </div>
  );
}
