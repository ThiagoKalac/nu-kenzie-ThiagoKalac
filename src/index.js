import React from 'react'
import ReactDOM from 'react-dom/client'
// import files CSS
import './styles/reset.css'
import './styles/globalStyle.css'
import './styles/flex.css'
import './styles/button.css'
//********************************
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

