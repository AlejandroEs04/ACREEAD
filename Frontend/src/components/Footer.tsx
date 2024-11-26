import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-neutral-800 py-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center sm:items-start">
                        <img src="./public/logoWhite.svg" alt="Logo de Acreead" className="max-w-56" />
                        <p className="text-sm font-light text-white mt-2">Innovating with the technology</p>
                    </div>

                    <div className="flex flex-col items-center sm:items-end">
                        <p className="text-white font-semibold">Navigation</p>
                        <nav className="text-gray-400 flex gap-2 flex-row sm:flex-col items-center sm:items-end">
                            <Link className="hover:text-gray-50" to={`/`}>Main</Link>
                            <Link className="hover:text-gray-50" to={`/services`}>Services</Link>
                            <Link className="hover:text-gray-50" to={`/portfolio`}>Portfolio</Link>
                            <Link className="hover:text-gray-50" to={`/about-us`}>About Us</Link>
                            <Link className="hover:text-gray-50" to={`/contact-us`}>Contact Us</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col items-center sm:items-end text-gray-50">
                        <p className="text-white font-semibold">Social Media</p>

                        <Link to={``}>Facebook</Link>
                        <Link to={``}>Instagram</Link>
                        <Link to={``}>Whatsapp</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer