import { useParams, Link } from "react-router-dom";
import { getBlogs } from "../utils/blogStorage";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = getBlogs().find(b => b.slug === slug);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500">{blog.publishedDate}</p>
      <p className="mt-6 text-lg">{blog.content}</p>

      <Link
        to={`/authors/${blog.authorId}`}
        className="bg-purple-600 text-white px-4 py-2 rounded-full font-medium mb-6 inline-block hover:bg-sky-600 transition"
      >
        View Author →
      </Link>
    </div>
  );
}
