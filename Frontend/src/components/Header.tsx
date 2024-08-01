import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const [showNav, setShowNav] = useState(false)

    const { pathname } = useLocation()

    const toggleNav = () => setShowNav(!showNav)
    return (
        <header className='bg-zinc-800 shadow sticky top-0 z-10'>
            <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5" onClick={toggleNav}></span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <Link to={'/'} className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src="/AcreeadIconWhite.svg" alt="Your Company" />
                        </Link>
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <Link to="/" className={`rounded-md transition-colors px-3 py-2 text-sm font-medium ${pathname === '/' ? 'text-white bg-zinc-700' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>Main</Link>
                            <Link to="/services" className={`rounded-md transition-colors px-3 py-2 text-sm font-medium ${pathname === '/services' ? 'text-white bg-zinc-700' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>Services</Link>
                            <Link to="/portfolio" className={`rounded-md transition-colors px-3 py-2 text-sm font-medium ${pathname === '/portfolio' ? 'text-white bg-zinc-700' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>Portfolio</Link>
                            <Link to="/about-us" className={`rounded-md transition-colors px-3 py-2 text-sm font-medium ${pathname === '/about-us' ? 'text-white bg-zinc-700' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>About Us</Link>
                            <Link to="/contact-us" className={`rounded-md transition-colors px-3 py-2 text-sm font-medium ${pathname === '/contact-us' ? 'text-white bg-zinc-700' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>Contact Us</Link>
                        </div>
                        </div>
                    </div>
                    <div className={`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}>
                        <Link
                            to={`/auth/login`}
                            className="rounded-md bg-zinc-700 hover:bg-sky-800 hover:shadow transition-colors px-5 py-2 text-sm font-light text-white"
                        >Login</Link>
                    </div>
                </div>
            </div>

            <div className={`${!showNav && 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                <Link to="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Main</Link>
                <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Services</Link>
                <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Portfolio</Link>
                <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</Link>
                <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</Link>
                </div>
            </div>
        </header>
    )
}

export default Header