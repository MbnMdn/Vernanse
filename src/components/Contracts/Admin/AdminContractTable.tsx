import React from 'react';

import Table from '../../Table';

export default function AdminContractTable() {
  const columns = [
    { header: 'Project Name', accessor: 'projectName' },
    { header: 'Customer', accessor: 'customer' },
    { header: 'Order Type', accessor: 'orderType' },
    { header: 'Price', accessor: 'price' },
    { header: 'Commission', accessor: 'commission' },
    { header: 'Sign Date', accessor: 'signDate' },
    { header: 'Dead Line', accessor: 'deadLine' },
    { header: 'Details', accessor: 'details' },
  ];

  const data = [
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      orderType: '250$',
      price: 'Full Service',
      commission: '+1325456789',
      signDate: '02/11/2024',
      deadLine: '21/12/2024',
      details: 'details',
    },
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      orderType: '250$',
      price: 'Full Service',
      commission: '+1325456789',
      signDate: '02/11/2024',
      deadLine: '21/12/2024',
      details: 'details',
    },
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      orderType: '250$',
      price: 'Full Service',
      commission: '+1325456789',
      signDate: '02/11/2024',
      deadLine: '21/12/2024',
      details: 'details',
    },
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      orderType: '250$',
      price: 'Full Service',
      commission: '+1325456789',
      signDate: '02/11/2024',
      deadLine: '21/12/2024',
      details: 'details',
    },
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      orderType: '250$',
      price: 'Full Service',
      commission: '+1325456789',
      signDate: '02/11/2024',
      deadLine: '21/12/2024',
      details: 'details',
    },
  ];

  return <Table columns={columns} data={data} />;
}
