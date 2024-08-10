import React from 'react';

import AdminAndEmployeeFinancialSection from '../components/Financial/Admin - Employee/AdminAndEmployeeFinancialSection';
import CustomerFinancialTable from '../components/Financial/Customer/CustomerFinancialTable';

export default function Financial({ user_role }: { user_role: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-medium text-darkGreen">Invoice List</p>
      {(user_role === 'designer' ||
        user_role === 'producer' ||
        user_role === 'admin' ||
        user_role === 'installer') && (
        <AdminAndEmployeeFinancialSection user_role={user_role} />
      )}
      {user_role === 'customer' && <CustomerFinancialTable />}
    </div>
  );
}
