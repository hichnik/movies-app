import { useParams } from "react-router-dom";
import useApiRequest from "./useApiRequest";
import styles from "./MoviePage.module.css";

function MoviePage() {
  const { id } = useParams();
  const { data, loading, error } = useApiRequest(`/movie/${id}`);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading || !data) {
    return <div>Loading..</div>;
  }

  return (
    <div className={styles.root}>
      <h2>{data.title}</h2>
    </div>
  );
}

export default MoviePage;
