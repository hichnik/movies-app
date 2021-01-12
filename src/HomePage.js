import { Spinner } from "@veriff/genoma";
import useApiRequest from "./useApiRequest";
import MovieCard from "./MovieCard";
import styles from "./HomePage.module.css";

function HomePage() {
  const { data, loading, error } = useApiRequest("/trending/movie/week");

  if (error) {
    return <div className={styles.root}>{error}</div>;
  }

  if (loading || !data) {
    return (
      <div className={styles.root}>
        <Spinner size="large" />
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <h2>Trending</h2>
      <div className={styles.movies}>
        {data.results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
