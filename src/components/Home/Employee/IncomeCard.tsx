import React from 'react';
export default function IncomeCard({ title, number }: { title: string; number: number }) {
  return (
    <div
      className="bgter flex w-96 flex-col  items-center  gap-4 rounded-xl bg-neutral-50 p-10 shadow-sm
       shadow-mainGreen hover:shadow-md hover:shadow-mainGreen"
    >
      <div className="flex  items-center gap-2">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-2xl font-semibold text-mainGreen">{number} $</p>
      </div>
    </div>
  );
}
