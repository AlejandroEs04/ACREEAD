import { useState, ChangeEvent } from 'react'
import InputContainer from '../components/InputContainer'
import TextareaContainer from '../components/TextareaContainer'
import { Service } from '../types'
import { useAdmin } from '../hooks/useAdmin'
import { currencyFormat } from '../helpers'
import AlertText from '../components/AlertText'

const serviceInitialState = {
    id: 0,
    name: '', 
    description: '', 
    plans: []
    
}

const CrudService = () => {
    const [service, setService] = useState<Service>(serviceInitialState)
    const [planId, setPlanId] = useState(0)
    const [alertText, setAlertText] = useState({ msg: '', type: 0 })
    const { state } = useAdmin()

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target

        setService({
            ...service, 
            [name] : value
        })
    }

    const handleAddPlan = () => {
        if(!planId || service.plans.filter(plan => plan.id === planId).length) {
            setAlertText({ type: 1, msg: 'Please select a plan or select another plan' })

            setTimeout(() => {
                setAlertText({ type: 0, msg: '' })
            }, 3000)
            return 
        }
        
        const plan = state.plans.filter(plan => plan.id === planId)[0]
        setService({
            ...service, 
            plans: [
                ...service.plans, 
                plan
            ]
        })

        setAlertText({ type: 0, msg: '' })
    }

    const handleDeletePlan = (id : number) => {
        setService({
            ...service, 
            plans: service.plans.filter(plan => plan.id !== id)
        })
    }

    return (
        <>
            <div className='flex flex-col gap-1 md:flex-row md:justify-between md:items-end'>
                <div>
                    <h1 className="text-4xl font-bold">Create Services</h1>
                    <p>Fill form for can create a service</p>
                </div>

                <div>
                    <button className='bg-sky-600 text-white px-2 py-1 rounded w-full'>Save Servicio</button>
                </div>
            </div>

            <form className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                    <InputContainer 
                        name='name'
                        placeholder='Service Name'
                        label='Name'
                        value={service.name}
                        handleChange={handleChange}
                    />
                    <TextareaContainer 
                        label='Description'
                        name='description'
                        value={service.description}
                        handleChange={handleChange}
                    />
                </div>
                
                <div>
                    <h2 className='text-xl font-bold'>Planes</h2>
                    
                    {alertText.type !== 0 && (    
                        <AlertText 
                            type={alertText.type}
                            msg={alertText.msg}
                        />
                    )}

                    <div className='flex gap-2'>
                        <select 
                            value={planId}
                            onChange={e => setPlanId(+e.target.value)}
                            className="w-full border rounded px-2 py-1"
                        >
                            <option value="0">Seleccione un plan</option>
                            {state.plans.map(plan => (
                                <option value={plan.id} key={plan.id}>{plan.name}</option>
                            ))}
                        </select>

                        <div>
                            <button
                                type='button' 
                                className='bg-neutral-600 hover:bg-neutral-700 transition-colors text-white px-2 py-1 rounded'
                                onClick={() => handleAddPlan()}
                            >Agregar</button>
                        </div>
                    </div>

                    
                    <div className='flex flex-col gap-3 mt-2'>
                        {service.plans.length ? service.plans.map(plan => (
                            <div className='bg-white px-3 py-2 rounded shadow grid grid-cols-2'>
                                <div>
                                    <p className='font-semibold text-lg'>{plan.name}</p>
                                    <p className='font-bold text-2xl text-sky-600'>{currencyFormat(plan.price)}</p>
                                    <p>{plan.description}</p>
                                </div>

                                <div className='text-end'>
                                    <p className='font-bold'>Status</p>
                                    <p
                                        className={`${plan.active ? 'text-green-500' : 'text-red-500'} font-bold`}
                                    >{plan.active ? 'Active' : 'No Active'}</p>

                                    <button onClick={() => handleDeletePlan(plan.id)} type='button' className='bg-red-500 hover:bg-red-600 transition-colors text-white px-2 py-1 rounded text-sm mt-2'>Eliminar</button>
                                </div>
                            </div>
                        )) : (
                            <p className=' bg-gradient-to-r from-neutral-600 to-neutral-700 text-white text-center font-bold text-lg px-2 py-1 rounded'>Aún no hay planes asignados</p>
                        )}
                    </div>

                </div>
            </form>
        </>
    )
}

export default CrudService