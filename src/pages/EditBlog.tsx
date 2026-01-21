// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// const EditBlog = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [tags, setTags] = useState("");

//   useEffect(() => {
//     const stored = localStorage.getItem("blogs");
//     if (!stored) return;

//     const blogs = JSON.parse(stored);
//     const blog = blogs.find((b: any) => b.id === id);

//     if (blog) {
//       setTitle(blog.title);
//       setContent(blog.content);
//       setTags(blog.tags.join(", "));
//     }
//   }, [id]);

//   const updateBlog = () => {
//     const stored = localStorage.getItem("blogs");
//     if (!stored) return;

//     const blogs = JSON.parse(stored);

//     const updatedBlogs = blogs.map((b: any) =>
//       b.id === id
//         ? {
//             ...b,
//             title,
//             content,
//             tags: tags.split(",").map((t: string) => t.trim()),
//           }
//         : b
//     );

//     localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
//     navigate("/blogs");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 px-6 py-12">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
//         <h1 className="text-3xl font-bold mb-6">✏️ Edit Blog</h1>

//         <input
//           className="w-full border p-3 rounded mb-4"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <textarea
//           className="w-full border p-3 rounded mb-4"
//           rows={6}
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />

//         <input
//           className="w-full border p-3 rounded mb-6"
//           value={tags}
//           onChange={(e) => setTags(e.target.value)}
//         />

//         <button
//           onClick={updateBlog}
//           className="bg-blue-600 text-white px-6 py-3 rounded font-semibold"
//         >
//           Update Blog
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EditBlog;
