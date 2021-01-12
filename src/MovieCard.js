import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard({ id, title, posterPath }) {
  return (
    <div className={styles.root}>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
      />
      <h3 className={styles.title}>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h3>
    </div>
  );
}

export default MovieCard;
