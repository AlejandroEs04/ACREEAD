import { Service, Plan } from "../types";

export type AdminActions = 
    { type: 'get-services', payload: { services: Service[] } }

export type AdminState = {

}

export const initialState : AdminState = {
    
}

export const AdminReducer = (
    state: AdminState = initialState, 
    actions: AdminActions
) => {
    
    return state
}