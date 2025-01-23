import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import ProfileClient from './ProfileClient';

// Server component
const ProfilePage = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser();

  if (!isUserAuthenticated) {
    return (
      <div>
        <p>Redirecting to login...</p>
        <meta http-equiv="refresh" content="0; url=/" />
      </div>
    );
  }

  return <ProfileClient user={user} />;
};

export default ProfilePage;
