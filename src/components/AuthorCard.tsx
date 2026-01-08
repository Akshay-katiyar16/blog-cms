import { Link } from "react-router-dom";
import { Author } from "../types/author";

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mb-4">
        {author.name.charAt(0)}
      </div>

      <h3 className="text-lg font-semibold text-indigo-600 mb-1">
        {author.name}
      </h3>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {author.bio}
      </p>

      <Link
        to={`/authors/${author.id}`}
        className="text-sm font-medium text-indigo-600 hover:underline"
      >
        View Author →
      </Link>
    </div>
  );
}
