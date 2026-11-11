import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function SearchPage() {
  // Read query from URL
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query")?.trim() || "";

  // Fetch matching recipes
  const url = query
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
    : null;

  const { data, loading, error } = useFetch(url);

  return (
    <section>
      <h1>Search Recipes</h1>

      {/* Empty search */}
      {!query && <p>Enter a recipe name in the above search bar.</p>}

      {/* Loading and error messages */}
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}

      {/* Search results */}
      {query && !loading && !error && data?.meals && (
        <>
          <h2>Results for: {query}</h2>

          <div className="recipe-grid">
            {data.meals.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
              />
            ))}
          </div>
        </>
      )}

      {/* No matching recipes */}
      {query && !loading && !error && data && !data.meals && (
        <p>No recipes found for "{query}". Try another name!</p>
      )}
    </section>
  );
}