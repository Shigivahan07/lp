const Home = () => {
  return (
<div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to EduLearn</h2>
          <p className="text-lg mb-6">Your one-stop platform for a world-class learning experience.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Get Started</button>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Popular Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-xl font-bold mb-2">Course 1</h4>
              <p className="mb-4">Learn the basics of web development with this comprehensive course.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enroll Now</button>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-xl font-bold mb-2">Course 2</h4>
              <p className="mb-4">Master data science and analytics with real-world projects.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enroll Now</button>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-xl font-bold mb-2">Course 3</h4>
              <p className="mb-4">Become an expert in digital marketing with our advanced course.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enroll Now</button>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Why Choose EduLearn?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-md text-center">
              <h4 className="text-xl font-bold mb-2">Expert Instructors</h4>
              <p>Learn from industry experts with real-world experience.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md text-center">
              <h4 className="text-xl font-bold mb-2">Flexible Learning</h4>
              <p>Access courses at your own pace, anytime, anywhere.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md text-center">
              <h4 className="text-xl font-bold mb-2">Community Support</h4>
              <p>Join a vibrant community of learners and educators.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black rounded-full text-white py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 EduLearn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
};

export default Home;
