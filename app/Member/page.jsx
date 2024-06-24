import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Member Dashboard',
};

const Member = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Member");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-600 text-white w-full p-6 text-center">
        <h1 className="text-3xl font-bold">EduLearn - Learning Path</h1>
      </header>

      <main className="flex-grow container mx-auto p-6">
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Welcome, {session?.user?.name}</h2>
          <p className="text-gray-600">{session?.user?.role}</p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Your Learning Path</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Course 1</h4>
              <p className="text-gray-600 mb-4">Introduction to Web Development</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      70%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div style={{ width: '70%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Course 2</h4>
              <p className="text-gray-600 mb-4">Advanced Data Science</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      45%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div style={{ width: '45%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Course 3</h4>
              <p className="text-gray-600 mb-4">Digital Marketing Strategies</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      85%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div style={{ width: '85%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white w-full p-6 text-center">
        <p>&copy; 2024 EduLearn. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Member;
