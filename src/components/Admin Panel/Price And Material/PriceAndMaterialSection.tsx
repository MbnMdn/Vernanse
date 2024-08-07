import { Select } from 'antd';
import React from 'react';

import EmployeeFinancialTable from '../../Financial/Employee/EmployeeFinancialTable';
import SearchBar from '../../SearchBar';

export default function PriceAndMaterialSection({ user_role }: { user_role: string }) {
  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex flex-col gap-5">
      {user_role === 'admin' && (
        <>
          <div className="flex flex-col justify-between gap-3 md:flex-row md:gap-6">
            <div className="flex gap-5">
              <Select
                showSearch
                className="w-44"
                placeholder="Status"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: 'available',
                    label: 'Available',
                  },
                  {
                    value: 'unavailable',
                    label: 'Unavailable',
                  },
                ]}
              />

              <Select
                showSearch
                className="w-44"
                placeholder="Color"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: 'red',
                    label: 'Red',
                  },
                  {
                    value: 'blue',
                    label: 'Blue',
                  },
                  {
                    value: 'green',
                    label: 'Green',
                  },
                  {
                    value: 'black',
                    label: 'Black',
                  },
                ]}
              />
            </div>

            <SearchBar placeholder={'Search'} />
          </div>
          <EmployeeFinancialTable />
        </>
      )}
    </div>
  );
}
