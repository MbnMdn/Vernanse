import React from 'react';

import Table from '../../Table';
export default function RequestsTable() {
  const columns = [
    { header: 'Project Name', accessor: 'projectName' },
    { header: 'Customer', accessor: 'customer' },
    { header: 'Customer Type', accessor: 'customerType' },
    { header: 'Service Type', accessor: 'serviceType' },
    { header: 'Description', accessor: 'description' },
    { header: 'Dead Line', accessor: 'deadLine' },
    { header: 'Phone Number', accessor: 'phoneNumber' },
    { header: 'Status', accessor: 'status' },
    { header: 'Details', accessor: 'details' },
  ];

  const data = [
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      customerType: 'Producer',
      serviceType: 'Full Service',
      description: 'Need to design kitchen ...',
      deadLine: '21/12/2024',
      phoneNumber: '+1325456789',
      status: 'Accepted',
      details: 'show',
    },
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      customerType: 'Producer',
      serviceType: 'Full Service',
      description: 'Need to design kitchen ...',
      deadLine: '21/12/2024',
      phoneNumber: '+1325456789',
      status: 'Accepted',
      details: 'show',
    },
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      customerType: 'Producer',
      serviceType: 'Full Service',
      description: 'Need to design kitchen ...',
      deadLine: '21/12/2024',
      phoneNumber: '+1325456789',
      status: 'Accepted',
      details: 'show',
    },
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      customerType: 'Producer',
      serviceType: 'Full Service',
      description: 'Need to design kitchen ...',
      deadLine: '21/12/2024',
      phoneNumber: '+1325456789',
      status: 'Accepted',
      details: 'show',
    },
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      customerType: 'Producer',
      serviceType: 'Full Service',
      description: 'Need to design kitchen ...',
      deadLine: '21/12/2024',
      phoneNumber: '+1325456789',
      status: 'Accepted',
      details: 'show',
    },
  ];

  return <Table columns={columns} data={data} />;
}
