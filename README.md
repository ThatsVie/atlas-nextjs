# Atlas Next JS - Full Stack React - Part 1  
 

## Table of Contents   
- [Resources](#resources)  
  - [What I Read](#what-i-read)  
  - [Tools I Used](#tools-i-used)  
- [Learning Objectives](#learning-objectives)  
- [Task 0: Getting Started](#task-0-getting-started)  
- [Task 1: App Routing](#task-1-app-routing)

---

## Resources  

### **What I Read**  
- **[Next.js: The Fullstack Framework](https://atlas-jswank.github.io/blog/next-js/)** – Overview of Next.js features and use cases.  
- **[Learn Next.js](https://nextjs.org/learn)** – Official guide covering Next.js fundamentals.  
- **[Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)** – Official Next.js documentation for routing.

### **Tools I Used**  
- **[Next.js Documentation](https://nextjs.org/docs)** – Reference for Next.js features and API.  
- **[Vercel](https://vercel.com/)** – Deployment platform for hosting Next.js applications.  
- **[Figma ERD](https://www.figma.com/design/3p1l0UWm9lX5NsN9xCg6FK/Full-Stack-React-Project-ERD?node-id=0-1)** – Entity Relationship Diagram for database design.  
- **[Demo Provided in Curriculum](https://atlas-nextjs-jswank.vercel.app/)**  
  **Demo Credentials:**  
    **Email:** `user@atlasmail.com`  
    **Password:** `123456`  
---

## Learning Objectives  

- Learn to create multi-page react applications  
- Build a full stack react app that interacts with a database  
- Learn to integrate a login form into your application   

---

### Task 0: Getting Started  

### **What I Did**  

1. **Created a New Repository**  
   - Used the **"Use as Template"** feature to create `atlas-nextjs` repository.  
   - Cloned it locally.

2. **Installed Dependencies**  
   ```bash
   npm install
   ```

3. **Started the Development Server**  
   ```bash
   npm run dev
   ```
   - Opened the project in a browser: `http://localhost:3000`

4. **Reviewed the Codebase**  
   - Read through the structure of the starter files.  


### **Result:** The project is now set up locally and running. The starter code is pushed to GitHub.  

---

## Task 1: App Routing  

### **Learning Objective:**  
- Learn to create a multi-page React application using the **App Router** in Next.js.  

### **Resources:**  
- **[Next.js App Router](https://atlas-jswank.github.io/blog/next-js-routing/)** – Overview of the Next.js routing system.  
- **[Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)** – Official Next.js documentation for routing.  

### **Requirements & Implementation Plan**  

#### **Creating the Required Routes**  
The following routes were implemented in the application:

- **`/`**: Homepage for non-logged-in users
- **`/about`**: "About Us" page
- **`/ui`**: Homepage after user login
- **`/ui/topics/:id`**: Displays questions related to a specific topic
- **`/ui/topics/new`**: Form for creating a new topic

#### **Setting Up a Shared Layout for `/ui/*` Routes**  
- Added a sidebar to all `/ui/*` pages using `layout.tsx` to maintain a consistent UI.

#### **Implementing a Loading Page**  
- Introduced a skeleton loader that appears while a `/ui/*` page is loading.

#### **Updating Navigation for Performance**  
- Replaced all `<a>` elements with `<Link>` components from Next.js to enable client-side navigation and improve performance.

---

### **What I Did**  

#### **Implemented the Required Pages & Layout**
The following files were created:
  
- **Homepage (`/`)**: `app/page.tsx`
- **About Page (`/about`)**: `app/about/page.tsx`
- **User Interface Home (`/ui`)**: `app/ui/page.tsx`
- **Topic Page (`/ui/topics/:id`)**: `app/ui/topics/[id]/page.tsx`
- **New Topic Form (`/ui/topics/new`)**: `app/ui/topics/new/page.tsx`
  
#### **Created a Shared Layout for `/ui/*`**
- Defined `app/ui/layout.tsx` to wrap all `/ui/*` pages with a sidebar.

#### **Implemented a Loading Skeleton**
- Added `app/ui/loading.tsx` to display a skeleton while loading.

#### **Updated Navigation with `<Link>` Components**
- Used `next/link` for all navigation links to ensure smooth, client-side transitions.

### **Result:**  
- Routing is correctly set up.
- A shared layout exists for `/ui/*`.
- Skeleton loading page is implemented.
- All `<a>` tags have been replaced with `<Link>` components.

---

  

