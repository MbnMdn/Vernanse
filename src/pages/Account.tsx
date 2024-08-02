import React from 'react';

import UserInfoSection from '../components/Account/UserInfoSection';

const user = {
  // photo: { man },
  fullName: 'John Brown',
  username: 'John',
  email: 'john@email.com',
  phoneNumber: '123456789',
  Address: 'New York No. 1 Lake Park',
};

export default function Account() {
  return <UserInfoSection user={user} />;
}
