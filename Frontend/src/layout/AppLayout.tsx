import { useEffect, useRef, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import HeaderSeccion from "../components/HeaderSeccion"
import Footer from "../components/Footer";
import { Link } from "../types";

const links : Link[] = [
  {
    name: 'Main', 
    pathname: '/'
  }, 
  {
    name: 'Services', 
    pathname: '/services'
  },
  {
    name: 'Portfolio', 
    pathname: '/portfolio'
  },
  {
    name: 'About us', 
    pathname: '/about-us'
  },
  {
    name: 'Contact Us', 
    pathname: '/contact-us'
  },
]

const AppLayout = () => {
  const { pathname } = useLocation();
  const [changeBackground, setChangeBackground] = useState<boolean>(false)
  const headerSeccionRef = useRef<HTMLDivElement>(null)

  const updatePosition = () => {
    if(headerSeccionRef.current) {
      const rect = headerSeccionRef.current.getBoundingClientRect();

      if(rect.bottom <= 0) {
        setChangeBackground(true)
      } else {
        setChangeBackground(false)
      }
    } else {
      setChangeBackground(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', updatePosition)

    updatePosition()
  }, [])

  return (
    <>
      <Header 
        changeBackground={changeBackground}
        links={links}
      />

      {pathname === '/' && <HeaderSeccion ref={headerSeccionRef} />}

      <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-10'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default AppLayout