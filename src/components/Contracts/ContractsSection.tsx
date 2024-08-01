import ContractTable from './ContractsTable';

export default function ContractsSection() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-medium text-darkGreen">Contracts List</p>
      <ContractTable />
    </div>
  );
}
