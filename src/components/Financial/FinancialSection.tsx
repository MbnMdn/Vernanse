import FinancialTable from './FinancialTable';

export default function FinancialSection() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-medium text-darkGreen">Invoice List</p>
      <FinancialTable />
    </div>
  );
}
