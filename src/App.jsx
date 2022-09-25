import { useState } from 'react';
import './App.css';
import LandPage from './components/LandPage/LandPage.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  

  return (
    <div>
      {
        isLoggedIn ? (
          <h1>Ola</h1>
        ):
      <LandPage setIsLoggedIn={setIsLoggedIn} />
      }
    </div>
  );
}

export default App;
