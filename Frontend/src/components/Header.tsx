import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Link as LinkType } from "../types"

type HeaderProps = {
    changeBackground? : boolean, 
    links : LinkType[]
}

const Header = ({ changeBackground, links } : HeaderProps ) => {
    const [showNav, setShowNav] = useState(false)

    const { pathname } = useLocation()

    const toggleNav = () => setShowNav(!showNav)
    return (
        <header className={`${changeBackground ? 'bg-gray-100 shadow-lg' : 'bg-zinc-800'} sticky top-0 z-10 transition-colors`}>
            <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className={`relative flex h-16 items-center justify-between`}>
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p- changeBackground ? 'text-gray-700' :2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5" onClick={toggleNav}></span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <Link to={'/'} className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src={`/${changeBackground ? 'AcreeadIconBlack' : 'AcreeadIconWhite'}.svg`} alt="Your Company" />
                        </Link>
                        
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {links.map(link => (
                                    <Link key={link.pathname} to={link.pathname} className={`rounded-md transition-colors px-3 py-2 text-sm font-medium ${pathname === link.pathname ? 'text-white bg-zinc-700' : `hover:bg-gray-700 hover:text-white ${changeBackground ? 'text-gray-700' : 'text-gray-400'}`}`}>{link.name}</Link>
                                ))}
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
                    {links.map(link => (
                        <Link key={link.pathname} to={link.pathname} className={`block rounded-md px-3 py-2 text-base font-medium ${changeBackground ? 'text-gray-700' : 'text-gray-300'}  hover:bg-gray-700 hover:text-white transition-colors`}>{link.name}</Link>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header