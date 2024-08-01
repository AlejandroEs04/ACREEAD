import { ChangeEvent } from 'react'

export type TextareaContainerProps = {
    name: string, 
    label: string, 
    value: string,
    handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextareaContainer = ({ label, name, value, handleChange } : TextareaContainerProps) => {
    return (
        <div className="mt-2">
            <label htmlFor={name}>{label}</label>
            <textarea 
                name={name} 
                id={name} 
                value={value} 
                onChange={handleChange}
                className='w-full border h-32 rounded px-2 py-1'
            ></textarea>
        </div>
    )
}

export default TextareaContainer