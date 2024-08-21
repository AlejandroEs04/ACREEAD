import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClientProvider } from './context/ClientContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClientProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ClientProvider>
  </React.StrictMode>,
)
