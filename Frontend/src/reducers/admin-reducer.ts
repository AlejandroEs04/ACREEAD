import { Service, Plan } from "../types";

export type AdminActions = 
    { type: 'get-services', payload: { services: Service[] } } |
    { type: 'get-plans', payload: { plans: Plan[] } }

export type AdminState = {
    services: Service[]
    plans: Plan[]
}

export const initialState : AdminState = {
    services: [], 
    plans: []
}

export const AdminReducer = (
    state: AdminState = initialState, 
    actions: AdminActions
) => {
    if(actions.type === 'get-services') {
        return {
            ...state, 
            services: actions.payload.services
        }
    }
    if(actions.type === 'get-plans') {
        return {
            ...state, 
            plans: actions.payload.plans
        }
    }
    
    return state
}