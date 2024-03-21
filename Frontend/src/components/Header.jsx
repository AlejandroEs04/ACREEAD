import Container from 'react-bootstrap/Container'
import Navegacion from "./Navegacion";

const Header = () => {
    return (
        <header className="shadow">
            <Container className='header'>
               <div>
                    <h1 className="logo">ACREEAD</h1>
                </div>

                <Navegacion />
            </Container>
        </header>
    )
}

export default Header