import styles from '../styles/servicios.module.css';
import ProductDescription from '../components/ProductDescription';
import productos from '../data/Productos';

const Services = () => {
  return (
    <div className={`contenedor`}>
      <h2>Descubre nuestros <span>servicios</span></h2>
      <div className={`${styles.listadoProductos} contenedor`}>
        {productos?.map(product => (
          <ProductDescription 
            producto={product}
          />
        ))}
      </div>
    </div>
  )
}

export default Services