type AlertContainerProps = {
    type: number, 
    msg: string
}

const AlertContainer = ({ type, msg } : AlertContainerProps) => {
    return (
        <p
            className={`
                w-full
                text-center
                p-2
                my-1
                font-semibold 
                shadow
                rounded
                bg-gradient-to-r
                ${type === 1 && 'from-red-600 to-red-700 text-neutral-50 '}
                ${type === 2 && 'from-orange-600 to-orange-700 text-neutral-50 '}
                ${type === 3 && 'from-green-600 to-green-700 text-neutral-50 '}
                backdrop:blur-xl
            `}
        >{msg}</p>  
    )
}

export default AlertContainer