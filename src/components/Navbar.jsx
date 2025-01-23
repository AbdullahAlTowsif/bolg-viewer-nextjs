import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Navbar() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser();
    console.log(user);

    return (
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
            <div>
                <a href="/" className="text-lg font-bold">My Website</a>
            </div>
            <div className='space-x-5'>
                <Link href={'/'}>Home</Link>
                <Link href={'/profile'}>Profile</Link>
            </div>
            <div>
                {isUserAuthenticated ? (
                    <>
                        <span className="mr-4">Welcome, {user?.name || 'User'}!</span>
                        <LoginLink>Sign in</LoginLink>
                        <LogoutLink>Log out</LogoutLink>
                    </>
                ) : (
                    <RegisterLink>Sign up</RegisterLink>
                )}
            </div>
        </nav>
    );
}
