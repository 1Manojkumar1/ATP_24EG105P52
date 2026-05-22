# React App 2: Users Registry Dashboard

A component-driven React application bootstrapped with [Vite](https://vitejs.dev/) and styled with [Tailwind CSS](https://tailwindcss.com/). This application focuses on displaying lists of user accounts in an organized web dashboard layout, demonstrating how to split sections into separate reusable files.

---

## 📁 Component Architecture

```text
react-app-2-users/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Header bar with brand title and menu links
│   │   ├── UsersList.jsx    # Parent container containing users dataset and grid maps
│   │   ├── User.jsx         # Card template for displaying individual user profiles
│   │   └── Footer.jsx       # Bottom information banner with address details
│   ├── App.jsx              # Application root nesting Navbar, UsersList, and Footer
│   ├── main.jsx             # React entry point mounting App to DOM
│   ├── App.css              # Custom styling
│   └── index.css            # Tailwind CSS directives
├── package.json             # App metadata & dependencies
└── tailwind.config.js       # Tailwind configuration
```

### 1. Header (`Navbar.jsx`) & Footer (`Footer.jsx`)
- Demonstrates reusable semantic page sections.
- Both headers and footers use Flexbox styling (`flex justify-between bg-slate-500 text-amber-50 p-7`) to position items on opposite ends.

### 2. User Directory List (`UsersList.jsx`)
- Contains a local database array named `users` consisting of 10 user items. Each contains a name, email address, and avatar image URL.
- Maps over the array and renders a responsive grid layout using Tailwind CSS classes:
  - `grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` (1 column on mobile, 2 on tablets, and 3 on larger screens).
  - Passes each user object down to the child `User` component via the `userObj` prop.

### 3. User Profile Card (`User.jsx`)
- Receives the `userObj` from `props` as a structured object:
  ```jsx
  const { userObj } = props;
  ```
- Renders an elegant card design featuring:
  - Circular image formatting (`rounded-3xl` with auto-margins).
  - Vibrant styling details (`shadow-fuchsia-700`, `text-rose-600` for usernames, and `text-emerald-700` for emails).

---

## ⚙️ Setup & Running

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Install Dependencies
Run the following in the root of the `react-app-2-users` directory:
```bash
npm install
```

### 3. Start Development Server
Launch Vite's local dev server:
```bash
npm run dev
```
Open the provided local server URL (usually `http://localhost:5173`) in your web browser.
