import { useEffect, useState } from "react";
import { Blog } from "../types/blog";
import { getBlogs } from "../utils/blogStorage";
import BlogCard from "../components/BlogCard";
import Hero from "../components/Hero";
import TagFilter from "../components/TagFilter";
import { authors } from "../data/authors";
import AuthorCard from "../components/AuthorCard";
export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  // Collect unique tags
  const allTags = Array.from(
  new Set(
    blogs
      .flatMap((blog) => blog.tags || [])
      .filter(Boolean)
  )
);


  // SEARCH + TAG FILTER (CORRECT LOGIC)
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTag =
      selectedTag === "" || blog.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <>
      {/* HERO */}
      <div id="home">
        <Hero />
      </div>

      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10">

          {/* SEARCH + TAG FILTER */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <TagFilter
              tags={allTags}
              selectedTag={selectedTag}
              onChange={setSelectedTag}
            />
          </div>

          {/* AUTHORS */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Our Authors
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {authors.map((author) => (
                <AuthorCard key={author.id} author={author} />
              ))}
            </div>
          </section>

          {/* BLOG LIST */}
          <section id="blogs">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">
              All Blogs
            </h2>

            {filteredBlogs.length === 0 && (
              <p className="text-gray-500">
                No blogs match your search or selected tag.
              </p>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
