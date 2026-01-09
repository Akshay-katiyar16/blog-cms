import { useNavigate } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";

const Home = () => {
  const navigate = useNavigate();
  const { blogs } = useBlogs();
  const latestBlogs = blogs.slice(0, 3);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            Share Your Ideas <br /> with the World
          </h1>

          <p className="text-lg opacity-90 mb-10">
            A modern blogging platform built with React & TypeScript.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/blogs")}
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Explore Blogs
            </button>

            <button
              onClick={() => navigate("/blogs/new")}
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Start Writing
            </button>
          </div>
        </div>
      </section>

      {/* LATEST BLOGS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Blogs
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {latestBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                {blog.publishedDate}
              </p>

              <button
                onClick={() => navigate(`/blogs/${blog.slug}`)}
                className="text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;


