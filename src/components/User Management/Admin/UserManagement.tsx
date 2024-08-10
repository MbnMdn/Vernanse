import {
  DatePicker,
  type DatePickerProps,
  Radio,
  type RadioChangeEvent,
  Select,
} from 'antd';
import React, { useState } from 'react';

import EmployeeFinancialTable from '../../Financial/Admin - Employee/EmployeeFinancialTable';
import ListOfCustomers from './ListOfCustomers';
import ListOfEmployees from './ListOfEmployees';

export default function UserManagement({ user_role }: { user_role: string }) {
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
        <>
          <div className="flex flex-col gap-3 md:gap-6 lg:flex-row">
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
              options={
                userType === 'customers'
                  ? [
                      {
                        value: 'active',
                        label: 'Active',
                      },
                      {
                        value: 'inactive',
                        label: 'Inactive',
                      },
                      {
                        value: 'debtor',
                        label: 'Debtor',
                      },
                    ]
                  : [
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
                    ]
              }
            />

            <Select
              disabled={userType === 'customers'}
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

            <Radio.Group value={userType} onChange={filterValueChange}>
              <Radio.Button value="customers">Customers</Radio.Button>
              <Radio.Button value="serviceProviders">Service Providers</Radio.Button>
            </Radio.Group>
          </div>

          {userType === 'customers' && <ListOfCustomers />}
          {userType === 'serviceProviders' && <ListOfEmployees />}
        </>
      )}
    </div>
  );
}
