"use client";

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Member = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push("/api/auth/signin?callbackUrl=/ClientMember");
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <head>
        <title>{session?.user?.name} - Dashboard</title>
      </head>
      <div className="flex-grow">
        <header className="bg-white shadow p-6">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Welcome, {session?.user?.name}</h2>
              <p className="text-gray-600">{session?.user?.role}</p>
            </div>
            <div>
              <img src={session?.user?.image} alt="User Avatar" className="w-10 h-10 rounded-full" />
            </div>
          </div>
        </header>

        <main className="p-6">
          <section className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-semibold mb-4">My Courses</h3>
                <p>View and manage your enrolled courses.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Go to Courses</button>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-semibold mb-4">Progress</h3>
                <p>Track your learning progress and achievements.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Progress</button>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-semibold mb-4">Settings</h3>
                <p>Update your account settings and preferences.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Account Settings</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Member;
