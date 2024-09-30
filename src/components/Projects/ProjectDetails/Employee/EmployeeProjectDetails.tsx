import React from 'react';
import { useParams } from 'react-router-dom';

import DownloadProjectFilesSection from './DownloadProjectFilesSection';
import EmployeeProjectInfoSection from './EmployeeProjectInfoSection';
import SelectedStyleSection from './SelectedStyleSection';

export default function EmployeeProjectDetails({ user_role }: { user_role: string }) {
  const { id } = useParams();
  // <div>Project {id}</div>

  return (
    <div className="flex flex-col gap-5">
      <EmployeeProjectInfoSection user_role={user_role} />
      {user_role === 'designer' && <SelectedStyleSection />}
      {(user_role === 'producer' || user_role === 'installer') && (
        <DownloadProjectFilesSection />
      )}
    </div>
  );
}
