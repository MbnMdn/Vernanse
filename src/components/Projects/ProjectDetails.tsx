import { Button } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';

import Picture from '../Picture';
import ScrollableCards from '../ScrollableCards';
import SelectProducerAndInstallerSection from './SelectProducerAndInstallerSection';

export default function ProjectDetails() {
  const { id } = useParams();
  // <div>Project {id}</div>

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-10">
          <div className="flex gap-2">
            <span className="font-medium">Design Cost:</span>
            <span className="text-lightGrey">350$</span>
          </div>

          <div className="flex gap-2">
            <span className="font-medium">Produce Cost Estimate:</span>
            <span className="text-lightGrey">350$</span>
          </div>

          <div className="flex gap-2">
            <span className="font-medium">Status:</span>
            <span className="text-lightGrey">Design completed / Select producer</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-3">
          <div className="flex flex-col items-start justify-between gap-3 lg:flex-row lg:items-center">
            <p className="text-2xl font-semibold text-darkGreen">Designs</p>
            <div className="flex gap-3">
              <Button type={'dashed'}>Room Size File</Button>
              <Button>Reject Design</Button>
              <Button type="primary">Accept Design</Button>
            </div>
          </div>
          <ScrollableCards>
            <Picture />
          </ScrollableCards>
        </div>
      </div>

      <SelectProducerAndInstallerSection />
    </div>
  );
}
