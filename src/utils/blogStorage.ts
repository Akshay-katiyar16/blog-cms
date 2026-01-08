import { Blog } from "../types/blog";

const BLOGS_KEY = "blogs";

const seedBlogs: Blog[] = [
  {
    id: "1",
    slug: "react-basics",
    title: "React Basics",
    content: "React basics blog content...",
    authorId: "1",
    tags: ["react", "frontend", "javascript"],
    publishedDate: "2025-01-01",
  },
  {
    id: "2",
    slug: "accessibility-ux",
    title: "Accessibility and UX",
    content: "Accessibility and UX blog content...",
    authorId: "5",
    tags: ["accessibility", "ux", "design"],
    publishedDate: "2025-01-10",
  },
  {
    id: "3",
    slug: "js-performance",
    title: "JavaScript Performance",
    content: "JS performance blog content...",
    authorId: "2",
    tags: ["javascript", "performance", "web"],
    publishedDate: "2025-01-12",
  },
];

function initBlogs() {
  const stored = localStorage.getItem(BLOGS_KEY);

  if (!stored || JSON.parse(stored).length === 0) {
    localStorage.setItem(BLOGS_KEY, JSON.stringify(seedBlogs));
  }
}

export function getBlogs(): Blog[] {
  initBlogs();
  return JSON.parse(localStorage.getItem(BLOGS_KEY) || "[]");
}

export function saveBlog(blog: Blog) {
  const blogs = getBlogs();
  blogs.push(blog);
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
}

export function getBlogBySlug(slug: string) {
  return getBlogs().find((blog) => blog.slug === slug);
}
