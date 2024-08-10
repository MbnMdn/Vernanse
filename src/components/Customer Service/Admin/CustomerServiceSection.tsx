import {
  DatePicker,
  type DatePickerProps,
  type RadioChangeEvent,
  Select,
} from 'antd';
import React, { useState } from 'react';

import SearchBar from '../../SearchBar';
import CustomerServiceTable from './CustomerServiceTable';

export default function CustomerServiceSection() {
  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const [userType, setUserType] = useState('customers');

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const filterValueChange = (e: RadioChangeEvent) => {
    setUserType(e.target.value);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col justify-between gap-3  md:gap-6 lg:flex-row">
          <div className="flex  flex-col gap-3 md:gap-6 lg:flex-row">
            <DatePicker
              onChange={onChangeDate}
              placeholder="Start Date"
              className="w-44"
              // size={'large'}
            />

            <Select
              showSearch
              className="w-44"
              placeholder="User Type"
              optionFilterProp="label"
              onChange={onChange}
              onSearch={onSearch}
              options={[
                {
                  value: 'installer',
                  label: 'Installer',
                },
                {
                  value: 'provider',
                  label: 'Provider',
                },
                {
                  value: 'designer',
                  label: 'Designer',
                },
                {
                  value: 'customer',
                  label: 'Customer',
                },
              ]}
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
                  value: 'new',
                  label: 'New',
                },
                {
                  value: 'red',
                  label: 'Red',
                },
              ]}
            />
          </div>

          <SearchBar placeholder={'Search'} />
        </div>
        <CustomerServiceTable />
      </div>
    </div>
  );
}
