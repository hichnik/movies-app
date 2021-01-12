import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/550?api_key=8c9f0b25d628dc3a96bcc112d2c82e63')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div>
      Hello
    </div>
  );
}

export default App;
