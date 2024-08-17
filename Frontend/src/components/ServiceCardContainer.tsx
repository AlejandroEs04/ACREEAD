import { Link } from 'react-router-dom'
import { Service } from '../types/index'

export type ServiceCardContainerProps = {
    service: Service
}

const ServiceCardContainer = ({ service } : ServiceCardContainerProps) => {
    return (
        <div className="bg-white rounded p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 shadow-md">
            <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold text-sky-600">{service.name}</h2>
                <p className="text-sm">{service.description}</p>

                <p className="font-semibold mt-1">Planes disponibles:</p>
                {service.plans.length ? (
                    <p>{service.plans.map(service => service.name + "; ")}</p>
                ) : (
                    <p>No hay planes disponibles</p>
                )}

                <div className='mt-3'>
                    <Link 
                        to={`/services/${service.id}`}
                        className="px-2 py-1 bg-sky-600 hover:bg-sky-700 transition-colors text-white rounded"
                    >Saber mas</Link>
                </div>

            </div>

            <div>
                Imagen del servicio
            </div>
        </div>
    )
}

export default ServiceCardContainer