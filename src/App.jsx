import { useState } from 'react';
import './App.css';
import LandPage from './components/LandPage/LandPage.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <LandPage/>
    </div>
  );
}

export default App;
