# React App 1: Products Grid Dashboard

A React frontend application bootstrapped with [Vite](https://vitejs.dev/) and styled using utility-first [Tailwind CSS](https://tailwindcss.com/). This application focuses on displaying dynamic, structured e-commerce data by mapping lists of items and passing data from parent components to child components using React `props`.

---

## 📁 Key Files & Component Architecture

```text
react-app-1-products/
├── src/
│   ├── components/
│   │   └── Product.jsx      # Child component rendering individual product details
│   ├── App.jsx              # Main parent component containing the products database and map logic
│   ├── main.jsx             # React entry point mounting App to the index.html DOM
│   ├── App.css              # Custom global style modifications
│   └── index.css            # Tailwind CSS directives
├── package.json             # NPM dependencies & startup scripts
└── tailwind.config.js       # Tailwind theme & plugin configurations
```

### 1. Main Component (`src/App.jsx`)
- Contains a local database array named `products` consisting of 10 mock product objects. Each object contains fields like `id`, `title`, `price`, `description`, `category`, `image`, and `rating` (rate, count).
- Maps over the array and renders a responsive grid layout using Tailwind classes:
  - `grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` (1 column on mobile, 2 on tablets, and 3 on larger screens).
  - Passes each product object down to the child `Product` component via the `productObj` prop.
  - Implements the React unique identifier `key={product.id}` rule to optimize virtual DOM updates.

### 2. Product Card (`src/components/Product.jsx`)
- Receives the `productObj` from `props` as a structured object:
  ```jsx
  const { productObj } = props;
  ```
- Renders an e-commerce-style card styled with border styling and custom color palettes:
  - `border-amber-400 border-l-8 border-b-5` to create an asymmetrical box-border effect.
  - Custom font dimensions and text colors (`text-rose-600` for prices, `text-emerald-700` for description details).

---

## ⚙️ Setup & Running

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v16+ recommended) installed.

### 2. Install Dependencies
Run this in the root of the `react-app-1-products` directory to install dependencies (React, Vite, Tailwind CSS):
```bash
npm install
```

### 3. Start Development Server
Launch Vite's local dev server:
```bash
npm run dev
```
Open the provided local server URL (usually `http://localhost:5173`) in your web browser.
