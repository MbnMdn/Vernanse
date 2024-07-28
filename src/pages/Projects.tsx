import { Fa0 } from "react-icons/fa6";
import FullServiceSection from "../components/Projects/FullServiceSection";
import SingleServiceSection from "../components/Projects/SingleServiceSection";

export default function Projects() {
  return <div className="h-full flex flex-col gap-8">
    <FullServiceSection />
    <SingleServiceSection />
  </div>;
}
