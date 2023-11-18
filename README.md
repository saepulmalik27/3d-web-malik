## setup project using vite

```
yarn create vite

- react
- typescript

```

## Install Tailwindcss

```
yarn add -D tailwindcss postcss autoprefixer

//

npx tailwindcss init -p

//setup tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

```

## setup alias on vite

```
//vite.config.js


```
