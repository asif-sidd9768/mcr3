import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnacksContext, SnacksProvider } from './contexts/SnacksContext.jsx'

export {SnacksContext}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnacksProvider>
      <App />
    </SnacksProvider>
  </React.StrictMode>,
)
