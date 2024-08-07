import React from 'react';

import StyleCard from '../../../Home/Customer/StyleCard';
import DownloadProjectFilesSection from './DownloadProjectFilesSection';

export default function SelectedStyleSection() {
  return (
    <div className="flex flex-col gap-5 md:gap-10  lg:flex-row">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-medium">Selected Style</h3>
        <StyleCard />
      </div>
      <DownloadProjectFilesSection />
    </div>
  );
}
