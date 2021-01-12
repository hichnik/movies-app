import { useEffect, useState } from 'react';
import { Spinner } from '@veriff/genoma';
import MovieCard from './MovieCard';
import styles from './HomePage.module.css';

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=8c9f0b25d628dc3a96bcc112d2c82e63');
        const json = await response.json();
        setData(json);
    }

    fetchData();
  }, []);

  if (!data) {
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
        {data.results.map(movie => (
            <MovieCard key={movie.id} title={movie.title} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
