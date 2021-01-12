import { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    async function fetchData() {
        const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=8c9f0b25d628dc3a96bcc112d2c82e63');
        const json = await response.json();
        console.log(json);
    }

    fetchData();
  }, []);

  return (
    <div>
      Hello
    </div>
  );
}

export default HomePage;
