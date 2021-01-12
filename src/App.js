import '@veriff/genoma/lib/base.css';
import { AppHeader } from '@veriff/genoma';
import HomePage from './HomePage';

function App() {
  return (
    <div>
      <AppHeader>
        <AppHeader.Title>Movie app</AppHeader.Title>
      </AppHeader>
      <HomePage />
    </div>
    
  );
}

export default App;
