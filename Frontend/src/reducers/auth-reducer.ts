import { Alert, Signup_Form, UserAuth } from "../types";

export type AuthActions = 
    { type: 'setAlerta', payload: { type: number, msg: string } }

export type AuthState = {
    auth: UserAuth | null
    alert: Alert | null
}

export const initialState : AuthState = {
    auth: null, 
    alert: null
}

export const AuthReducer = (
    state: AuthState = initialState, 
    actions: AuthActions
) => {
    if(actions.type === 'setAlerta') {
        return {
            ...state, 
            alert: { type: actions.payload.type, msg: actions.payload.msg }
        }
    }

    return state
}