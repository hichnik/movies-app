import { useEffect, useState } from "react";

export default function useApiRequest(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3${path}?api_key=8c9f0b25d628dc3a96bcc112d2c82e63`
        );

        const json = await response.json();

        if (!response.ok) {
          throw new Error(json.status_message);
        }

        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        setData(null);
      }
    }

    fetchData();
  }, [path]);

  return { data, loading, error };
}
