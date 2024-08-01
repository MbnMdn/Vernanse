import ScrollableCards from '../ScrollableCards';
import StyleCard from './StyleCard';

export default function NewStylesSection() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-medium text-darkGreen">New Styles</h2>
      <ScrollableCards>
        <StyleCard />
      </ScrollableCards>
    </div>
  );
}
