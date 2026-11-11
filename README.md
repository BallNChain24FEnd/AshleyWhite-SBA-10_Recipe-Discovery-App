# SBA 10 — Global Recipe Discovery App

A React recipe discovery application that allows users to explore recipes from around the world, search by name, view cooking instructions, and save their favorites.

## Features

1. **Explore Recipes:** Browse categories and view recipes with images, ingredients, and instructions.
2. **Search Recipes:** Search by recipe name and view matching results.
3. **Save Favorites:** Add or remove favorite recipes and keep them saved after refreshing the browser.

## Technologies Used

- React (JavaScript/JSX)
- Vite
- React Router
- Context API
- Custom Hooks (`useFetch`, `useLocalStorage`)
- TheMealDB API
- HTML and CSS

## Getting Started

Install dependencies:

`npm install`

Start the application:

`npm run dev`

Build for production:

`npm run build`

## React Concepts Practiced

- **useState:** Manages component state and search input.
- **useEffect:** Handles API requests and saves favorites.
- **Custom Hooks:** Reuses fetching and localStorage logic.
- **Context API:** Shares favorite recipe IDs across components.
- **React Router:** Navigates between categories, recipes, search results, and favorites.
- **Conditional Rendering:** Displays loading messages, errors, and empty states.

## Additional JavaScript Concepts

### encodeURIComponent()

I used JavaScript's built-in `encodeURIComponent()` function to safely include recipe categories and search terms in URLs.

For example, `"Fish & Chips"` becomes `"Fish%20%26%20Chips"`.

This helps prevent special characters from interfering with API requests and navigation.

### Testing useLocalStorage

I created a reusable `useLocalStorage` hook using `useState` and `useEffect`.

To verify that it works, I added a recipe to Favorites, refreshed the browser, and checked whether the recipe remained saved.

I also learned that the terminal command `touch` creates an empty file. I briefly created `StorageTest.jsx` while exploring an optional testing approach, but removed it because it was not required. I tested the hook through the actual Favorites feature instead.

## Reflection

**1. What was a challenge?**

Connecting the API, React Router, and Favorites Context was challenging because each feature needed to work together.

**2. What design decision did I make?**

I created reusable components and custom hooks to avoid repeating code. I also stored only favorite recipe IDs in localStorage and retrieved their details from TheMealDB API.

**3. What did I learn?**

I learned how to combine API fetching, React Router, Context API, custom hooks, and localStorage to build an interactive React application.

## Resources

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vite.dev/guide/)
- [TheMealDB API](https://www.themealdb.com/api.php)
- [MDN — encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- [Google Search](https://www.google.com/)