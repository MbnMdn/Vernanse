import NewTicketForm from './NewTicketForm';

export default function NewTicketSection() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-medium text-darkGreen">New Ticket</p>
      <NewTicketForm />
    </div>
  );
}
