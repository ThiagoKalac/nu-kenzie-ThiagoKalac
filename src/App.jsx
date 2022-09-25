import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import LandPage from './components/LandPage/LandPage.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  

  return (
    <div>
      {
        isLoggedIn ? (
          <Dashboard setIsLoggedIn={setIsLoggedIn} />
        ): (
          <LandPage setIsLoggedIn={setIsLoggedIn} />
        )
      }
    </div>
  );
}

export default App
