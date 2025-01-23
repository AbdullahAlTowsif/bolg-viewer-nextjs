'use client';

import { useRouter } from 'next/navigation';

const ProfileClient = ({ user }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Perform logout logic, then navigate to login
    router.push('/logout');
  };

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
};

export default ProfileClient;
