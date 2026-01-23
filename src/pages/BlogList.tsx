// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Blog } from "../types/blog";

// const BlogList = () => {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
//     setBlogs(storedBlogs);
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#f1f3f4]">
//       {/* Header */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-6xl mx-auto px-6 py-5">
//           <h1 className="text-3xl font-bold flex items-center gap-2">
//             📝 Blogs
//           </h1>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-5xl mx-auto px-6 py-10">
//         {blogs.length === 0 ? (
//           <div className="bg-white rounded-xl shadow-md p-10 text-center">
//             <h2 className="text-xl font-semibold mb-2">
//               No blogs found 😔
//             </h2>
//             <p className="text-gray-500 mb-6">
//               Start writing and share your thoughts with the world.
//             </p>

//             {/* ✅ FIXED BUTTON */}
//             <button
//               onClick={() => navigate("/publish")}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
//             >
//               ✍️ Publish Blog
//             </button>
//           </div>
//         ) : (
//           <div className="grid gap-6">
//             {blogs.map((blog) => (
//               <div
//                 key={blog.id}
//                 className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
//               >
//                 <h2 className="text-2xl font-bold mb-1">{blog.title}</h2>
//                 <p className="text-sm text-gray-500 mb-4">
//                   {blog.publishedDate}
//                 </p>

//                 <button
//                   onClick={() => navigate(`/blogs/${blog.id}`)}
//                   className="text-blue-600 font-medium hover:underline"
//                 >
//                   Read More →
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogList;
