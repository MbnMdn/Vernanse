import type { DatePickerProps, RadioChangeEvent } from 'antd';
import { Button } from 'antd';
import { DatePicker, Space } from 'antd';
import { Radio } from 'antd';
import React, { useState } from 'react';

import RequestsTable from '../components/Requests/Employee/RequestsTable';

export default function Requests() {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const [filterValue, setFilterValue] = useState('all');

  const filterValueChange = (e: RadioChangeEvent) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 md:flex-row md:gap-6">
        <DatePicker onChange={onChange} placeholder="Deadline" className="w-60" />
        <Radio.Group value={filterValue} onChange={filterValueChange}>
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="pending">Pending</Radio.Button>
          <Radio.Button value="accepted">Accepted</Radio.Button>
          <Radio.Button value="rejected">Rejected</Radio.Button>
        </Radio.Group>
      </div>
      <RequestsTable />
    </div>
  );
}
