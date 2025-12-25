# About
-  A music app (called VibeSync).

# Summary of Features Implemented:
- Live Data: Fetches 50 real songs from the iTunes Search API.

- Search: Real-time filtering algorithm for song names and artists.

- Lazy Loading: Uses React.lazy and Suspense for the list items.

- Validation: Functional regex email validation in the Sign In page.

- External Integration: Direct subscription link to substack.com domain.

- Design: Full Tailwind CSS implementation with ad" Spotify-inspired palette.

# Project Folder Structure
___

vibesync/<br>
├── public/ <br>
├── src/ <br>
│   ├── assets/            # Images and Icons  <br> 
│   ├── components/       # Reusable UI pieces <br>
│   │   ├── Layout/.       <br>
│   │   │   ├── Navbar.jsx.      <br>
│   │   │   └── Footer.jsx. <br>
│   │   ├── Music/  <br>
│   │   │   ├── SongCard.jsx  <br>
│   │   │   └── SearchBar.jsx  10 <br> 
│   │   └── UI/  <br>
│   │       ├── HamburgerMenu.jsx  <br>
│   │       └── PricingCard.jsx  <br>
│   ├── hooks/            # Custom logic (Search/Fetch) <br>
│   │   └── useMusicData.js  <br>
│   ├── pages/           # Main Page views <br> 
│   │   ├── Home.jsx  <br>
│   │   ├── SignIn.jsx  <br>
│   │   ├── Pricing.jsx  <br>
│   │   └── Subscribe.jsx  <br>
│   ├── App.jsx            # Routes and Providers <br>
│   ├── index.css           # Tailwind Directives <br>
│   └── main.jsx  <br>
├── tailwind.config.js  <br>
└── package.json  <br>



# React + Tailwind

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. One top of the standard Vite setup, [tailwindcss](https://tailwindcss.com/) is installed and ready to be used in React components.

Additional references:
* [Getting started with Vite](https://vitejs.dev/guide/)
* [Tailwind documentation](https://tailwindcss.com/docs/installation)

