import styles from '../styles/main.module.css';

const Producto = ({titulo, descripcion, url}) => {
  return (
    <div className={`${styles.productoContainer} shadow`}>
        <h4>Sitios web<br/><span>{titulo}</span></h4>
        <p>{descripcion}</p>
        <button>Saber más</button>
    </div>
  )
}

export default Producto