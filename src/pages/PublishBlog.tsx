import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveBlog } from "../utils/blogStorage";
import { authors } from "../data/authors";

export default function PublishBlog() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [tags, setTags] = useState("");

  const handlePublish = () => {
    if (!title || !content || !authorId) {
      alert("Please fill all required fields");
      return;
    }

    const newBlog = {
      id: Date.now().toString(),
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      title,
      content,
      authorId,
      tags: tags
        .split(",")
        .map(tag => tag.trim())
        .filter(Boolean),
      publishedDate: new Date().toISOString().slice(0, 10),
    };

    saveBlog(newBlog);
    navigate("/blogs");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-10">
      <div className="bg-white w-full max-w-xl rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          ✍️ Publish New Blog
        </h1>

        {/* TITLE */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Blog Title *
          </label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full p-3 border rounded"
            placeholder="Enter blog title"
          />
        </div>

        {/* CONTENT */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Blog Content *
          </label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={5}
            className="w-full p-3 border rounded"
            placeholder="Write your blog content..."
          />
        </div>

        {/* AUTHOR */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Author *
          </label>
          <select
            value={authorId}
            onChange={e => setAuthorId(e.target.value)}
            className="w-full p-3 border rounded"
          >
            <option value="">Select author</option>
            {authors.map(author => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>

        {/* TAG INPUT */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Tags (comma separated)
          </label>
          <input
            value={tags}
            onChange={e => setTags(e.target.value)}
            className="w-full p-3 border rounded"
            placeholder="react, frontend, ui"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between">
          <button
            onClick={() => navigate("/blogs")}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handlePublish}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Publish Blog
          </button>
        </div>
      </div>
    </div>
  );
}
