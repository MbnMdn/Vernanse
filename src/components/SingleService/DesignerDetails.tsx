import React from 'react';

import Picture from '../Picture';
import ScrollableCards from '../ScrollableCards';
export default function DesignerDetails() {
  return (
    <>
      <div className="flex flex-col gap-1 md:flex-row md:gap-20">
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
        <p className="font-medium">Average Design Time:</p>
        <p className="text-lightGrey">14 Work Days</p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-medium">Portfolio:</p>
        <ScrollableCards>
          <Picture />
        </ScrollableCards>
      </div>
    </>
  );
}
