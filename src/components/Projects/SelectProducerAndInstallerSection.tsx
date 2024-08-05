import React from 'react';

import ScrollableCards from '../ScrollableCards';
import SearchBar from '../SearchBar';
import BioCard from '../SingleService/BioCard';

export default function SelectProducerAndInstallerSection() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-semibold text-darkGreen">
        Select Producer And Installer
      </h2>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-darkGreen">Installers:</h3>
          <SearchBar placeholder={'Search Installer'} />
        </div>
        <ScrollableCards>
          <BioCard />
        </ScrollableCards>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-darkGreen">Producers:</h3>
          <SearchBar placeholder={'Search Producer'} />
        </div>
        <ScrollableCards>
          <BioCard />
        </ScrollableCards>
      </div>
    </div>
  );
}
