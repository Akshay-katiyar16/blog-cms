import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-red-500 to-purple-400 text-white text-center py-24">
      <h1 className="text-4xl font-bold mb-4">
        Publish your passions, your way
      </h1>
      <p className="mb-8 text-lg">
        Create a unique and beautiful blog easily.
      </p>
      <Link
        to="/publish"
        className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded font-semibold"
      >
        CREATE YOUR BLOG
      </Link>
    </section>
  );
}
