import React from 'react';

import pic1 from '../../assets/bath.jpg';

export default function OfferCard() {
  return (
    <div className="group relative w-1/2  overflow-hidden rounded-lg shadow-lg">
      <img src={pic1} alt="Interior Design" className="h-full w-full object-cover" />
      <div className="absolute inset-0  bg-mainGreen opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
        <h2 className="text-4xl font-semibold">New material, for unique houses</h2>
        <p className="mt-2">
          We proud to introduce new material with high quality for new design styles and
          different decoration.
        </p>
      </div>
      <div className="absolute inset-0 flex flex-col  justify-end p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button className="mt-4 rounded bg-secondary px-4 py-2 text-base font-medium hover:bg-red-950 focus:outline-none">
          Show Details
        </button>
      </div>
    </div>
  );
}
