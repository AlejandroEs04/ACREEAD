import { Alert, Signup_Form, UserAuth } from "../types";

export type AuthActions = 
    { type: 'signup', payload: { signupForm : Signup_Form } }

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
    if(actions.type === 'signup') {
        
    }

    return state
}