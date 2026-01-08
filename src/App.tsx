import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogPage from "./pages/blog";
import BlogDetail from "./pages/BlogDetail";
import AuthorDetail from "./pages/AuthorDetail";
import PublishBlog from "./pages/PublishBlog";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/blogs" />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/authors/:id" element={<AuthorDetail />} />
        <Route path="/publish" element={<PublishBlog />} />
      </Routes>
    </BrowserRouter>
  );
}
