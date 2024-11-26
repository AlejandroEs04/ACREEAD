import { Link } from "react-router-dom"
import { useClient } from "../hooks/useClient";
import Table from "../components/Table";
import { currencyFormat } from "../helpers";

const AdminPlans = () => {
    const { state } = useClient();

    return (
        <>
            <div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center mb-2'>
                <div>
                    <h1 className="text-4xl font-bold">Plans</h1>
                    <p>Create, update and delete your plans</p>
                </div>

                <div>
                    <Link to={`create`} className='bg-neutral-700 hover:bg-neutral-800 transition-colors text-white px-2 py-1 rounded w-full shadow'>Add Plan</Link>
                </div>
            </div>

            <Table
                headers={[{name: 'Id'}, {name: 'Name'}, {name: 'Description'}, {name: 'Price'}, {name: 'Duration'}, {name: 'Status'}, {name: 'Acciones'}]}
            >
                {state.plans.map(plan => (
                    <tr key={plan.id}>
                        <td scope='row' className='px-6 py-1'>{plan.id}</td>
                        <td scope='row' className='px-6 py-1'>{plan.name}</td>
                        <td scope='row' className='px-6 py-1'>{plan.description}</td>
                        <td scope='row' className='px-6 py-1'>{currencyFormat(plan.price)}</td>
                        <td scope='row' className='px-6 py-1'>{plan.duration}</td>
                        <td scope='row' className={`px-6 py-1 font-bold ${plan.active ? 'text-green-600' : 'text-red-600'}`}>{plan.active ? 'Active' : 'Inactive'}</td>
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

export default AdminPlans