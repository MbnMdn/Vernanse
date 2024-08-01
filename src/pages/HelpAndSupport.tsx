import NewTicketSection from '../components/HelpAndSupport/NewTicketSection';
import TicketsSection from '../components/HelpAndSupport/TicketsSection';

export default function HelpAndSupport() {
  return (
    <div className="flex flex-col gap-10">
      <TicketsSection />
      <NewTicketSection />
    </div>
  );
}
