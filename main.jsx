import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import { CineProvider } from './context/CineContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CineProvider>
        <App />
      </CineProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
