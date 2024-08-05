import AddNewSection from '../components/Portfolio/AddNewSection';
import ProjectsSection from '../components/Portfolio/ProjectsSection';

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-5">
      <ProjectsSection />
      <AddNewSection />
    </div>
  );
}
