import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Servicio from '../components/Servicio';
import styles from '../styles/main.module.css';
import Producto from '../components/Producto';

const Main = () => {
    const [index, setIndex] = useState(0);

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

            <div className={styles.contenedor}>
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

            <div className={styles.contenedor}>
                <h2>Nuestros <span>Productos</span></h2>

                <div className={styles.listado}>
                    <Producto 
                        titulo={'estaticos'}
                        descripcion={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit diam id molestie sagittis. Duis non sagittis sem.'}
                    />
                    <Producto 
                        titulo={'dinámicos'}
                        descripcion={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit diam id molestie sagittis. Duis non sagittis sem.'}
                    />
                    <Producto 
                        titulo={'e-commerce'}
                        descripcion={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit diam id molestie sagittis. Duis non sagittis sem.'}
                    />
                    <Producto 
                        titulo={'perzonalizados'}
                        descripcion={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit diam id molestie sagittis. Duis non sagittis sem.'}
                    />
                </div>
            </div>

            <div className={styles.contenedor}>
                <h2>Contactenos</h2>
                <div className={styles.formularioContacto}>
                    <form>
                        <div>
                            <div>
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" />
                            </div>
                        </div>
                    </form>

                    <div className={styles.infoContacto}>
                        <p>Nos pondremos en contacto lo más pronto posible</p>

                        <div className={styles.contactoIcons}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </div>

                            <p>8110367083</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main