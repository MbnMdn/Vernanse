import React from 'react';
export default function ProjectStatusCard({
  title,
  number,
}: {
  title: string;
  number: number;
}) {
  return (
    <div
      className="flex w-72 flex-col items-center  gap-4  rounded-xl border-2 border-mainGreen bg-neutral-50 p-3 shadow-sm
       hover:shadow-sm hover:shadow-mainGreen lg:w-80 lg:p-10"
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-2xl font-semibold text-mainGreen">{number}</p>
      </div>
    </div>
  );
}
