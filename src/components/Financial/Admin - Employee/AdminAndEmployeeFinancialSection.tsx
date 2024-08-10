import { DatePicker, type DatePickerProps, Radio, type RadioChangeEvent } from 'antd';
import React, { useState } from 'react';

import AdminContractTable from '../../Contracts/Admin/AdminContractTable';
import SearchBar from '../../SearchBar';
import AdminFinancialTable from './AdminFinancialTable';
import EmployeeFinancialTable from './EmployeeFinancialTable';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

export default function AdminAndEmployeeFinancialSection({
  user_role,
}: {
  user_role: string;
}) {
  const [filterValue, setFilterValue] = useState('all');

  const filterValueChange = (e: RadioChangeEvent) => {
    setFilterValue(e.target.value);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col justify-between gap-3 md:gap-6 lg:flex-row">
        <div className="flex flex-col gap-3 md:flex-row md:gap-6">
          <DatePicker
            onChange={onChange}
            placeholder="Invoice Date"
            className="w-44"
            // size={'large'}
          />

          <DatePicker
            onChange={onChange}
            placeholder="Deadline"
            className="w-44"
            // size={'large'}
          />
          <Radio.Group value={filterValue} onChange={filterValueChange}>
            <Radio.Button value="all">All</Radio.Button>
            <Radio.Button value="paid">Paid</Radio.Button>
            <Radio.Button value="unpaid">Unpaid</Radio.Button>
          </Radio.Group>
        </div>
        <SearchBar placeholder={'Search'} />
      </div>
      {user_role === 'admin' ? <AdminFinancialTable /> : <EmployeeFinancialTable />}
    </div>
  );
}
