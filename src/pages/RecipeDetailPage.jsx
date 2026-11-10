import { useParams } from "react-router-dom";

export default function RecipeDetailPage() {
  // Get recipe ID from URL
  const { recipeId } = useParams();

  return (
    <article>
      <h1>Recipe Details</h1>
      <p>Recipe ID: {recipeId}</p>
    </article>
  );
}