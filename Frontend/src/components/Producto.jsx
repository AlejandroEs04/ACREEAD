import { Link } from 'react-router-dom';
import styles from '../styles/servicios.module.css';

const Producto = ({titulo, descripcion, url, shadow = true, btn = true, id}) => {
  return (
    <div className={`${styles.productoContainer} ${shadow && 'shadow'}`}>
        <h4>Sitios web<br/><span>{titulo}</span></h4>
        <p>{descripcion}</p>
        {btn && (
          <Link to={`/servicios/${id}`} className={styles.button}>Saber más</Link>
        )}
    </div>
  )
}

export default Producto