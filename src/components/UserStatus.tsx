// src/components/UserStatus.tsx
'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const UserStatus = () => {
  const currentUsername = useSelector((state: RootState) => state.auth.currentUsername);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <div className="absolute top-4 right-4">
      {isLoggedIn ? (
        <p>Current User: {currentUsername}</p>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default UserStatus;