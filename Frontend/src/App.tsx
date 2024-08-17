import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Index from "./pages/Index"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Services from "./pages/Services"
import Service from "./pages/Service"
import Portfolio from "./pages/Portfolio"

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
