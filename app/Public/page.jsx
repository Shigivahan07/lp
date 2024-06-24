import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Public = async () => {
  const session = await getServerSession(options);

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg text-gray-700">You need to be logged in to view this page.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <div className="flex items-center mb-6">
          <img
            src={session.user.image || "/default-avatar.png"}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{session.user.name}</h2>
            <p className="text-gray-600">{session.user.email}</p>
            <p className="text-gray-600 capitalize">{session.user.role}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Bio</h3>
            <p className="text-gray-700">This is a placeholder bio. You can add more details about yourself here.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <p className="text-gray-700">You can add your contact details here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Public;
