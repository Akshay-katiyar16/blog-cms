import { createContext, useContext, useEffect, useState } from "react";

export type Blog = {
  id: string;
  slug: string;
  title: string;
  content: string;
  tags: string[];
  publishedDate: string;
};

type BlogContextType = {
  blogs: Blog[];
  addBlog: (blog: Omit<Blog, "id" | "slug" | "publishedDate">) => void;
};

const BlogContext = createContext<BlogContextType | null>(null);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Load from LocalStorage
  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) setBlogs(JSON.parse(stored));
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog: any) => {
    const newBlog: Blog = {
      id: Date.now().toString(),
      slug: blog.title.toLowerCase().replace(/\s+/g, "-"),
      title: blog.title,
      content: blog.content,
      tags: blog.tags,
      publishedDate: new Date().toISOString().split("T")[0],
    };

    setBlogs((prev) => [newBlog, ...prev]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  const ctx = useContext(BlogContext);
  if (!ctx) throw new Error("useBlogs must be inside BlogProvider");
  return ctx;
};
