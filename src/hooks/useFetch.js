import { useState, useEffect } from "react";

export default function useFetch(url) {
  // Store API data and status
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Skip empty URLs
    if (!url) return;

    const controller = new AbortController();

    async function getData() {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch recipes.");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    getData();

    // Cancel old requests
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}