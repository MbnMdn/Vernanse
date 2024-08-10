import React from 'react';

import Table from '../../Table';

export default function ListOfCustomers() {
  const columns = [
    { header: 'Full Name', accessor: 'fullName' },
    { header: 'Username', accessor: 'username' },
    { header: 'Phone Number', accessor: 'phoneNumber' },
    { header: 'Create Date', accessor: 'createDate' },
    { header: 'Status', accessor: 'status' },
    { header: 'Orders', accessor: 'orders' },
    { header: 'Debt', accessor: 'debt' },
    { header: 'Total Transaction', accessor: 'totalTransaction' },
    { header: 'Commission', accessor: 'commission' },
    { header: 'Profile', accessor: 'profile' },
  ];

  const data = [
    {
      fullName: 'John Brown',
      username: 'John Brown',
      phoneNumber: '+1325456789',
      createDate: '21/12/2024',
      status: 'Active',
      orders: '5',
      debt: '0 $',
      totalTransaction: '1200$',
      commission: '125 $',
      profile: 'open',
    },
    {
      fullName: 'John Brown',
      username: 'John Brown',
      phoneNumber: '+1325456789',
      createDate: '21/12/2024',
      status: 'Active',
      orders: '5',
      debt: '0 $',
      totalTransaction: '1200$',
      commission: '125 $',
      profile: 'open',
    },
    {
      fullName: 'John Brown',
      username: 'John Brown',
      phoneNumber: '+1325456789',
      createDate: '21/12/2024',
      status: 'Active',
      orders: '5',
      debt: '0 $',
      totalTransaction: '1200$',
      commission: '125 $',
      profile: 'open',
    },
    {
      fullName: 'John Brown',
      username: 'John Brown',
      phoneNumber: '+1325456789',
      createDate: '21/12/2024',
      status: 'Active',
      orders: '5',
      debt: '0 $',
      totalTransaction: '1200$',
      commission: '125 $',
      profile: 'open',
    },
  ];

  return <Table columns={columns} data={data} />;
}
