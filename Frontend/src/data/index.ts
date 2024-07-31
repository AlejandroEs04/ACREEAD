import { Service } from '../types/index'

export const services : Service[] = [
    {
        id: 1, 
        name : "Web Development", 
        description: "We develop software to create innovative and efficient solutions, we can provide different plans tailored to specifications for your business.", 
        plans: [
            {
                id: 1, 
                name: 'Plan Basico', 
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima qui ad minus, dignissimos suscipit vel.', 
                icon_url: 'imagen1',
                price: 5480.52, 
                active: true, 
                duration: 1
            }, 
            {
                id: 2, 
                name: 'Plan Medio', 
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima qui ad minus, dignissimos suscipit vel.', 
                icon_url: 'imagen1',
                price: 5480.52, 
                active: true, 
                duration: 1
            }, 
            {
                id: 3, 
                name: 'Plan Personalizado', 
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima qui ad minus, dignissimos suscipit vel.', 
                icon_url: 'imagen1',
                price: 5480.52, 
                active: true, 
                duration: 1
            }, 
        ]
    },
    {
        id: 2, 
        name : "Network Infrestructure", 
        description: "We develop software to create innovative and efficient solutions, we can provide different plans tailored to specifications for your business.", 
        plans: [
            {
                id: 3, 
                name: 'Plan Personalizado', 
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima qui ad minus, dignissimos suscipit vel.', 
                icon_url: 'imagen1',
                price: 5480.52, 
                active: true, 
                duration: 1
            }
        ]
    },
    {
        id: 3, 
        name : "Data Analysis", 
        description: "We develop software to create innovative and efficient solutions, we can provide different plans tailored to specifications for your business.",
        plans: [
            {
                id: 3, 
                name: 'Plan Personalizado', 
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima qui ad minus, dignissimos suscipit vel.', 
                icon_url: 'imagen1',
                price: 5480.52, 
                active: true, 
                duration: 1
            }
        ]
    },
    {
        id: 4, 
        name : "Web Development", 
        description: "We develop software to create innovative and efficient solutions, we can provide different plans tailored to specifications for your business.",
        plans: []
    },
    {
        id: 5, 
        name : "Web Development", 
        description: "We develop software to create innovative and efficient solutions, we can provide different plans tailored to specifications for your business.",
        plans: []
    },
    {
        id: 6, 
        name : "Web Development", 
        description: "We develop software to create innovative and efficient solutions, we can provide different plans tailored to specifications for your business.",
        plans: []
    },
]