import Progressbar from './Progressbar';
import ProjectCard from './ProjectCard';

export default function SingleServiceSection() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-medium text-darkGreen">Single Service</h2>
      <div className="flex flex-row gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
