import { Service } from "../types"

export type ClientActions = 
    { type: 'change-service-id', payload: { id: Service['id'] } }

export type ClientState = {
    serviceId: number
}

export const initialState : ClientState = {
    serviceId: 0
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

    return state
}