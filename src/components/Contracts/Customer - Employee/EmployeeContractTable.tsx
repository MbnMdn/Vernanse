import React from 'react';

import Table from '../../Table';

export default function EmployeeContractTable() {
  const columns = [
    { header: 'Project Name', accessor: 'projectName' },
    { header: 'Customer', accessor: 'customer' },
    { header: 'Price', accessor: 'price' },
    { header: 'Service Type', accessor: 'serviceType' },
    { header: 'Phone Number', accessor: 'phoneNumber' },
    { header: 'Address', accessor: 'address' },
    { header: 'Sign Date', accessor: 'signDate' },
    { header: 'Dead Line', accessor: 'deadLine' },
    { header: 'Details', accessor: 'details' },
  ];

  const data = [
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      price: '250$',
      serviceType: 'Full Service',
      phoneNumber: '+1325456789',
      address: 'New York No. 1 Lake Park',
      signDate: '02/11/2024',
      deadLine: '21/12/2024',
      details: 'details',
    },
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      price: '250$',
      serviceType: 'Full Service',
      phoneNumber: '+1325456789',
      address: 'New York No. 1 Lake Park',
      signDate: '02/11/2024',
      deadLine: '21/12/2024',
      details: 'details',
    },
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      price: '250$',
      serviceType: 'Full Service',
      phoneNumber: '+1325456789',
      address: 'New York No. 1 Lake Park',
      signDate: '02/11/2024',
      deadLine: '21/12/2024',
      details: 'details',
    },
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      price: '250$',
      serviceType: 'Full Service',
      phoneNumber: '+1325456789',
      address: 'New York No. 1 Lake Park',
      signDate: '02/11/2024',
      deadLine: '21/12/2024',
      details: 'details',
    },
    {
      projectName: 'John Brown',
      customer: 'Jordan',
      price: '250$',
      serviceType: 'Full Service',
      phoneNumber: '+1325456789',
      address: 'New York No. 1 Lake Park',
      signDate: '02/11/2024',
      deadLine: '21/12/2024',
      details: 'details',
    },
  ];

  return <Table columns={columns} data={data} />;
}
