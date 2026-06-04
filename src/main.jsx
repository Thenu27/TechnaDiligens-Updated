import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import LoadingManager from './components/LoadingManager/LoadingManager.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <LoadingManager>
      <App/>
    </LoadingManager>
    </BrowserRouter>
  </StrictMode>,
)
