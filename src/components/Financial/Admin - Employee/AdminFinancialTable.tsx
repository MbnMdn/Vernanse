import React from 'react';

import Table from '../../Table';
export default function AdminFinancialTable() {
  const columns = [
    { header: 'Invoice Number', accessor: 'invoiceNumber' },
    { header: 'Date', accessor: 'date' },
    { header: 'Project', accessor: 'project' },
    { header: 'Customer', accessor: 'customer' },
    { header: 'Service Provider', accessor: 'serviceProvider' },
    { header: 'Price', accessor: 'price' },
    { header: 'Status', accessor: 'status' },
    { header: 'Dead Line', accessor: 'deadline' },
    { header: 'Commission', accessor: 'commission' },
  ];

  const data = [
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'Dan',
      customer: 'Jordan',
      serviceProvider: '+1325456789',
      price: '1200$',
      status: '0 $',
      deadline: '21/12/2024',
      commission: '125 $',
    },
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'Dan',
      customer: 'Jordan',
      serviceProvider: '+1325456789',
      price: '1200$',
      status: '0 $',
      deadline: '21/12/2024',
      commission: '125 $',
    },
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'Dan',
      customer: 'Jordan',
      serviceProvider: '+1325456789',
      price: '1200$',
      status: '0 $',
      deadline: '21/12/2024',
      commission: '125 $',
    },
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'Dan',
      customer: 'Jordan',
      serviceProvider: '+1325456789',
      price: '1200$',
      status: '0 $',
      deadline: '21/12/2024',
      commission: '125 $',
    },
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'Dan',
      customer: 'Jordan',
      serviceProvider: '+1325456789',
      price: '1200$',
      status: '0 $',
      deadline: '21/12/2024',
      commission: '125 $',
    },
  ];

  return <Table columns={columns} data={data} />;
}
