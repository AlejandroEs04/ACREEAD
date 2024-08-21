import Table from '../components/Table'
import { useAdmin } from '../hooks/useAdmin'
import { Link } from 'react-router-dom'

const AdminServices = () => {
    const { state } = useAdmin()

    return (
        <>
            <div className='flex flex-col gap-1 md:flex-row md:justify-between md:items-end'>
                <div>
                    <h1 className="text-4xl font-bold">Services</h1>
                    <p>Create, update and delete your services</p>
                </div>

                <div>
                    <Link to={`create`} className='bg-sky-600 text-white px-2 py-1 rounded w-full'>Agregar Servicio</Link>
                </div>
            </div>

            <Table 
                headers={[{name: 'Id'}, {name: 'Name'}, {name: 'Description'}, {name: 'Actions'}]}
            >
                {state.services.map(service => (
                    <tr key={service.id} className='odd:bg-white even:bg-gray-50 last-of-type:border-b-0 border-b border-gray-400 hover:bg-gray-100'>
                        <td scope='row' className='px-6 py-2'>{service.id}</td>
                        <td scope='row' className='px-6 py-2'>{service.name}</td>
                        <td scope='row' className='px-6 py-2'>{service.description}</td>
                        <td scope='row' className='px-6 py-2'>
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