import { useParams } from "react-router-dom";
import useApiRequest from "./useApiRequest";
import MovieCard from "./MovieCard";
import styles from "./MoviePage.module.css";

function MoviePage() {
  const { id } = useParams();
  const movie = useApiRequest(`/movie/${id}`);
  const similarMovies = useApiRequest(`/movie/${id}/similar`);

  if (movie.error) {
    return <div>{movie.error}</div>;
  }

  if (movie.loading || !movie.data) {
    return <div>Loading..</div>;
  }

  return (
    <div className={styles.root}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.data.poster_path}`}
        alt={movie.data.title}
      />
      <h2>{movie.data.title}</h2>

      {similarMovies.data &&
        similarMovies.data.results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))}
    </div>
  );
}

export default MoviePage;
