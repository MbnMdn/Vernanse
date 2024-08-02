import React from 'react';

import Table from '../Table';
export default function FinancialTable() {
  const columns = [
    { header: 'Invoice Number', accessor: 'invoiceNumber' },
    { header: 'Date', accessor: 'date' },
    { header: 'Project', accessor: 'project' },
    { header: 'Provider', accessor: 'provider' },
    { header: 'Amount', accessor: 'amount' },
    { header: 'Paid', accessor: 'paid' },
    { header: 'Left Amount', accessor: 'leftAmount' },
    { header: 'Dead Line', accessor: 'deadLine' },
    { header: 'Commission', accessor: 'commission' },
    { header: 'Detail', accessor: 'detail' },
  ];

  const data = [
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'Dan',
      provider: 'Jordan',
      amount: '1200 $',
      paid: '+1200 $',
      leftAmount: '0 $',
      deadLine: '21/12/2024',
      commission: '125 $',
      detail: 'open',
    },
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'name 2',
      provider: 'AB',
      amount: '800 $',
      paid: '0 $',
      leftAmount: '800 $',
      deadLine: '21/12/2024',
      commission: '200 $',
      detail: 'open',
    },
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'name 3',
      provider: 'Monda',
      amount: '250 $',
      paid: '-250 $',
      leftAmount: '0 $',
      deadLine: '21/12/2024',
      commission: '50 $',
      detail: 'open',
    },
    {
      invoiceNumber: '#212533',
      date: '21/12/2024',
      project: 'name 4',
      provider: 'AM',
      amount: '1200 $',
      paid: '+200 $',
      leftAmount: '1000 $',
      deadLine: '21/12/2024',
      commission: '80 $',
      detail: 'open',
    },
  ];

  return <Table columns={columns} data={data} />;
}
