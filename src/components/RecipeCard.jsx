import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      {/* Recipe image and details link */}
      <Link to={`/recipe/${recipe.idMeal}`}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <h3>{recipe.strMeal}</h3>
      </Link>
    </article>
  );
}