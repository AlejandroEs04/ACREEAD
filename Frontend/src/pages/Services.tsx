import ServiceCardContainer from "../components/ServiceCardContainer"
import { services } from "../data"

const Services = () => {
    return (
        <>
            <h1 className="text-3xl font-semibold text-sky-600">Services</h1>

            <div className="flex flex-col gap-5 mt-2">
                {services.map(service => (
                    <ServiceCardContainer
                        key={service.id}
                        service={service}
                    />
                ))}
            </div>
        </>
    )
}

export default Services