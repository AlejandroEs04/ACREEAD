import Table from '../components/Table'
import { Link } from 'react-router-dom'
import { useClient } from '../hooks/useClient'

const AdminServices = () => {
    const { state } = useClient()

    return (
        <>
            <div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center mb-2'>
                <div>
                    <h1 className="text-4xl font-bold">Services</h1>
                    <p>Create, update and delete your services</p>
                </div>

                <div>
                    <Link to={`create`} className='bg-neutral-700 hover:bg-neutral-800 transition-colors text-white px-2 py-1 rounded w-full shadow'>Add Service</Link>
                </div>
            </div>

            <Table 
                headers={[{name: 'Id'}, {name: 'Name'}, {name: 'Description'}, {name: 'Actions'}]}
            >
                {state.services.map(service => (
                    <tr key={service.id} className='odd:bg-white even:bg-gray-50 last-of-type:border-b-0 border-b border-gray-400 hover:bg-gray-100'>
                        <td scope='row' className='px-6 py-1'>{service.id}</td>
                        <td scope='row' className='px-6 py-1'>{service.name}</td>
                        <td scope='row' className='px-6 py-1'>{service.description}</td>
                        <td scope='row' className='px-6 py-1'>
                            <div className='flex gap-1'>
                                <button className='py-1 px-2 rounded text-sm bg-blue-600 text-white'>Editar</button>
                                <button className='py-1 px-2 rounded text-sm bg-red-600 text-white'>Eliminar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </Table>
        </>
    )
}

export default AdminServices