import React from 'react';

import Table from '../Table';

export default function ContractTable() {
  const columns = [
    { header: 'Project Name', accessor: 'projectName' },
    { header: 'Provider', accessor: 'provider' },
    { header: 'Address', accessor: 'address' },
    { header: 'Contact Person', accessor: 'contactPerson' },
    { header: 'Phone Number', accessor: 'phoneNumber' },
    { header: 'Type', accessor: 'type' },
    { header: 'Sign Date', accessor: 'signDate' },
    { header: 'Dead Line', accessor: 'deadLine' },
  ];

  const data = [
    {
      projectName: 'John Brown',
      provider: 'Jordan',
      address: 'New York No. 1 Lake Park',
      contactPerson: 'Dan Michel',
      phoneNumber: '+1325456789',
      type: 'Producer',
      signDate: '02/11/2024',
      deadLine: '21/12/2024',
    },
    {
      projectName: 'Jim Green',
      provider: 'AB',
      address: 'London No. 1 Lake Park',
      contactPerson: 'John Brown',
      phoneNumber: '+1325456789',
      type: 'Designer',
      signDate: '-',
      deadLine: '21/12/2024',
    },
    {
      projectName: 'Joe Black',
      provider: 'Monda',
      address: 'Sidney No. 1 Lake Park',
      contactPerson: 'Jim Green',
      phoneNumber: '+1325456789',
      type: 'Installer',
      signDate: '-',
      deadLine: '21/12/2024',
    },
    {
      projectName: 'Edward King',
      provider: 'AM',
      address: 'LA No. 1 Lake Park',
      contactPerson: 'Joe Black',
      phoneNumber: '+1325456789',
      type: 'Producer',
      signDate: '02/11/2024',
      deadLine: '21/12/2024',
    },
  ];

  return <Table columns={columns} data={data} />;
}
