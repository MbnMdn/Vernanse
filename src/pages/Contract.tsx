import ContractsSection from '../components/Contracts/ContractsSection';
export default function Contract({ user_role }: { user_role: string }) {
  return <ContractsSection user_role={user_role} />;
}
