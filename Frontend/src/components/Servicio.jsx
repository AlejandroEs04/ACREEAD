import styles from '../styles/main.module.css';

const Servicio = ({titulo, descripcion, link, imageUrl}) => {
  return (
    <div className={styles.serviceCard}>
        <img src={`./public/img/${imageUrl}.svg`} alt="" />
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <button>Saber más</button>
    </div>
  )
}

export default Servicio