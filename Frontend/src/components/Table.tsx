import React, { ReactNode } from "react"
import { Headers } from "../types"

type TableProps = {
    headers: Headers
    children: ReactNode
}

const Table = ({ headers, children } : TableProps) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded mt-2">
            <table className='w-full text-left rtl:text-right text-gray-800'>
                <thead className='bg-gray-200'>
                    <tr>
                        {headers.map(header => (
                            <th key={header.name} scope='col' className='px-6 py-2'>{header.name}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default Table