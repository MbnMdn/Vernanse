import React from 'react';

import Table from '../../Table';

export default function ProjectsTable() {
  const columns = [
    { header: 'Project Name', accessor: 'projectName' },
    { header: 'Customer', accessor: 'customer' },
    { header: 'Start Date', accessor: 'startDate' },
    { header: 'Due Date', accessor: 'dueDate' },
    { header: 'Status', accessor: 'status' },
    { header: 'Type', accessor: 'type' },
    { header: 'Debt Amount', accessor: 'debtAmount' },
    { header: 'Estimated Cost', accessor: 'estimatedCost' },
    { header: 'Commission', accessor: 'commission' },
    { header: 'Details', accessor: 'details' },
  ];

  const data = [
    {
      projectName: 'John Brown',
      customer: 'John Brown',
      startDate: '21/12/2024',
      dueDate: '21/12/2024',
      status: 'Active',
      type: 'Full Service',
      debtAmount: '0 $',
      estimatedCost: '1200$',
      commission: '125 $',
      details: 'show',
    },
    {
      projectName: 'John Brown',
      customer: 'John Brown',
      startDate: '21/12/2024',
      dueDate: '21/12/2024',
      status: 'Active',
      type: 'Full Service',
      debtAmount: '0 $',
      estimatedCost: '1200$',
      commission: '125 $',
      details: 'show',
    },
    {
      projectName: 'John Brown',
      customer: 'John Brown',
      startDate: '21/12/2024',
      dueDate: '21/12/2024',
      status: 'Active',
      type: 'Full Service',
      debtAmount: '0 $',
      estimatedCost: '1200$',
      commission: '125 $',
      details: 'show',
    },
    {
      projectName: 'John Brown',
      customer: 'John Brown',
      startDate: '21/12/2024',
      dueDate: '21/12/2024',
      status: 'Active',
      type: 'Full Service',
      debtAmount: '0 $',
      estimatedCost: '1200$',
      commission: '125 $',
      details: 'show',
    },
    {
      projectName: 'John Brown',
      customer: 'John Brown',
      startDate: '21/12/2024',
      dueDate: '21/12/2024',
      status: 'Active',
      type: 'Full Service',
      debtAmount: '0 $',
      estimatedCost: '1200$',
      commission: '125 $',
      details: 'show',
    },
  ];

  return <Table columns={columns} data={data} />;
}
