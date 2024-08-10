import React from 'react';

import Table from '../../Table';

export default function CustomerServiceTable() {
  const columns = [
    { header: 'Date', accessor: 'date' },
    { header: 'User Type', accessor: 'userType' },
    { header: 'Subject', accessor: 'subject' },
    { header: 'Status', accessor: 'status' },
    { header: 'Details', accessor: 'details' },
  ];

  const data = [
    {
      date: '21/12/2024',
      userType: 'Customer',
      subject: 'Jordan',
      status: 'Active',
      details: 'show',
    },
    {
      date: '21/12/2024',
      userType: 'Customer',
      subject: 'Jordan',
      status: 'Active',
      details: 'show',
    },
    {
      date: '21/12/2024',
      userType: 'Customer',
      subject: 'Jordan',
      status: 'Active',
      details: 'show',
    },
    {
      date: '21/12/2024',
      userType: 'Customer',
      subject: 'Jordan',
      status: 'Active',
      details: 'show',
    },
    {
      date: '21/12/2024',
      userType: 'Customer',
      subject: 'Jordan',
      status: 'Active',
      details: 'show',
    },
  ];

  return <Table columns={columns} data={data} />;
}
