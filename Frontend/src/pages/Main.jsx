import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Servicio from '../components/Servicio';
import styles from '../styles/main.module.css';
import Producto from '../components/Producto';
import FormContacto from '../components/FormContacto';
import useApp from '../hooks/useApp';

const Main = () => {
    const [index, setIndex] = useState(0);

    const { productos } = useApp();

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className={styles.imageCarrouelContainer}>
                    <img src="./public/img/CarouelImage1.jpg" alt="Imagen 1 del carrouel" className={styles.imageCarrouel} />
                </Carousel.Item>
                <Carousel.Item className={styles.imageCarrouelContainer}>
                    <img src="./public/img/CarrouselImage2.jpg" alt="Imagen 1 del carrouel" className={styles.imageCarrouel} />
                </Carousel.Item>
            </Carousel>

            <div className={'contenedor'}>
                <h2>Nuestros <span>Servicios</span></h2>
                <div className={styles.listado}>
                    <Servicio 
                        titulo={'Desarrollo Frontend'}
                        descripcion={'Diseño y desarrollo de la interfaz de usuario de un sitio web'}
                        imageUrl={'Frontend'}
                    />
                    <Servicio 
                        titulo={'Desarrollo Backend'}
                        descripcion={'Diseño y desarrollo de la interfaz de usuario de un sitio web'}
                        imageUrl={'Backend'}
                    />
                    <Servicio 
                        titulo={'Mantenimiento y Actualizaciones'}
                        descripcion={'Ofrecemos servicios de soporte, correcciones de errores y mejoras continuas'}
                        imageUrl={'Tools'}
                    />
                    <Servicio 
                        titulo={'Diseño Responsive'}
                        descripcion={'Aseguramos que el sitio web se vea y funcione bien en todos los dispositivos'}
                        imageUrl={'Phone'}
                    />
                </div>
            </div>

            <div className={'contenedor'}>
                <h2>Nuestros <span>Productos</span></h2>

                <div className={styles.listado}>
                    {productos.slice(0, 4).map(product => (
                        <Producto 
                            key={product.ID}
                            titulo={product.name}
                            descripcion={product.description}
                            id={product.ID}
                        />
                    ))}
                </div>
            </div>

            <div className={'contenedor'}>
                <h2>Contactenos</h2>
                <FormContacto />
            </div>
        </>
    )
}

export default Main