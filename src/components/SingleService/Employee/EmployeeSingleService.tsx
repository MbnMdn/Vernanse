import { Select } from 'antd';
import React from 'react';

import SelectSingleService from './SelectSingleService';
import SingleServiceForm from "./SingleServiceForm";
export default function EmployeeSingleService({ user_role }: { user_role: string }) {
  return (
    <div className="mt-5">
      <SingleServiceForm user_role={user_role}/>
    </div>
  );
}
