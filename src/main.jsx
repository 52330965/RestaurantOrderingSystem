import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as browserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <browserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </browserRouter>
)
