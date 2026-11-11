import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

// Load one saved recipe
function FavoriteRecipe({ id }) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, loading, error } = useFetch(url);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  const recipe = data?.meals?.[0];

  return recipe ? <RecipeCard recipe={recipe} /> : null;
}

export default function FavoritesPage() {
  // Get saved recipe IDs
  const { favorites } = useFavorites();

  return (
    <section>
      <h1>My Favorite Recipes</h1>

      {/* Show message when empty */}
      {favorites.length === 0 ? (
        <>
          <p>You have no favorites yet. Explore recipes and add some!</p>
          <Link to="/">Explore Recipes</Link>
        </>
      ) : (
        <>
          <p>You saved {favorites.length} recipe(s).</p>

          {/* Display saved recipes */}
          <div className="recipe-grid">
            {favorites.map(id => (
              <FavoriteRecipe key={id} id={id} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}