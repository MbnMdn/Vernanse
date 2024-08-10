import TicketsTable from './TicketsTable';

export default function TicketsSection() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-medium text-darkGreen">Tickets</p>
      <TicketsTable />
    </div>
  );
}
