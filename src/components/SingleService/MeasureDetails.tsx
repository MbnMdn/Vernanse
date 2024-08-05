import React from 'react';

import Picture from '../Picture';
import ScrollableCards from '../ScrollableCards';
export default function MeasureDetails() {
  return (
    <>
      <div className="flex flex-col justify-between gap-1 md:flex-row">
        <div className="flex items-center gap-3">
          <p className="font-medium">Number of Members:</p>
          <p className="text-lightGrey">2</p>
        </div>

        <div className="flex items-center gap-3">
          <p className="font-medium">Pending Projects</p>
          <p className="text-lightGrey">1</p>
        </div>

        <div className="flex items-center gap-3">
          <p className="font-medium">Completed Projects</p>
          <p className="text-lightGrey">14</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <p className="font-medium">Equipments:</p>
        <p className="text-lightGrey">Cordless drill, Screwdriver, Cabinet Clamps</p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-medium">Work Photos:</p>
        <ScrollableCards>
          <Picture />
        </ScrollableCards>
      </div>
    </>
  );
}
