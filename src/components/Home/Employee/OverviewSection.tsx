import ScrollableCards from '../../ScrollableCards';
import StyleCard from '../Customer/StyleCard';
import IncomeCard from './IncomeCard';
import ProjectsStatusSection from './ProjectsStatusSection';
import IncomeSection from "./IncomeSection";

export default function OverviewSection() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-medium text-darkGreen">Overview</h2>
      <div className="flex gap-5">
        <ProjectsStatusSection />
        <IncomeSection />
      </div>
    </div>
  );
}
