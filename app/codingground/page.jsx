"use client";

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import MonacoEditor from '../(components)/MonacoEditor'; 

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
     <main className="p-6 w-full flex-grow">
        <div className="container mx-auto">
          <MonacoEditor />
        </div>
      </main>
    </div>
  );
};

export default Member;
