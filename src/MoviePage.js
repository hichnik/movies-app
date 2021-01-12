import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MoviePage.module.css";

function MoviePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8c9f0b25d628dc3a96bcc112d2c82e63`
      );
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading..</div>;
  }

  return (
    <div className={styles.root}>
      <h2>{data.title}</h2>
    </div>
  );
}

export default MoviePage;
