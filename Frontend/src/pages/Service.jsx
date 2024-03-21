import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styles from '../styles/servicios.module.css'
import useApp from "../hooks/useApp";

const Service = () => {
    const [product, setProduct] = useState({})

    const { id } = useParams();
    const { productos } = useApp();

    useEffect(() => {
        const productFilter = productos?.filter(product => product.ID === +id);
        setProduct(productFilter[0])
    }, [])

    return (
        <div className='contenedor'>
            <h1>Sitios web <span>{product.name}</span></h1>
            <p>{product.description}</p>
        </div>
    )
}

export default Service