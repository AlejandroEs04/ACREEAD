import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navegacion = () => {
    const { pathname } = useLocation();
    
    return (
        <nav>
            <Link to={'/'} className={`link ${pathname === '/' ? 'active' : ''}`}>Inicio</Link>
            <Link to={'/servicios'} className={`link ${pathname === '/servicios' ? 'active' : ''}`}>Servicios</Link>
            <Link to={'/nosotros'} className={`link ${pathname === '/nosotros' ? 'active' : ''}`}>Nosotros</Link>
            <Link to={'/'} className={`link ${pathname === '/portafolio' ? 'active' : ''}`}>Portafolio</Link>
            <Link to={'/'} className={`link ${pathname === '/contacto' ? 'active' : ''}`}>Contactanos</Link>
        </nav> 
    )
}

export default Navegacion