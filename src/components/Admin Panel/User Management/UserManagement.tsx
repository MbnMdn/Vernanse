import {
  DatePicker,
  type DatePickerProps,
  Radio,
  type RadioChangeEvent,
  Select,
} from 'antd';
import React, { useState } from 'react';

import EmployeeFinancialTable from '../../Financial/Employee/EmployeeFinancialTable';

export default function UserManagement({ user_role }: { user_role: string }) {
  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const [filterValue, setFilterValue] = useState('all');

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const filterValueChange = (e: RadioChangeEvent) => {
    setFilterValue(e.target.value);
  };
  return (
    <div className="flex flex-col gap-5">
      {user_role === 'admin' && (
        <>
          <div className="flex flex-col gap-3 md:flex-row md:gap-6">
            <DatePicker
              onChange={onChangeDate}
              placeholder="Create Date"
              className="w-44"
              // size={'large'}
            />

            <Select
              showSearch
              className="w-44"
              placeholder="Status"
              optionFilterProp="label"
              onChange={onChange}
              onSearch={onSearch}
              options={[
                {
                  value: 'active',
                  label: 'Active',
                },
                {
                  value: 'inactive',
                  label: 'Inactive',
                },
                {
                  value: 'overdue',
                  label: 'Over Due',
                },
                {
                  value: 'debtor',
                  label: 'Debtor',
                },
              ]}
            />

            <Select
              showSearch
              className="w-44"
              placeholder="Type"
              optionFilterProp="label"
              onChange={onChange}
              onSearch={onSearch}
              options={[
                {
                  value: 'measure',
                  label: 'Measure',
                },
                {
                  value: 'producer',
                  label: 'Producer',
                },
                {
                  value: 'installer',
                  label: 'Installer',
                },
                {
                  value: 'designer',
                  label: 'Designer',
                },
              ]}
            />

            <Radio.Group value={filterValue} onChange={filterValueChange}>
              <Radio.Button value="all">All</Radio.Button>
              <Radio.Button value="custoemr">Customer</Radio.Button>
              <Radio.Button value="serviceProvider">Service Provider</Radio.Button>
            </Radio.Group>
          </div>
          <EmployeeFinancialTable />
        </>
      )}
    </div>
  );
}
