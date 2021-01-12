import { useParams } from "react-router-dom";
import styles from "./MoviePage.module.css";

function MoviePage() {
  const params = useParams();

  console.log(params);

  return (
    <div className={styles.root}>
      <h2>Movie</h2>
    </div>
  );
}

export default MoviePage;
