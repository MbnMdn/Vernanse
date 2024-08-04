import ProjectStatusCard from './ProjectStatusCard';
import IncomeCard from "./IncomeCard";

export default function IncomeSection() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <IncomeCard title="Future Revenue" number={458} />
      <IncomeCard title="Total Earning" number={2500} />
      <IncomeCard title="Comission" number={250} />
    </div>
  );
}
