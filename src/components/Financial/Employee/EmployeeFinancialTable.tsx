import React from 'react';

import Table from '../../Table';
export default function EmployeeFinancialTable() {
  const columns = [
    { header: 'Invoice Number', accessor: 'invoiceNumber' },
    { header: 'Date', accessor: 'date' },
    { header: 'Project', accessor: 'project' },
    { header: 'Customer', accessor: 'customer' },
    { header: 'Phone Number', accessor: 'phoneNumber' },
    { header: 'Price', accessor: 'price' },
    { header: 'Received/Paid', accessor: 'receivedPaid' },
    { header: 'Left Amount', accessor: 'leftAmount' },
    { header: 'Dead Line', accessor: 'deadline' },
    { header: 'Commission', accessor: 'commission' },
  ];

  const data = [
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'Dan',
      customer: 'Jordan',
      phoneNumber: '+1325456789',
      price: '1200$',
      receivedPaid: '+1200$',
      leftAmount: '0 $',
      deadline: '21/12/2024',
      commission: '125 $',
    },
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'Dan',
      customer: 'Jordan',
      phoneNumber: '+1325456789',
      price: '1200$',
      receivedPaid: '+1200$',
      leftAmount: '0 $',
      deadline: '21/12/2024',
      commission: '125 $',
    },
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'Dan',
      customer: 'Jordan',
      phoneNumber: '+1325456789',
      price: '1200$',
      receivedPaid: '+1200$',
      leftAmount: '0 $',
      deadline: '21/12/2024',
      commission: '125 $',
    },
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'Dan',
      customer: 'Jordan',
      phoneNumber: '+1325456789',
      price: '1200$',
      receivedPaid: '+1200$',
      leftAmount: '0 $',
      deadline: '21/12/2024',
      commission: '125 $',
    },
  ];

  return <Table columns={columns} data={data} />;
}
