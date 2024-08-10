import AddNewSection from '../components/Portfolio/Designer - Installer/AddNewSection';
import ProjectsSection from '../components/Portfolio/Designer - Installer/ProjectsSection';

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-5">
      <ProjectsSection />
      <AddNewSection />
    </div>
  );
}
