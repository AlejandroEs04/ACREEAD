import { useState, ChangeEvent } from 'react'
import BackButton from '../components/BackButton'
import InputContainer from '../components/InputContainer'
import TextareaContainer from '../components/TextareaContainer'

const planInitialState = {
    id: 0,
    name: '',
    description: '',
    price: 0, 
    icon_url: '', 
    duration: 0
}

const CrudPlan = () => {
    const [plan, setPlan] = useState(planInitialState)

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target

        setPlan({
            ...plan, 
            [name] : value
        })
    }

    return (
        <>
            <BackButton />
            <div className='flex flex-col gap-1 md:flex-row md:justify-between md:items-end'>
                <div>
                    <h1 className="text-4xl font-bold">Create Plan</h1>
                    <p>Fill form for can create a plan</p>
                </div>

                <div>
                    <button className='bg-sky-600 text-white px-2 py-1 rounded w-full'>Save Plan</button>
                </div>
            </div>

            <form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                <InputContainer 
                    name='name'
                    placeholder='Plan Name'
                    label='Name'
                    value={plan.name}
                    handleChange={handleChange}
                />

                <InputContainer 
                    name='price'
                    placeholder='Price'
                    type='number'
                    label='Price'
                    value={plan.price}
                    handleChange={handleChange}
                />

                <TextareaContainer 
                    label='Description'
                    name='description'
                    value={plan.description}
                    handleChange={handleChange}
                    className='row-span-2'
                />

                <InputContainer 
                    name='duration'
                    placeholder='Duration (Month)'
                    type='number'
                    label='Duration'
                    value={plan.duration}
                    handleChange={handleChange}
                />
            </form>
        </>
    )
}

export default CrudPlan