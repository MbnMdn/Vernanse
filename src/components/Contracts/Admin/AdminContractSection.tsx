import { DatePicker, type DatePickerProps, Radio, type RadioChangeEvent } from 'antd';
import React, { useState } from 'react';

import SearchBar from '../../SearchBar';
import CustomerContractsTable from '../Customer - Employee/CustomerContractsTable';
import EmployeeContractTable from '../Customer - Employee/EmployeeContractTable';
import AdminContractTable from './AdminContractTable';

export default function AdminContractSection({ user_role }: { user_role: string }) {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const [filterValue, setFilterValue] = useState('all');

  const filterValueChange = (e: RadioChangeEvent) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-medium text-darkGreen">Contracts List</p>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 md:flex-row md:gap-6">
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-3 md:flex-row md:gap-6">
              <DatePicker onChange={onChange} placeholder="Date" className="w-60" />
              <Radio.Group value={filterValue} onChange={filterValueChange}>
                <Radio.Button value="all">All</Radio.Button>
                <Radio.Button value="current">Current</Radio.Button>
                <Radio.Button value="archive">Archive</Radio.Button>
              </Radio.Group>
            </div>
            <SearchBar placeholder={'Search'} />
          </div>
        </div>
        {user_role === 'admin' && <AdminContractTable />}
      </div>
    </div>
  );
}
