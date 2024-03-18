import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Container from 'react-bootstrap/Container'
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
        <Header />
        <main>
            <Container className="mainContainer">
                <Outlet />
            </Container>
        </main>
        <Footer />
    </>
  )
}

export default MainLayout