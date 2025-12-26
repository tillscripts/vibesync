# About
-  A music app (called VibeSync).

# Summary of Features Implemented:
- Live Data: Fetches songs from the iTunes Search API.

- Search: Real-time filtering algorithm for song names and artists.

- Lazy Loading: Uses React.lazy and Suspense for the list items.

- Validation: Functional regex email validation in the Sign In page.

- External Integration: Direct subscription link to substack.com domain.

- Design: Full Tailwind CSS implementation with ad" Spotify-inspired palette.

# Project Folder Structure
___

vibesync/    <br>
├── public/   <br>
├── src/.   <br>
├── components/  <br>
│   ├── Navbar.jsx        (Header, Search, & Hamburger) <br>
│   ├── SongCard.jsx      (Individual song item) <br>
│   ├── Sidebar.jsx       (Hamburger Menu content) <br>
│   └── Skeleton.jsx      (Loading state for Lazy Loading) <br>
├── pages/ <br>
│   ├── Home.jsx          (The main list of 50 songs) <br>
│   ├── SignIn.jsx        (Functional Email Validation) <br>
│   ├── SignUp.jsx        (UI only) <br>
│   └── Pricing.jsx       (UI only) <br>
├── App.jsx               (Routing & Layout) <br>
├── main.jsx              (Entry point) <br>
└── index.css             (Tailwind imports) <br>



# React + Tailwind

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. One top of the standard Vite setup, [tailwindcss](https://tailwindcss.com/) is installed and ready to be used in React components.

Additional references:
* [Getting started with Vite](https://vitejs.dev/guide/)
* [Tailwind documentation](https://tailwindcss.com/docs/installation)

