import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogPage from "./pages/blogs";
import BlogDetail from "./pages/BlogDetail";
import AuthorDetail from "./pages/AuthorDetail";
import PublishBlog from "./pages/PublishBlog";
import NotFound from "./pages/NotFound";
import AuthorsProfile from "./pages/AuthorsProfile";

export default function App() {
  return (
    <BrowserRouter future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/blogs" />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/authors/:id" element={<AuthorDetail />} />
        <Route path="/publish" element={<PublishBlog />} />
        <Route path="/AuthorsProfile" element={<AuthorsProfile />} />
        <Route path="/BlogList" element={<AuthorsProfile />} />
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
