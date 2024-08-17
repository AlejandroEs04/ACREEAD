import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { services } from "../data";
import { Service as ServiceType } from "../types";

const Service = () => {
    const [currentService, setCurrentService] = useState<ServiceType>()
    const { id } = useParams();

    useEffect(() => {
        if (id)
            setCurrentService(services.filter(service => service.id === +id)[0])
    }, [services, id])

    return (
        <>
            <h1 className="text-3xl font-semibold text-sky-600">{currentService?.name}</h1>
        </>
    )
}

export default Service