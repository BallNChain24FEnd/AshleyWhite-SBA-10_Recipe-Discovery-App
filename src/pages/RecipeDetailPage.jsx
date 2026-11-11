import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function RecipeDetailPage() {
  // Get recipe ID from URL
  const { recipeId } = useParams();

  // Fetch full recipe details
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
  const { data, loading, error } = useFetch(url);

  // Get the selected recipe
  const recipe = data?.meals?.[0];

  // Create ingredient and measurement list
  const ingredients = [];

  if (recipe) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];

      if (ingredient?.trim()) {
        ingredients.push(`${measure?.trim() || ""} ${ingredient}`);
      }
    }
  }

  return (
    <article className="recipe-detail">
      <Link to="/">← Back to Categories</Link>

      {/* Loading and error messages */}
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}

      {/* Display full recipe */}
      {recipe && (
        <>
          <h1>{recipe.strMeal}</h1>

          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="recipe-detail-image"
          />

          <p><strong>Category:</strong> {recipe.strCategory}</p>
          <p><strong>Country:</strong> {recipe.strArea}</p>

          <section>
            <h2>Ingredients</h2>

            <ul className="ingredient-list">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Cooking Instructions</h2>
            <p className="instructions">
              {recipe.strInstructions}
            </p>
          </section>
        </>
      )}

      {/* Recipe not found */}
      {!loading && !error && data && !recipe && (
        <p>Recipe not found.</p>
      )}
    </article>
  );
}