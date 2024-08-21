import { useEffect, useState } from 'react';
import { useClient } from '../hooks/useClient'
import { services } from '../data';
import { Service } from '../types';
import { currencyFormat } from '../helpers';
import { Link } from 'react-router-dom';

const ServiceSelectorContainer = () => {
  const [service, setService] = useState<Service>({
    id: 0, 
    name: '', 
    description: '', 
    plans: []
  });
  const { state, dispatch } = useClient();

  const handleChangeServiceId = (id : number) => {
    dispatch({ type: 'change-service-id', payload: { id } })
  }

  useEffect(() => {
    if(state.serviceId) {
      const serviceSelected = services.filter(service => service.id === state.serviceId)[0];
      setService(serviceSelected)
    }
  }, [state.serviceId])

  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 mt-3 rounded-xl shadow-md">
      <div className="broder-r-0 md:border-r">
        <div className="px-5 py-3">
          <h4>Select any service</h4>
        </div>

        <div>
          {services.map(service => service.plans.length > 0 && (
            <button 
              key={service.id}
              type="button" 
              onClick={() => handleChangeServiceId(service.id)}
              className="flex justify-between items-center last-of-type:rounded-bl-xl border-t px-5 py-2 hover:bg-slate-50 w-full"
            >
                <p className="font-medium" key={service.id}>{service.name}</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
          ))}
        </div>
      </div>

      <div>
        {state.serviceId ? (
          <div>
            <h4 className='px-4 py-3 border-b'>Plans for <span className='font-semibold'>{service.name}</span></h4>

            {service.plans.length > 0 ? (
              <div className='flex flex-col'>
                {service.plans.map(plan => (
                  <div className='border-b grid grid-cols-2 sm:grid-cols-3'>
                    <div className='p-4 sm:col-span-2'>
                      <p className='text-xl'>{plan.name}</p>
                      <p className='text-sm'>{plan.description}</p>
                    </div>
                    
                    <div className='bg-slate-100 text-center flex flex-col items-center justify-center p-4'>
                      <p className='font-semibold text-sm'>Only one pay</p>
                      <p className='text-2xl text-sky-800 font-bold'>{currencyFormat(plan.price)}</p>

                      <Link to={`services/${state.serviceId}/${plan.id}`} className='px-3 py-1 rounded bg-sky-800 text-white mt-2'>Know more</Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
              
              </div>
            )}
          </div>
        ) : (
          <div className='flex flex-col justify-center items-center h-full'>
            <p className='font-bold text-lg'>Seleccione algun servicio</p>
            <p>Haz click en el servicio que te interese, para ver los planes disponibles</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceSelectorContainer