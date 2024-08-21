import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Index from "./pages/Index"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Services from "./pages/Services"
import Service from "./pages/Service"
import Portfolio from "./pages/Portfolio"
import Admin from "./pages/Admin"
import AdminLayout from "./layout/AdminLayout"
import AdminServices from "./pages/AdminServices"
import CrudService from "./pages/CrudService"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Index />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<Service />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>

        <Route path="/auth" element={<AppLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="services/create" element={<CrudService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
