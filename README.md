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


## 3d reference
```
https://sketchfab.com/3d-models/cartoon-low-poly-world-map-e87fa1e143f84348a915b7fe1376d957

https://sketchfab.com/3d-models/flying-world-castle-crows-claw-24b5c7afe3224516a9609ccd66e24d57

https://sketchfab.com/3d-models/low-poly-worlds-crafting-automation-b9e8ff1d85124c35a779d063bf33a48b

//gamer
https://sketchfab.com/3d-models/world-1-1-b75744d4581545ecafe451ad48edba18

// programer 
https://sketchfab.com/3d-models/lost-programmer-43d32e4f459f4857a054579da61bb3d6


convert 3d model to html
//https://gltf.pmnd.rs/




//library
@react-three/fiber
@react-tree/drei
#three
```
