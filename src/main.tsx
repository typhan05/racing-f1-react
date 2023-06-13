import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import RacingAppProvider from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RacingAppProvider>
    <App />
  </RacingAppProvider>
)
