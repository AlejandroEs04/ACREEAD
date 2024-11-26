import { Outlet, Link, useLocation } from "react-router-dom"
import { Link as LinkType } from "../types"
import { AdminProvider } from "../context/AdminContext"
import { useState } from "react"

const links : LinkType[] = [
    {
        name: 'Dashboard', 
        pathname: '/admin', 
        icon: "/homeIcon.svg"
    },
    {
        name: 'Services', 
        pathname: '/admin/services', 
        icon: "/servicesIcon.svg"
        
    },
    {
        name: 'Plans', 
        pathname: '/admin/plans', 
        icon: "/plansIcon.svg"
    },
    {
        name: 'Sales', 
        pathname: '/admin/sales',
        icon: "/salesIcon.svg"
    },
    {
        name: 'Suscriptions', 
        pathname: '/admin/suscription', 
        icon: "/suscriptionsIcon.svg"
    },
]

const AdminLayout = () => {
    const [collapseMenu, setColapseMenu] = useState(false)
    const { pathname } = useLocation()

    return (
        <AdminProvider>
            <div className="w-full flex lg:hidden flex-col bg-white py-2 px-5">
                <div className="flex justify-between items-center gap-5">
                    <div></div>
                    <img className="h-8 w-auto" src={`/AcreeadIconBlack.svg`} alt="Your Company" />
                    <button onClick={() => setColapseMenu(!collapseMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <div className={`flex flex-col justify-start ${collapseMenu ? 'h-auto' : 'collapse h-0'}`}>
                    {links.map(link => (
                        <Link key={link.pathname} to={link.pathname} className={`flex gap-x-3 p-2 rounded ${collapseMenu && 'transition-all'}`}>
                            <p>{link.name}</p>
                        </Link>
                    ))}
                </div> 
            </div>

            <div className="flex h-screen">
                <aside className="w-0 hidden lg:block lg:w-1/5 xl:w-1/6 bg-white p-6 py-8 shadow-xl">
                    <div className="px-2">
                        <img className="h-8 w-auto" src={`/AcreeadIconBlack.svg`} alt="Your Company" />
                    </div>

                    <div className="my-4 flex flex-col gap-2">
                        {links.map(link => (
                            <Link key={link.pathname} to={link.pathname} className={`flex gap-x-3 hover:bg-zinc-300 p-2 rounded transition-all ${pathname === link.pathname && 'bg-zinc-100'}`}>
                                <img src={link.icon} alt="Home icon" className="w-5" />
                                <p>{link.name}</p>
                            </Link>
                        ))}
                    </div>
                </aside>

                <main className="px-2 sm:px-6 lg:px-8 my-8 w-full lg:w-4/5 xl:w-5/6">
                    <Outlet />
                </main>
            </div>
        </AdminProvider>
    )
}

export default AdminLayout