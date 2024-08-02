import React from 'react';
import Table from '../Table';

export default function TicketsTable() {
  const columns = [
    { header: 'Ticket Number', accessor: 'ticketNumber' },
    { header: 'Date', accessor: 'date' },
    { header: 'Project Name', accessor: 'projectName' },
    { header: 'Subject', accessor: 'subject' },
    { header: 'Description', accessor: 'description' },
    { header: 'Status', accessor: 'status' },
    { header: 'Details', accessor: 'details' }
  ];

  const data = [
    {
      ticketNumber: '#212533',
      date: '21/12/2024',
      projectName: 'Jordan',
      subject: 'Jordan',
      description: 'Need to design kitchen ...',
      status: 'Answered',
      details: 'Answered'
    },
    {
      ticketNumber: '#212533',
      date: '21/12/2024',
      projectName: 'AB',
      subject: 'AB',
      description: 'Need to design kitchen ...',
      status: 'Answered',
      details: 'Answered'
    },
    {
      ticketNumber: '#212533',
      date: '21/12/2024',
      projectName: 'Monda',
      subject: 'Monda',
      description: 'Need to design kitchen ...',
      status: 'Answered',
      details: 'Pending'
    },
    {
      ticketNumber: '#212533',
      date: '21/12/2024',
      projectName: 'AM',
      subject: 'AM',
      description: 'Need to design kitchen ...',
      status: 'Answered',
      details: 'Pending'
    }
  ];

  return (
    <div className="overflow-x-auto">
      <Table columns={columns} data={data} />
    </div>
  );
}
