# Content Publishing Platform (Blog CMS – Frontend)

**Frontend Assignment – Akshay Katiyar**

A modern **Blog Content Management System (CMS)** frontend built using **Next.js, React, and TypeScript**.  
The project demonstrates routing, data handling, reusable components, and clean UI organization.

---

## 🚀 Tech Stack (Mandatory)

- **React**
- **TypeScript**
- **GitHub**

---

## 🎯 Objective

To build a frontend blog platform that supports:
- Blog listing and filtering
- Blog detail pages
- Author-based blog management
- Clean routing and reusable UI components

This project focuses on **frontend architecture, routing, and type safety**.

---

## ✨ Core Features

### 1️⃣ Blog Management

Each blog includes:
- Title
- Content
- Author
- Tags
- Published Date

#### Features
- Blog listing page
- Blog detail page
- Filter blogs by **author**
- Filter blogs by **tag**
- Search blogs by **title**

---

### 2️⃣ Author Management

- Author profile page
- Author bio section
- List of blogs written by the selected author

---

## 📄 Pages & Routes

| Route | Description |
|------|------------|
| `/blogs` | List all blogs with search & filters |
| `/blogs/[slug]` | Blog detail page |
| `/authors/[id]` | Author detail page with authored blogs |

---

## 🧩 Technical Requirements

- Static / mock data (no backend required)
- Dynamic routing using Next.js
- Reusable UI components (BlogCard, Navbar, etc.)
- Type-safe models using TypeScript interfaces

---

## 🌟 Bonus Features (Optional)

- Markdown rendering for blog content
- SEO metadata using Next.js `<Head />`
- Responsive UI design

---

## 🗂️ Project Structure



# Blog CMS Frontend

This project is a frontend application for managing blog content.
## Setup Steps

To set up the Blog CMS Frontend, follow these steps:

## 📸 Screenshots

### 🏠 Blog Listing Page
![Dashboard](screenshots\Dashboard.png)

![Blog Listing](screenshots\blog_Listing.png)

### 📖 Blog Detail Page
![Blog Detail](screenshots\blog_detail.png)

### 👤 Author Page
![Author Page](screenshots\Author_Page.png)



1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/blog-cms-frontend.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd blog-cms-frontend
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

5. **Open your browser**:
    Visit `http://localhost:3000` to view the application.