import { Service } from "../types"

type ServiceContainerProps = {
    service: Service
}

const ServiceContainer = ({ service } : ServiceContainerProps) => {
    return (
        <div className="bg-white shadow-md p-4 rounded-xl hover:shadow-xl transition-shadow">
            <h3 className="font-semibold text-2xl text-center text-sky-800">{service.name}</h3>
            <div className="flex items-center justify-center my-1 gap-2">
                <div className="w-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
                
                <div className="w-5/6">
                    <p className="text-sm">{service.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceContainer