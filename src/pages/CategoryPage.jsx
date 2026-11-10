import { useParams } from "react-router-dom";

export default function CategoryPage() {
  // Get category from URL
  const { categoryName } = useParams();

  return (
    <section>
      <h1>{categoryName} Recipes</h1>
      <p>Explore recipes in the {categoryName} category.</p>
    </section>
  );
}