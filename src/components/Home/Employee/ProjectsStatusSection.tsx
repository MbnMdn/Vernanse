import ProjectStatusCard from './ProjectStatusCard';

export default function ProjectsStatusSection() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <ProjectStatusCard title="Done Projects" number={11} />
      <ProjectStatusCard title="In Progress" number={2} />
      <ProjectStatusCard title="Pending" number={0} />
      <ProjectStatusCard title="Delay" number={1} />
    </div>
  );
}
