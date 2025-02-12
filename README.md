<div align="center">

# Atlas Next JS - Full Stack React

![astronautpug](https://github.com/user-attachments/assets/317c4642-1b9b-4a7b-9a7c-dfd245a3caa8)

## 🌐 **[Deployed Application](https://atlas-nextjs-zeta.vercel.app/)**

### **Login Credentials** **Email:** `user@atlasmail.com` **Password:** `123456`

</div>

## Table of Contents

- [Project Overview](#project-overview)
- [Resources](#resources)
  - [What I Read](#what-i-read)
  - [Tools I Used](#tools-i-used)
- [Learning Objectives](#learning-objectives)
- [Task 0: Getting Started - Full Stack React - Part 1](#task-0-getting-started---full-stack-react---part-1)
- [Task 1: App Routing](#task-1-app-routing)
- [Task 2: Setup Database](#task-2-setup-database)
- [Task 3: Data Fetching](#task-3-data-fetching)
- [Task 4: Server Actions](#task-4-server-actions)
- [Task 5: Authentication](#task-5-authentication)
- [Task 6: Deploy Application](#task-6-deploy-application)
- [Task 7: Getting Started - Full Stack React - Part 2 - Expanding the Application](#task-7-getting-started---full-stack-react---part-2---expanding-the-application)
- [Task 8: Question Page - UI Components](#task-8-question-page---ui-components)
- [Task 9: Question Page - Data Fetching](#task-9-question-page---data-fetching)
- [Task 10: Question Page - Server Actions](#task-10-question-page---server-actions)
- [Task 11: REST APIs](#task-11-rest-apis)
- [Task 12: OAuth Authentication](#task-12-oauth-authentication)
- [Final Thoughts](#final-thoughts)

---

## Project Overview

This is a full-stack questions and answers application that allows users to create topics, ask questions, provide answers, vote on responses, and mark accepted answers. Built with Next.js, PostgreSQL, and Vercel, the project follows modern best practices for data fetching, server actions, and authentication.

## Resources


### What I Read  

- **[Next.js: The Fullstack Framework](https://atlas-jswank.github.io/blog/next-js/)** – Overview of Next.js features and use cases.  
- **[Learn Next.js](https://nextjs.org/learn)** – Official guide covering Next.js fundamentals.  
- **[Next.js App Router](https://atlas-jswank.github.io/blog/next-js-routing/)** – Overview of the Next.js routing system.  
- **[Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)** – Official Next.js documentation for routing.  
- **[Route Handlers in Next.js](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** – Guide to implementing API routes using Next.js.  
- **[Next.js Database Setup](https://atlas-jswank.github.io/blog/next-js-database/)** – Guide for setting up and integrating a database.  
- **[Next.js Data Fetching](https://atlas-jswank.github.io/blog/next-js-data-fetching/)** – Guide for fetching and displaying data in Next.js.  
- **[Next.js Server Actions](https://atlas-jswank.github.io/blog/next-js-server-actions/)** – Overview of server actions in Next.js.  
- **[React Server Actions](https://react.dev/reference/rsc/server-functions)** – Official React documentation on server functions.  
- **[Next JS Authentication Blog](https://atlas-jswank.github.io/blog/next-js-authentication/)** – Step-by-step blog tutorial.  
- **[Configuring GitHub OAuth](https://authjs.dev/guides/configuring-github?framework=qwik)** – Guide on setting up GitHub authentication with NextAuth.js.  
- **[Session Management: Getting User Sessions](https://authjs.dev/getting-started/session-management/get-session?framework=next-js-client)** – How to access session data in Next.js.  
- **[Handling Sign in and Sign out](https://authjs.dev/getting-started/session-management/login?framework=next-js)** – Official documentation on authentication session management.  

### Tools I Used

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
- Understand how to use client component, server components and server functions.
- Implement a REST API in next.js
- Understand how to use OAuth for authentication in nextjs

---

## Task 0: Getting Started - Full Stack React - Part 1

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

## Task 2: Setup Database

### **Learning Objective:**

- Learn to set up a PostgreSQL database on Vercel and connect it to a Next.js application.

### **Resources:**

- **[Next.js Database Setup](https://atlas-jswank.github.io/blog/next-js-database/)** – Guide for setting up and integrating a database.

### **What I Did**

#### **Step 1: Set Up a PostgreSQL Database on Vercel**

- Created a new project in Vercel and linked it to the GitHub repository.
- Clicked on the **Storage** tab and created a new PostgreSQL database.
- Copied the **environment variables** provided by Vercel for database access.

#### **Step 2: Configure Local Environment**

- Created a `.env.local` file in the project root.
- Pasted the database connection details from Vercel into `.env.local`.
- Ensured `.env.local` was added to `.gitignore` to prevent accidental commits.

#### **Step 3: Seed the Database**

- Started the development server using:
  ```bash
  npm run dev
  ```
- Opened `http://localhost:3000/seed` in a browser to initialize the database.
- Confirmed the message **"Database seeded successfully"** appeared.

#### **Step 4: Verify Database in Neon Console (Vercel)**

- Opened **Vercel Dashboard → Storage → Clicked on the Database Name** (Neon).
- Used the **Tables** tab in Neon to view `users`, `topics`, and `questions`.
- Confirmed that the seed data was present and correctly populated in the database.

### **Result**

- PostgreSQL database is successfully set up and accessible.
- `.env.local` file contains correct database credentials.
- Tables and initial data are present in the database.
- The Next.js application is connected to the database and can fetch stored data.

---

## Task 3: Data Fetching

### **Learning Objective:**

- Learn to display data from the database using **React Server Components (RSC)**.

### **Resources:**

- **[Next.js Data Fetching](https://atlas-jswank.github.io/blog/next-js-data-fetching/)** – Guide for fetching and displaying data in Next.js.

### **What I Did**

#### **Step 1: Fetch and Display Topics in the Sidebar**

- Updated **`TopicLinks.tsx`** to fetch topics from the database and display them in the sidebar.
- Used `fetchTopics()` from `lib/data.ts` to retrieve the topics from the database.
- Clicking on a topic navigates to `/ui/topics/:id`, where topic-specific questions are displayed.

#### **Step 2: Display Topics on the `/ui` Page**

- Updated **`app/ui/page.tsx`** to display the full list of topics retrieved from the database.
- Clicking on a topic from this page also redirects to `/ui/topics/:id`.

#### **Step 3: Fetch and Display Questions for Each Topic**

- Implemented **`app/ui/topics/[id]/page.tsx`** to display questions related to the selected topic.
- Used `fetchTopic(id)` and `fetchQuestions(id)` from `lib/data.ts` to get topic details and its associated questions.
- Added a **"Topic Not Found"** fallback if an invalid topic ID is accessed.

### **Result**

- Topics now appear in the **sidebar** and on the `/ui` page.
- Clicking a topic **navigates to the topic page** where questions are displayed.
- Data fetching from the database using **React Server Components (RSC)** is working as expected.
- Some issues were only fully resolved after completing authentication in later tasks.

---

## Task 4: Server Actions

### **Learning Objective**

- Learn to perform server-side actions in Next.js using **React Server Actions**.

### **Resources**

- **[Next.js Server Actions](https://atlas-jswank.github.io/blog/next-js-server-actions/)** – Overview of server actions in Next.js.
- **[React Server Actions](https://react.dev/reference/rsc/server-functions)** – Official React documentation on server functions.

### **What I Did**

#### **Step 1: Add a Form to Create New Topics**

- Implemented a form on `/ui/topics/new` where users can create a new topic.
- The topic should appear in both the **sidebar** and **topics list** on `/ui`.

#### **Step 2: Implement Server Action to Add Topics**

- Created a **server action** to insert a topic into the database.
- Used `insertTopic` function from `lib/data.ts` to perform the database operation.
- Called `revalidatePath()` to refresh the page and reflect new topics immediately.
- Updated the **Create Topic Form** component to use the new server action.

#### **Step 3: Implement Server Action for Asking Questions**

- Allowed users to ask questions in **`/ui/topics/:id`**.
- Added a hidden input field in the form to **track the topic ID**.
- Integrated the function into the **AskQuestion** component.

#### **Step 4: Implement Voting Functionality**

- Allowed users to upvote questions by clicking a thumbs-up button.
- Updated the **Vote Button** component to call the server action.

### **Result**

- Users can **add topics**, which now appear in the sidebar and topics list.
- Users can **ask questions**, which immediately update on the topic page.
- Users can **upvote questions**, and the vote count updates dynamically.

This implementation successfully integrates **server actions** for performing database operations without requiring traditional API routes.

---

## Task 5: Authentication

### **Learning Objective**

- Learn to protect the application with a login page.

### **Resources**

- **[Next JS Authentication Blog](https://atlas-jswank.github.io/blog/next-js-authentication/)** – Step-by-step blog tutorial.
- **[Handling Sign in and Sign out](https://authjs.dev/getting-started/session-management/login?framework=next-js)** – Official documentation on authentication session management.

### **What I Did**

#### **Step 1: Setup Auth.js Handler**

- Created a new authentication handler in `auth.ts`.
- Integrated NextAuth with a **Credentials Provider** for email/password authentication.

#### **Step 2: Add Custom authorize Method**

- Implemented a method to verify user credentials.
- Added `bcryptjs` to compare passwords securely.

#### **Step 3: Add authorized Callback**

- Implemented a callback to restrict access to authenticated users.

#### **Step 4: Implement Authentication Middleware**

- Created `middleware.ts` to enforce authentication rules.

#### **Step 5: Add Authentication API Routes**

- Created `app/api/auth/[...nextauth]/route.ts` to handle authentication API endpoints.

#### **Step 6: Generate and Set Authentication Secret**

- Ran the following command to generate a secret key:
  ```bash
  npx auth secret
  ```
- Initially, I added `AUTH_SECRET` to the `.env.local` file. However, I later changed it to `NEXTAUTH_SECRET` for the following reasons:
  - `NEXTAUTH_SECRET` is the officially recommended variable name for NextAuth.js, ensuring compatibility with future updates.
  - It aligns with best practices outlined in the NextAuth.js documentation, making it easier to integrate with authentication providers and maintain consistency.

#### **Step 7: Implement Login Action**

- Updated the login button in `app/page.tsx` to trigger the sign-in action.

#### **Step 8: Implement Logout Action**

- Updated the sign-out button in `components/SignOutButton.tsx`.

### **Result**

- Users can now **log in** and **log out** securely.
- Unauthenticated users are **redirected to the login page** when trying to access `/ui/*` pages.
- The application enforces **session-based authentication** with Auth.js.
- The login button on the homepage **redirects to the login page**.
- The sign-out button in the sidebar **logs users out and redirects them to the homepage**.

---

## Task 6: Deploy Application

### **Learning Objective**

- Ensure the deployed application on Vercel functions correctly.

### **Resources**

- **[Vercel Documentation](https://vercel.com/docs)** – Official documentation on deploying Next.js applications.
- **[Next.js Deployment Guide](https://nextjs.org/docs/deployment)** – Best practices for deploying Next.js applications.

### **What I Did**

#### **Step 1: Verify Deployment Setup in Vercel**

- Since the Vercel project was already created during **Task 2**, I navigated to the **Vercel Dashboard**.
- Confirmed that the `atlas-nextjs` project was correctly linked to the GitHub repository.
- Ensured automatic deployments were enabled for new commits to the `main` branch.

#### **Step 2: Check Environment Variables**

- Navigated to **Vercel → Project Settings → Environment Variables**.
- Verified that `NEXTAUTH_SECRET` and database credentials were correctly set.
- Ensured no missing or incorrect environment variables that could break functionality.

#### **Step 3: Redeploy the Application**

- Triggered a **manual redeployment** to ensure the latest changes were live.
- Monitored the deployment logs to verify a **successful build and deployment**.
- Checked that the app loads without errors and that server actions work properly.

#### **Step 4: Test Application Functionality**

- Opened the deployed application and tested key features:
  - **Login and authentication work correctly** using the provided credentials.
  - **Protected routes** correctly redirect unauthorized users.
  - **Database connections** retrieve and store data as expected.
  - **Server actions** (such as topic creation and voting) function properly.
  - UI components render correctly without layout issues.

### **Deployed Application:**

[Atlas Next.js - Live Demo](https://atlas-nextjs-zeta.vercel.app/)

### **Login Credentials**

- **Email:** `user@atlasmail.com`
- **Password:** `123456`

### **Result**

- The **application is successfully deployed and publicly accessible**.
- **Authentication and database operations function correctly** in production.
- The **Vercel project is correctly linked to GitHub**, ensuring automatic deployments on push.
- The application meets all deployment requirements, and **all functionality works as expected**.

---

## Task 7: Getting Started - Full Stack React - Part 2 - Expanding the Application

### **Learning Objective**

- Continue building on the existing Full Stack React application by expanding its functionality.
- Apply previous knowledge of Next.js to integrate new features.

### **What I Did**

#### **Step 1: Set Up the Project**

- Used the completed code from **Full Stack React - Part 1** as the starting point.
- Ensured the existing database, authentication, and UI were functioning correctly before proceeding.

#### **Step 2: Update the Database with the Answers Table**

- Replaced `app/seed/route.ts` with the [updated seed script.](https://github.com/atlas-jswank/atlas-nextjs/blob/main/app/seed/route.ts)
- Started the development server:
  ```bash
  npm run dev
  ```
- Opened `http://localhost:3000/seed` to execute the new seed script and populate the database.
- Everything worked correctly, message in browser: **"Database seeded successfully"**.
- Verified that the **answers table** was successfully created in the **database UI (NeonDB)**.

### **Result**

- The project now includes an **answers table** in the database.
- The application remains fully functional with the updated seed script.
- The repository is prepared for further enhancements in upcoming tasks.

---

## Task 8: Question Page - UI Components 

### **Learning Objective**  

- Learn to implement **client and server components** in a Next.js application.  


### **What I Did**  

#### **1. Created the Question Page (`/ui/questions/:id`)**
- Implemented a **new dynamic route**:  
  - Users can now navigate to `/ui/questions/:id` to view a **specific question and its answers**.  

#### **2. Updated Topics Page to Link to Questions**
- Each **question on the `/ui/topics/:id` page** is now a **clickable link**.  
- Clicking a question **navigates the user to `/ui/questions/:id`**.

#### **3. Implemented UI for Question and Answers**
- **Displayed the question text** at the top of the page.  
- **Created a text box** to allow users to submit new answers.  
- **Listed all submitted answers** below the answer form.  

#### **4. Designed UI for Accepted Answers**
- If an answer is **marked as accepted**, it appears at the **top of the list**.  
- Applied a **green checkmark** (✔) to visually distinguish the accepted answer.  

#### **5. Added a Button to Accept Answers**
- Each answer now includes a **button with a checkmark**.  
- This button allows users to **mark an answer as accepted**.  


### **Result**  
- Users can **view questions and their answers** on a dedicated page.  
- The UI **allows submitting answers** and **marking an answer as accepted**.  
- The **accepted answer is always displayed first**, improving clarity for users.  
- **Navigation is intuitive**, with clickable questions leading to their respective pages.  

---


## Task 9: Question Page - Data Fetching

### **Learning Objective**

- Learn to **fetch and display data in server components** from the database.


### **What I Did**

1. **Added a function in `lib/data.ts` to fetch a question by ID**  
   - Implemented a SQL query to retrieve question details.

2. **Created a function in `lib/data.ts` to fetch answers for a question**  
   - Implemented a SQL query to return answers in order, with the accepted answer appearing first.

3. **Updated the question page (`app/ui/questions/[id]/page.tsx`) to fetch and display data**  
   - Used `fetchQuestionById(id)` to render the question text.
   - Used `fetchAnswers(questionId)` to render the answer list.

4. **Styled the accepted answer differently**  
   - Applied a **green checkmark** to highlight the accepted answer.


### **Result**
- The **question page now displays actual data** from the database.  
- **Answers are listed correctly**, with the accepted answer at the top.  
- The **question heading is dynamically retrieved and displayed**.

---

## Task 10: Question Page - Server Actions  

### **Learning Objective**  
- Learn to **utilize server actions** to **mutate data on the server** in a Next.js application.  

---

### **What I Did**  

#### **1. Implemented Server Action to Add an Answer**  
- **Created** `addAnswer` function in `lib/actions.ts`.  
- **Updated `lib/data.ts`** to include a function that performs the **SQL query to insert answers**.  
- **Ensured the page updates automatically** after an answer is submitted.  

#### **2. Implemented Server Action to Mark an Answer as Accepted**  
- **Created** `markAnswerAsAccepted` function in `lib/actions.ts`.  
- **Updated `lib/data.ts`** to include a function that performs the **SQL query to mark an answer as accepted**.  
- **Ensured page updates automatically** to reflect the accepted answer.  

#### **3. Integrated Actions with UI**  
- **Updated the question page (`/ui/questions/:id`)** to call `addAnswer` and `markAnswerAsAccepted`.  
- **The checkmark button now updates the accepted answer** and moves it to the top of the list.  

#### **4. Debugging & Troubleshooting**
- **Issue:** Button to mark an answer as accepted was not updating UI.  
  - **Solution:** Used `useTransition` to trigger re-fetch after action completion.  
- **Issue:** Newly added answers were not appearing immediately.  
  - **Solution:** Ensured server actions revalidate the cache and trigger a UI refresh.

---

### **Result**  
- Users can **submit answers** to questions.  
- Users can **mark an answer as accepted**, and the page updates immediately.  
- The **database correctly stores submitted answers and accepted answers**.  

---

## Task 11: REST APIs  

### **Learning Objective**  
- Understand how to **implement REST API routes** in Next.js.  

---

### **What I Did**  

#### **1. Implemented Topics API Endpoint**  
- Created `/api/topics` **to return all topics** in JSON format.  
- Used `fetchTopics()` from `lib/data.ts` to retrieve topics from the database.  

#### **2. Implemented Questions API Endpoint**  
- Created `/api/topics/:id/questions` **to return questions for a given topic**.  
- Used `fetchQuestions(topic_id)` from `lib/data.ts` to get questions.  

#### **3. Implemented Answers API Endpoint**  
- Created `/api/questions/:id/answers` **to return answers for a given question**.  
- Used `fetchAnswers(question_id)` from `lib/data.ts`.  


### **Result**  
- REST API **provides structured JSON responses** for topics, questions, and answers.  
- **Frontend can now dynamically fetch data** using these API routes.  
- Database interactions are **efficient and secure** through API endpoints.  

---

## Task 12: OAuth Authentication 

### **Learning Objective**  
- Understand how to **allow users to log in with third-party authentication (GitHub OAuth)**.  

---

### **What I Did**  

#### **1. Implemented GitHub Authentication**  
- Added **GitHub OAuth using `next-auth/providers/github`**.  
- Users can now **log in with GitHub from the sign-in page**.  

#### **2. Created LoggedInUser Component**  
- Created `components/LoggedInUser.tsx` to **display the logged-in user's avatar and name**.  
- If a user **logs in with GitHub, their GitHub avatar is displayed**.  
- If a user **logs in with credentials, a default gray avatar is used**.  

#### **3. Integrated LoggedInUser Component into Sidebar**  
- Added `LoggedInUser` to the **sidebar (`components/Sidenav.tsx`)**.  
- Ensured the component correctly updates when a user logs in or logs out.  

#### **4. Debugging & Troubleshooting**
- **Issue:** GitHub avatar not displaying after login.  
  - **Solution:** Verified `profile.avatar_url` was correctly stored in `token.image`.   

### **Result**  
- Users can **log in with GitHub** and see their **GitHub avatar**.  
- **Sidebar dynamically updates** to show the logged-in user's information.  
- Application now supports **both OAuth (GitHub) and credential-based login**.  

---

## Final Thoughts
This project solidified my understanding of:
- **Next.js server actions** for **modifying data on the server**.  
- **REST API design** and best practices in Next.js.  
- **OAuth authentication with NextAuth** and handling multiple login methods.  
- **Debugging common issues** with authentication, API calls, and UI updates.  

