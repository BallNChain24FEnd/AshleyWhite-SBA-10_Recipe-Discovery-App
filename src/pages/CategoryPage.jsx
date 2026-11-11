import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function CategoryPage() {
  // Get category name from URL
  const { categoryName } = useParams();

  // Fetch recipes for this category
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(categoryName)}`;
  const { data, loading, error } = useFetch(url);

  return (
    <section>
      <h1>{categoryName} Recipes</h1>

      <p>Explore authentic {categoryName} recipes from around the world!</p>

      <Link to="/">← Back to Categories</Link>

      {/* Loading and error messages */}
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}

      {/* Display recipe cards */}
      {data?.meals && (
        <div className="recipe-grid">
          {data.meals.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
            />
          ))}
        </div>
      )}

      {/* No recipes found */}
      {!loading && !error && data && !data.meals && (
        <p>No recipes found in this category.</p>
      )}
    </section>
  );
}