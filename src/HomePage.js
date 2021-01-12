import { useEffect, useState } from 'react';

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
      return <div>Loading...</div>;
  }

  return (
    <div>
      {data.results.map(movie => movie.title)}
    </div>
  );
}

export default HomePage;
