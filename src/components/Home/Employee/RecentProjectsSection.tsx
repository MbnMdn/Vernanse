import ScrollableCards from "../../ScrollableCards";
import ProjectCard from "../../Projects/ProjectCard";

export default function RecentProjectsSection() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-medium text-darkGreen">Recent Projects</h2>
      <ScrollableCards>
        <ProjectCard />
      </ScrollableCards>
    </div>
  );
}
