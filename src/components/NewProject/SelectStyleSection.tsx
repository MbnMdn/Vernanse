import StyleCard from '../Home/Customer/StyleCard';
import ScrollableCards from '../ScrollableCards';

export default function SelectStyleSection() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-medium text-darkGreen">Select Style</h2>
      <ScrollableCards>
        <StyleCard />
      </ScrollableCards>
    </div>
  );
}
