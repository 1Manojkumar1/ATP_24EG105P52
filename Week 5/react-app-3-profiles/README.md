# React App 3: Profiles & Blogs Dashboard

A component-driven React application bootstrapped with [Vite](https://vitejs.dev/) and styled with [Tailwind CSS](https://tailwindcss.com/). This application focuses on displaying blog articles and profiles inside overlapping visual cards, utilizing CSS absolute positioning for overlapping avatar styling.

---

## 📁 Component Architecture

```text
react-app-3-profiles/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation bar with blog branding and hovering link states
│   │   ├── Profiles.jsx     # Parent grid mapping the article database into Profile cards
│   │   └── Profile.jsx      # Child card component with overlapping CSS positioning
│   ├── App.jsx              # Application root nesting Header and Profiles
│   ├── main.jsx             # React entry point mounting App to DOM
│   ├── App.css              # Custom styling
│   └── index.css            # Tailwind CSS directives
├── package.json             # App metadata & dependencies
└── tailwind.config.js       # Tailwind configuration
```

### 1. Navigation Header (`Header.jsx`)
- Uses a violet color theme (`bg-violet-400`).
- Implements two list clusters positioned on opposite ends via Flexbox (`flex justify-between`).
- Utilizes hover state styling (`hover:text-violet-600`) to provide interactive link states.

### 2. Articles Grid (`Profiles.jsx`)
- Contains a local database array named `profiles` consisting of 9 technical blogging items. Each object contains fields like `id`, `title`, `description`, `image` (banner image), `author`, `date`, and `authorImage` (avatar).
- Maps over the array and renders a responsive grid layout using Tailwind classes:
  - `grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4` (1 column on mobile, 2 on tablets, and 3 on larger screens).
  - Passes each profile object down to the child `Profile` component via the `profileObj` prop.

### 3. Profile Card with Overlapping Avatar (`Profile.jsx`)
- Receives the `profileObj` from `props` as a structured object:
  ```jsx
  const { profileObj } = props;
  ```
- **CSS absolute positioning**: Overlaps the author's avatar graphic on top of the card's main banner image by using a relative container (`.relative`) containing an absolutely positioned image (`absolute left-10 top-52 rounded-full w-20`).
- Styled with a light violet background (`bg-violet-300`) and rounded borders (`rounded-3xl`).

---

## ⚙️ Setup & Running

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Install Dependencies
Run the following in the root of the `react-app-3-profiles` directory:
```bash
npm install
```

### 3. Start Development Server
Launch Vite's local dev server:
```bash
npm run dev
```
Open the provided local server URL (usually `http://localhost:5173`) in your web browser.
