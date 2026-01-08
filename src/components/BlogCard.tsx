import { Blog } from "../types/blog";
import { Link } from "react-router-dom";
import { authors } from "../data/authors";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const author = authors.find(a => a.id === blog.authorId);

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
      {/* Title */}
      <h2 className="text-xl font-bold text-indigo-600 mb-2">
        <Link to={`/blogs/${blog.slug}`} className="hover:underline">
          {blog.title}
        </Link>
      </h2>

      {/* Meta */}
      <p className="text-sm text-gray-500 mb-3">
        {blog.publishedDate} ·{" "}
        <Link
          to={`/authors/${blog.authorId}`}
          className="text-indigo-600 font-medium hover:underline"
        >
          {author?.name}
        </Link>
      </p>

      {/* Content preview */}
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
        {blog.content}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {blog.tags.map(tag => (
          <span
            key={tag}
            className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
