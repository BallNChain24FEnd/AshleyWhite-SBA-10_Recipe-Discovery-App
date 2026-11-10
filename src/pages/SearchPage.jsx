import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  // Read search query from URL
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <section>
      <h1>Search Recipes</h1>
      <p>
        {query ? `Results for: ${query}` : "Search for a delicious recipe!"}
      </p>
    </section>
  );
}