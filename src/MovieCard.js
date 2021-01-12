import styles from "./MovieCard.module.css";

function MovieCard({ title, posterPath }) {
  return (
    <div className={styles.root}>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
      />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}

export default MovieCard;
