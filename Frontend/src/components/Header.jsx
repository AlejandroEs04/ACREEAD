import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className="shadow">
            <Container className='header'>
               <div>
                    <h1 className="logo">ACREEAD</h1>
                </div>

                <nav>
                    <Link to={'/'} className={`link ${pathname === '/' ? 'active' : ''}`}>Inicio</Link>
                    <Link to={'/'} className={`link ${pathname === '/servicios' ? 'active' : ''}`}>Servicios</Link>
                    <Link to={'/'} className={`link ${pathname === '/nosotros' ? 'active' : ''}`}>Nosotros</Link>
                    <Link to={'/'} className={`link ${pathname === '/portafolio' ? 'active' : ''}`}>Portafolio</Link>
                    <Link to={'/'} className={`link ${pathname === '/contacto' ? 'active' : ''}`}>Contactanos</Link>
                </nav> 
            </Container>
        </header>
    )
}

export default Header