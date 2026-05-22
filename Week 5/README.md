# Week 5 - UI & Frontend Fundamentals

This directory contains assignments covering two major areas of frontend development:
1. **Core Web Styling (HTML5 & CSS3)**: Focuses on structured page layouts (CSS Flexbox and responsive media queries) and structured tabular layouts (HTML tables with custom row/column spans and zebra-striping).
2. **Component-Based Development (React & Tailwind CSS)**: Focuses on building interactive user interfaces using React, mapping static lists into responsive component grids, passing data between parent and child components using `props`, and utilizing absolute positioning in card layouts.

---

## 📁 Directory Structure

| Subfolder | Description | Core Tech Stack |
| :--- | :--- | :--- |
| **[`Layouts/`](file:///C:/MERN/NODE/MERN_Assignments/Week%205/Layouts)** | CSS Flexbox layout configurations, responsive card alignments, and media queries. | HTML5, CSS3 (Flexbox, `@media`) |
| **[`Tables/`](file:///C:/MERN/NODE/MERN_Assignments/Week%205/Tables)** | Structured tables featuring cell merging (`colspan`/`rowspan`), custom border layouts, and zebra-striping. | HTML5, CSS3 |
| **[`assets/`](file:///C:/MERN/NODE/MERN_Assignments/Week%205/assets)** | Static assets, badges, and template pictures used by the HTML pages and components. | Static Assets |
| **[`react-app-1-products/`](file:///C:/MERN/NODE/MERN_Assignments/Week%205/react-app-1-products)** | E-commerce component grid rendering a database of products with prices and ratings. | React, Vite, Tailwind CSS |
| **[`react-app-2-users/`](file:///C:/MERN/NODE/MERN_Assignments/Week%205/react-app-2-users)** | User registry registry with separate `Navbar`, `UsersList`, `User` cards, and `Footer` components. | React, Vite, Tailwind CSS |
| **[`react-app-3-profiles/`](file:///C:/MERN/NODE/MERN_Assignments/Week%205/react-app-3-profiles)** | Blog card layout featuring absolute avatar positioning and elegant typography. | React, Vite, Tailwind CSS |

---

## 🚀 Running the Projects

### Static HTML Files (`Layouts/` & `Tables/`)
You can open any of these HTML files directly in your web browser. Alternatively, use the **Live Server** extension in VS Code:
1. Right-click on any `.html` file.
2. Select **"Open with Live Server"**.

### React Applications (`react-app-*`)
Each React application is built on [Vite](https://vitejs.dev/) and styled with [Tailwind CSS](https://tailwindcss.com/).
To run any of the three apps:
1. Navigate into the app's folder:
   ```bash
   cd react-app-1-products   # or react-app-2-users, react-app-3-profiles
   ```
2. Install all development and runtime dependencies:
   ```bash
   npm install
   ```
3. Boot the local Vite development server:
   ```bash
   npm run dev
   ```
4. Open the displayed local server port (usually `http://localhost:5173`) in your browser to view the application.
