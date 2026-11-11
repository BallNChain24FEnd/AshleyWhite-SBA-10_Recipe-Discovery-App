import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Create shared favorites context
const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  // Save favorite recipe IDs
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  // Add a recipe ID
  function addFavorite(id) {
    setFavorites(prev =>
      prev.includes(id) ? prev : [...prev, id]
    );
  }

  // Remove a recipe ID
  function removeFavorite(id) {
    setFavorites(prev =>
      prev.filter(favoriteId => favoriteId !== id)
    );
  }

  // Check if recipe is saved
  function isFavorite(id) {
    return favorites.includes(id);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// Access favorites from any component
export function useFavorites() {
  return useContext(FavoritesContext);
}