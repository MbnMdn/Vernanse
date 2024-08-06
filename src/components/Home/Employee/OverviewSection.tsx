import IncomeSection from './IncomeSection';
import ProjectsStatusSection from './ProjectsStatusSection';

export default function OverviewSection() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl font-medium text-darkGreen">Overview</h2>
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-stretch">
        <ProjectsStatusSection />
        <IncomeSection />
      </div>
    </div>
  );
}
