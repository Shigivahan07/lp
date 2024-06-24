import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);
  const isAdmin = session?.user?.role === 'admin';
  return (
    <header className="bg-white text-white">
      <nav className="flex justify-between items-center ml-5 mr-5 px-10 rounded-full mt-7 py-4 bg-black">
      <Link href="/" className="pr-10">EDULEARN</Link>
        <div className="flex gap-10 items-center">
        {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
          {isAdmin ? (
            <Link href="/CreateUser">CreateUser</Link>
          ) : (
            <Link href="/codingground">CodingGround</Link>
          )}
          <Link href="/ClientMember">DASHBOARD</Link>
          <Link href="/Member">LEARNINGPATH</Link>
          <Link href="/Public">Profile</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
