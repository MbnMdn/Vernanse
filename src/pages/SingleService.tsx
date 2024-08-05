import CustomerSingleService from '../components/SingleService/Customer/CustomerSingleService';
import EmployeeSingleService from '../components/SingleService/Employee/EmployeeSingleService';

export default function SingleService({ user_role }: { user_role: string }) {
  return (
    <>
      {user_role === 'customer' && <CustomerSingleService />}
      {user_role === 'designer' && <EmployeeSingleService  user_role={user_role}/>}
    </>
  );
}
