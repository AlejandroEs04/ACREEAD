import { Service, Plan } from "../types"

export type ClientActions = 
    { type: 'change-service-id', payload: { id: Service['id'] } } |
    { type: 'load-services', payload: { services: Service[] } } |
    { type: 'load-plans', payload: { plans: Plan[] } }

export type ClientState = {
    serviceId: number
    services: Service[]
    plans: Plan[]
}

export const initialState : ClientState = {
    serviceId: 0, 
    services: [], 
    plans: []
}

export const ClientReducer = (
    state: ClientState = initialState, 
    actions: ClientActions
) => {
    if(actions.type === 'change-service-id') {
        return {
            ...state, 
            serviceId: actions.payload.id
        }
    }
    if(actions.type === 'load-services') {
        return {
            ...state, 
            services: actions.payload.services
        }
    }
    if(actions.type === 'load-plans') {
        return {
            ...state, 
            plans: actions.payload.plans
        }
    }

    return state
}