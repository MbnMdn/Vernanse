import AdminContractSection from '../components/Contracts/Admin/AdminContractSection';
import CustomerAndEmployeeContractSection from '../components/Contracts/Customer - Employee/CustomerAndEmployeeContractSection';
export default function Contract({ user_role }: { user_role: string }) {
  return (
    <>
      {user_role === 'admin' ? (
        <AdminContractSection user_role={user_role} />
      ) : (
        <CustomerAndEmployeeContractSection user_role={user_role} />
      )}
    </>
  );
}
