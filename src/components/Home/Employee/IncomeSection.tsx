import React from 'react';

export default function IncomeSection() {
  return (
    <div
      className="bgter flex w-72 flex-col items-center justify-around gap-4  rounded-xl border-2 border-mainGreen bg-neutral-50 p-10
       shadow-sm hover:shadow-sm hover:shadow-mainGreen lg:w-96"
    >
      <div className="flex flex-col items-center gap-2 lg:flex-row">
        <p className="text-lg font-medium">Future Revenue: </p>
        <p className="text-2xl font-semibold text-mainGreen">458 $</p>
      </div>

      <div className="flex flex-col items-center gap-2 lg:flex-row">
        <p className="text-lg font-medium">Total Earning: </p>
        <p className="text-2xl font-semibold text-mainGreen">2500 $</p>
      </div>

      <div className="flex flex-col items-center gap-2 lg:flex-row">
        <p className="text-lg font-medium">Commission: </p>
        <p className="text-2xl font-semibold text-mainGreen">250 $</p>
      </div>
    </div>
  );
}
