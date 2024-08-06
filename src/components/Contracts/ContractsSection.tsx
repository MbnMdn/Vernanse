import { DatePicker, type DatePickerProps, Radio } from 'antd';
import React from 'react';

import SearchBar from '../SearchBar';
import ContractTable from './ContractsTable';

export default function ContractsSection() {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-medium text-darkGreen">Contracts List</p>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 md:flex-row md:gap-6">
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-3 md:flex-row md:gap-6">
              <DatePicker
                onChange={onChange}
                placeholder="Deadline"
                className="w-60"
                // size={'large'}
              />

              <DatePicker
                onChange={onChange}
                placeholder="Sign Date"
                className="w-60"
                // size={'large'}
              />
            </div>
            <SearchBar placeholder={'Search'} />
          </div>
        </div>
        <ContractTable />
      </div>
    </div>
  );
}
