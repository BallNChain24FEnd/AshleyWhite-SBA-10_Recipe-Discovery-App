import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function HomePage() {
  // Fetch all recipe categories
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const { data, loading, error } = useFetch(url);

  return (
    <section>
      {/* Welcome message */}
      <h1>Global Recipe Discovery App</h1>
      <p>Discover authentic recipes from around the world!</p>
      <p>
        Search recipes, explore different categories, and save your favorite ones.
      </p>

      <h2>Explore Recipe Categories</h2>

      {/* API loading and error messages */}
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}

      {/* Display clickable categories */}
      {data?.categories && (
        <div className="category-grid">
          {data.categories.map((category) => (
            <Link
              to={`/category/${encodeURIComponent(category.strCategory)}`}
              key={category.idCategory}
              className="category-card"
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
              />
              <h3>{category.strCategory}</h3>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}