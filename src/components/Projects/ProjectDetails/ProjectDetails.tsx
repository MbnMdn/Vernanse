import React from 'react';
import { useParams } from 'react-router-dom';

import CustomerProjectDetails from './Customer/CustomerProjectDetails';
import EmployeeProjectDetails from './Employee/EmployeeProjectDetails';

export default function ProjectDetails({ user_role }: { user_role: string }) {
  const { id } = useParams();
  // <div>Project {id}</div>

  return (
    <div>
      {user_role === 'customer' && <CustomerProjectDetails />}
      {user_role === 'designer' && <EmployeeProjectDetails user_role={user_role} />}
      {user_role === 'producer' && <EmployeeProjectDetails user_role={user_role} />}
      {user_role === 'installer' && <EmployeeProjectDetails user_role={user_role} />}
    </div>
  );
}
