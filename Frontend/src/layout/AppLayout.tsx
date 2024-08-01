import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import HeaderSeccion from "../components/HeaderSeccion"

const AppLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />

      {pathname === '/' && <HeaderSeccion />}

      <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-10'>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout