import React from 'react';

import Picture from '../Picture';
import ScrollableCards from '../ScrollableCards';
export default function ProducerDetails() {
  return (
    <>
      <div className="flex flex-col gap-1 md:flex-row md:gap-20">
        <div className="flex items-center gap-3">
          <p className="font-medium">Employees:</p>
          <p className="text-lightGrey">21</p>
        </div>

        <div className="flex items-center gap-3">
          <p className="font-medium">Establish:</p>
          <p className="text-lightGrey">14</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <p className="font-medium">Address:</p>
        <p className="text-lightGrey">14 Work Days</p>
      </div>

      <div className="flex items-center gap-3">
        <p className="font-medium">Production capacity:</p>
        <p className="text-lightGrey">150 m2/d</p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-medium">Factory Photos:</p>
        <ScrollableCards>
          <Picture />
        </ScrollableCards>
      </div>
    </>
  );
}
