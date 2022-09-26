import { useState } from 'react'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import LandPage from './components/LandPage/LandPage.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [listTransictions, setListTransictions] = useState([])

  return (
    <div>
      {
        isLoggedIn ? (
          <Dashboard setIsLoggedIn={setIsLoggedIn} listTransictions={listTransictions} setListTransictions={setListTransictions} />
        ): (
          <LandPage setIsLoggedIn={setIsLoggedIn} />
        )
      }
    </div>
  );
}

export default App
