import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";

const CreateBlog = () => {
  const { addBlog } = useBlogs();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const submit = () => {
    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    addBlog({
      title,
      content,
      tags: tags.split(",").map((t) => t.trim()),
    });

    navigate("/blogs");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #eef2ff, #f8fafc)",
        padding: 40,
      }}
    >
      <div
        style={{
          maxWidth: 700,
          margin: "auto",
          background: "#fff",
          padding: 32,
          borderRadius: 16,
          boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ fontSize: 28, marginBottom: 20 }}>✍ Publish New Blog</h1>

        <input
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Write your blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          style={{ ...inputStyle, height: 140 }}
        />

        <input
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={submit}
          style={{
            marginTop: 20,
            width: "100%",
            padding: "12px 0",
            background: "#4f46e5",
            color: "#fff",
            borderRadius: 10,
            border: "none",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          🚀 Publish Blog
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: 12,
  marginBottom: 14,
  borderRadius: 10,
  border: "1px solid #d1d5db",
  fontSize: 14,
};

export default CreateBlog;
