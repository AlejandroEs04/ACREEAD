import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Container from 'react-bootstrap/Container'
import Footer from "../components/Footer";
import MenuSlider from "../components/MenuSlider";
import useApp from "../hooks/useApp";

const MainLayout = () => {
  const { menuSlider } = useApp();

  return (
    <>
      {menuSlider && (
        <MenuSlider />
      )}
      
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