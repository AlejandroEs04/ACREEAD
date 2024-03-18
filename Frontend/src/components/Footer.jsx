import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const { pathname } = useLocation();

    return (
        <footer>
            <div className="container footer">
                <div className="infoFooter">
                    <h3>ACREEAD</h3>
                    <p className="contacto">Contacto</p>
                    <p className="infoContacto">Num. Telefono: <span>8110367083</span></p>
                    <p className="infoContacto">Correo: <span>ventas@acreead.com</span></p>
                    <br />
                    <p className="infoContacto">Dirección: <span>Aragon 118, Privadass del rey, Apodaca, Nuevo Léon</span></p>
                </div>

                <nav>
                    <Link to={'/'} className={`link ${pathname === '/' ? 'active' : ''}`}>Inicio</Link>
                    <Link to={'/'} className={`link ${pathname === '/servicios' ? 'active' : ''}`}>Servicios</Link>
                    <Link to={'/'} className={`link ${pathname === '/nosotros' ? 'active' : ''}`}>Nosotros</Link>
                    <Link to={'/'} className={`link ${pathname === '/portafolio' ? 'active' : ''}`}>Portafolio</Link>
                    <Link to={'/'} className={`link ${pathname === '/contacto' ? 'active' : ''}`}>Contactanos</Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer