import NewTicketSection from '../components/HelpAndSupport/Customer - Employee/NewTicketSection';
import TicketsSection from '../components/HelpAndSupport/Customer - Employee/TicketsSection';

export default function HelpAndSupport() {
  return (
    <div className="flex flex-col gap-10">
      <TicketsSection />
      <NewTicketSection />
    </div>
  );
}
