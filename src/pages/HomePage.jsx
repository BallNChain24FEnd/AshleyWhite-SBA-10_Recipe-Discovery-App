import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function HomePage() {
  // Fetch recipe categories
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const { data, loading, error } = useFetch(url);

  return (
    <section>
      <h1>Global Recipe Discovery App</h1>

      <p>Discover authentic recipes from around the world!</p>

      <p>
        Search recipes, explore different categories, and save your favorite ones.
      </p>

      <h2>Explore Recipe Categories</h2>

      {/* Show API status */}
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}

      {/* Show number of categories */}
      {data?.categories && (
        <p>Found {data.categories.length} recipe categories!</p>
      )}
    </section>
  );
}