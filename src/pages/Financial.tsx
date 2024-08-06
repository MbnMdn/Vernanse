import { DatePicker, type DatePickerProps, Radio, type RadioChangeEvent } from 'antd';
import React, { useState } from 'react';

import CustomerFinancialTable from '../components/Financial/Customer/CustomerFinancialTable';
import EmployeeFinancialTable from '../components/Financial/Employee/EmployeeFinancialTable';

export default function Financial({ user_role }: { user_role: string }) {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const [filterValue, setFilterValue] = useState('all');

  const filterValueChange = (e: RadioChangeEvent) => {
    setFilterValue(e.target.value);
  };
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-medium text-darkGreen">Invoice List</p>
      <div className="flex flex-col gap-8">
        {(user_role === 'designer' ||
          user_role === 'producer' ||
          user_role === 'installer') && (
          <>
            <div className="flex flex-col gap-3 md:flex-row md:gap-6">
              <DatePicker
                onChange={onChange}
                placeholder="Invoice Date"
                className="w-60"
                // size={'large'}
              />

              <DatePicker
                onChange={onChange}
                placeholder="Deadline"
                className="w-60"
                // size={'large'}
              />
              <Radio.Group
                value={filterValue}
                onChange={filterValueChange}
                // size={'large'}
              >
                <Radio.Button value="all">All</Radio.Button>
                <Radio.Button value="fullPaid">Full Paid</Radio.Button>
                <Radio.Button value="unpaid">Unpaid</Radio.Button>
              </Radio.Group>
            </div>
            <EmployeeFinancialTable />
          </>
        )}
        {user_role === 'customer' && <CustomerFinancialTable />}
      </div>
    </div>
  );
}
