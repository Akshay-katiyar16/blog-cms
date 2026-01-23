import { useParams, Link } from "react-router-dom";
import { authors } from "../data/authors";
import { getBlogs } from "../utils/blogStorage";
import BlogCard from "../components/BlogCard";

export default function AuthorDetail() {
  const { id } = useParams();
  const author = authors.find((a) => a.id === id);
  const blogs = getBlogs().filter((b) => b.authorId === id);

  if (!author) {
    return (
      <div className="text-center mt-20 text-gray-500">
        Author not found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">

         <Link
            to="/AuthorsProfile"
            className="bg-purple-600 text-white px-4 py-2 rounded-full font-medium mb-6 inline-block hover:bg-sky-600 transition"
          >
            View All Authors →
          </Link>

        {/* AUTHOR PROFILE CARD */}
        <div className="bg-white rounded-xl shadow p-8 flex items-center gap-6 mb-10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center text-3xl font-bold">
            {author.name.charAt(0)}
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold">{author.name}</h1>
            <p className="text-gray-600 mt-1">{author.bio}</p>
          </div>

          <div className="text-sm bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium">
            {blogs.length} Blog{blogs.length !== 1 && "s"}
          </div>
        </div>

        {/* BLOG SECTION */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            Blogs by {author.name}
          </h2>

          <Link
            to="/blogs"
            className="bg-purple-600 text-white px-4 py-2 rounded-full font-medium mb-6 inline-block hover:bg-sky-600 transition"
          >
            ← Back to Home
          </Link>
        </div>

        {blogs.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow text-gray-500">
            No blogs written by this author yet.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
