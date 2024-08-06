import ProjectCard from '../../Projects/ProjectCard';
import ScrollableCards from '../../ScrollableCards';

export default function RecentProjectsSection() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl font-medium text-darkGreen">Recent Projects</h2>
      <div className="">
        <ScrollableCards>
          <ProjectCard />
        </ScrollableCards>
      </div>
    </div>
  );
}
