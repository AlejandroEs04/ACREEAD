import Producto from "./Producto";
import styles from '../styles/servicios.module.css';

const ProductDescription = ({producto}) => {
    return (
        <div className={`${styles.productoDescContainer} shadow`}>
            <Producto 
                titulo={producto.name}
                descripcion={producto.description}
                shadow={false}
                id={producto.ID}
            />

            <ul className={styles.listadoDescripcion}>
                {producto?.descriptionList?.map(description => (
                    <li key={description.ID}>{description.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProductDescription