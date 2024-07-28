import Progressbar from "./Progressbar";
import ProjectCard from "./ProjectCard";

export default function FullServiceSection(){
  return(
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-medium text-darkGreen">Full Service</h2>
      <div className="flex flex-row gap-10">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}