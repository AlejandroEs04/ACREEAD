import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import MainLayout from './layout/MainLayout'
import Main from './pages/Main'
import { AppProvider } from './context/AppProvider'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Service from './pages/Service'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Main />}/>
              <Route path='servicios' element={<Services />} />
              <Route path='servicios/:id' element={<Service />} />
              <Route path='nosotros' element={<AboutUs />} />
            </Route>
          </Routes>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
