import { Blog } from "../types/blog";

const BLOGS_KEY = "blogs";

const seedBlogs: Blog[] = [
  {
    id: "1",
    slug: "react-basics",
    title: "React Basics",
    content: "React is a popular JavaScript library used for building fast and interactive user interfaces, especially single-page applications. It is based on a component-driven architecture, where the UI is divided into small, reusable components. Each component manages its own logic and rendering, which makes the code easier to maintain and scale. One of React’s key features is JSX, a syntax that allows developers to write HTML-like structures directly inside JavaScript code, improving readability and development speed. React uses a virtual DOM to optimize performance by updating only the parts of the UI that change, instead of re-rendering the entire page. State and props are core concepts in React that control how data flows within the application. Hooks like useState and useEffect allow developers to manage state and side effects in functional components. React also integrates well with modern tools such as TypeScript, Tailwind CSS, and build tools like Vite or Webpack. Due to its flexibility, strong ecosystem, and large community support, React is widely used in modern frontend development and is a valuable skill for web developers.",
    authorId: "1",
    tags: ["react", "frontend", "javascript"],
    publishedDate: "2025-01-01",
  },
  {
    id: "2",
    slug: "accessibility-ux",
    title: "Accessibility and UX",
    content: "Accessibility and User Experience (UX) are critical components of building modern, inclusive web applications. Accessibility focuses on ensuring that websites can be used by everyone, including users with visual, auditory, cognitive, or motor disabilities. This involves practices such as using semantic HTML, providing alternative text for images, enabling keyboard navigation, and maintaining proper color contrast. UX, on the other hand, is about how users feel when interacting with a product. A good UX design is intuitive, efficient, and easy to navigate. Accessibility and UX go hand in hand because accessible designs often lead to better overall usability. Features like clear navigation, readable typography, and consistent layouts benefit all users, not just those with disabilities. Designing with accessibility in mind also helps meet legal standards and improves SEO performance. Developers and designers should consider accessibility from the beginning of the project rather than treating it as an afterthought. By prioritizing both accessibility and UX, teams can create digital products that are ethical, user-friendly, and effective for a diverse audience."
,
    authorId: "5",
    tags: ["accessibility", "ux", "design"],
    publishedDate: "2025-01-10",
  },
  {
    id: "3",
    slug: "javascript-performance",
    title: "JavaScript Performance",
    content: "JavaScript performance is an important factor in creating responsive and efficient web applications. Poorly optimized JavaScript can lead to slow loading times, delayed interactions, and a frustrating user experience. One way to improve performance is by writing clean and efficient code, avoiding unnecessary loops, and minimizing expensive operations. Reducing DOM manipulation is crucial because frequent updates to the DOM can significantly impact performance. Techniques such as debouncing and throttling help control how often certain functions execute, especially during events like scrolling or resizing. Modern practices like code splitting and lazy loading allow applications to load only what is needed, improving initial load time. Optimizing assets, minimizing bundle size, and removing unused code also play a key role. Browser developer tools can be used to analyze performance bottlenecks and memory usage. Writing performant JavaScript ensures smoother interactions, better scalability, and a more enjoyable experience for users, especially in complex applications."
,
    authorId: "2",
    tags: ["javascript", "performance", "web"],
    publishedDate: "2025-01-12",
  },
  {
    id: "4",
    slug: "typescript-for-beginners",
    title: "TypeScript for Beginners",
    content: "TypeScript is a superset of JavaScript that adds static typing to the language, helping developers catch errors early during development. It allows developers to define types for variables, function parameters, and return values, which improves code reliability and readability. TypeScript is especially useful in large-scale applications where managing complex data structures can become difficult. By using interfaces and type aliases, developers can create well-defined contracts within the codebase. TypeScript also enhances developer productivity by providing better autocompletion and tooling support in editors. It compiles down to plain JavaScript, meaning it works in any browser or environment that supports JavaScript. Many modern frameworks, including React and Angular, support TypeScript natively. Learning TypeScript helps developers write cleaner, more maintainable code and reduces runtime errors, making it an excellent choice for modern web development."
,
    authorId: "3",
    tags: ["typescript", "javascript"],
    publishedDate: "2025-01-15",
  },
  {
    id: "5",
    slug: "css-flexbox-guide",
    title: "CSS Flexbox Guide",
    content: "CSS Flexbox is a powerful layout module that makes it easier to design responsive and flexible web layouts. It allows developers to align and distribute space among items within a container, even when their sizes are unknown or dynamic. Flexbox works by defining a flex container and controlling the alignment of its child elements using properties such as justify-content, align-items, and flex-direction. It is especially useful for building navigation bars, cards, and responsive layouts without relying on complex floats or positioning. Flexbox simplifies vertical and horizontal alignment, which was traditionally difficult with older CSS techniques. By using Flexbox, developers can create layouts that adapt smoothly to different screen sizes. It is widely supported across modern browsers and is a fundamental skill for frontend developers. Understanding Flexbox improves layout control and speeds up UI development."
,
    authorId: "4",
    tags: ["css", "flexbox", "layout"],
    publishedDate: "2025-01-18",
  },
  {
    id: "6",
    slug: "state-management-react",
    title: "State Management in React",
    content: "State management in React is essential for handling dynamic data and keeping the UI in sync with application logic. State represents the data that can change over time, such as user input or fetched API data. React provides the useState hook for managing local component state in functional components. For sharing state across multiple components, the Context API can be used to avoid excessive prop drilling. In larger applications, external state management libraries may be introduced to handle complex state logic. Proper state management helps maintain predictable behavior and improves application performance. It also makes debugging and testing easier. Choosing the right state management approach depends on the size and complexity of the application. Understanding how React handles state is a key skill for building scalable and maintainable frontend applications."
,
    authorId: "1",
    tags: ["react", "state", "frontend"],
    publishedDate: "2025-01-20",
  },
  {
    id: "7",
    slug: "web-security-basics",
    title: "Web Security Basics",
    content: "Web security is a critical aspect of frontend development that focuses on protecting applications from common threats and vulnerabilities. Attacks such as Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) can compromise user data if not handled properly. Developers should follow best practices such as validating user input, escaping dynamic content, and using secure authentication methods. HTTPS plays a vital role in encrypting data between the client and server. Proper handling of cookies, tokens, and local storage is also important to prevent unauthorized access. Security should be considered throughout the development process, not just at the end. By understanding basic web security concepts, developers can build safer applications and protect user trust. Strong security practices are essential for any modern web application."
,
    authorId: "6",
    tags: ["security", "web", "frontend"],
    publishedDate: "2025-01-22",
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
