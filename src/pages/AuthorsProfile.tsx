import { authors } from "../data/authors";
import { Link } from "react-router-dom";

const Authors = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        ✨ Our Authors
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {authors.map((author) => (
          <div
            key={author.id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {author.name}
            </h2>

            <p className="text-gray-600 mb-4">{author.bio}</p>

            <Link
              to={`/authors/${author.id}`}
              className="text-blue-600 font-semibold"
            >
              View Profile →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
