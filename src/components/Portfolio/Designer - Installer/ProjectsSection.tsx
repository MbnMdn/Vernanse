import StyleCard from '../../Home/Customer/StyleCard';
import ScrollableCards from '../../ScrollableCards';

export default function ProjectsSection() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-medium text-darkGreen">Projects</h2>
      <ScrollableCards>
        <StyleCard />
      </ScrollableCards>
    </div>
  );
}
