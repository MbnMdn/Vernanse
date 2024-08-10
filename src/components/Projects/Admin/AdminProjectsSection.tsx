import {
  DatePicker,
  type DatePickerProps,
  Radio,
  type RadioChangeEvent,
  Select,
} from 'antd';
import React, { useState } from 'react';

import SearchBar from '../../SearchBar';
import ProjectsTable from './ProjectsTable';

export default function AdminProjectsSection({ user_role }: { user_role: string }) {
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
      {user_role === 'admin' && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col justify-between gap-3  md:gap-6 lg:flex-row">
            <div className="flex  flex-col gap-3 md:gap-6 lg:flex-row">
              <DatePicker
                onChange={onChangeDate}
                placeholder="Start Date"
                className="w-44"
                // size={'large'}
              />

              <DatePicker
                onChange={onChangeDate}
                placeholder="Due Date"
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
                    value: 'done',
                    label: 'Done',
                  },
                  {
                    value: 'debtor',
                    label: 'Debtor',
                  },
                ]}
              />
            </div>

            <SearchBar placeholder={'Search'} />
          </div>
          <ProjectsTable />
        </div>
      )}
    </div>
  );
}
