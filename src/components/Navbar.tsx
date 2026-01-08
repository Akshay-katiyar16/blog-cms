import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState<"home" | "blogs">("home");

  useEffect(() => {
    const onScroll = () => {
      const blogsSection = document.getElementById("blogs");
      if (!blogsSection) return;

      const blogsTop = blogsSection.getBoundingClientRect().top;
      setActive(blogsTop <= 100 ? "blogs" : "home");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (name: "home" | "blogs") =>
    `font-medium hover:underline ${
      active === name ? "underline" : ""
    }`;

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/blogs" className="text-xl font-bold">
          Blog CMS
        </Link>

        <div className="flex items-center gap-6">
          <a href="#home" className={linkClass("home")}>
            Home
          </a>
          <a href="#blogs" className={linkClass("blogs")}>
            Blogs
          </a>
          <Link
            to="/publish"
            className="bg-white text-indigo-600 px-4 py-1.5 rounded font-semibold"
          >
            Publish Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
