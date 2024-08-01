import { Link } from "react-router-dom"
import ServiceContainer from "../components/ServiceContainer"
import { services } from "../data"
import ServiceSelectorContainer from "../components/ServiceSelectorContainer"
import ContactForm from "../components/ContactForm"

const Index = () => {
    return (
        <>
            <div>
                <h2 className="text-center text-3xl font-semibold uppercase">Services</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-3 mb-2">
                    {services.slice(0,3).map(service => (
                        <ServiceContainer 
                            service={service}
                            key={service.id}
                        />
                    ))}

                </div>
                <Link className="text-neutral-600 hover:text-neutral-800" to={`/services`}>See more</Link>
            </div>

            <div className="mt-8">
                <h2 className="text-center text-3xl font-semibold uppercase">Plans</h2>
                <p className="text-center">Cada uno de nuestros servicios, ofrece planes ajustados a las necesidades de tu negocio</p>

                <ServiceSelectorContainer />
            </div>
            
            <div className="mt-8">
                <h2 className="text-center text-3xl font-semibold uppercase">Contact us</h2>

                <ContactForm />
            </div>
        </>
    )
}

export default Index