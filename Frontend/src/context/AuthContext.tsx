import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { AuthActions, AuthReducer, AuthState, initialState } from "../reducers/auth-reducer";
import axios from "axios";
import { Signup_Form } from "../types";

type AuthContextProps = {
    state: AuthState, 
    dispatch: Dispatch<AuthActions>
    handleLogin: (password: string, email: string) => Promise<void>
    handleSignUp: (user: Signup_Form) => Promise<void>
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const handleLogin = async(password: string, email: string) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth`)

            console.log(email, password, data)
        } catch (error) {
            
        }
    }
    
    const handleSignUp = async(user: Signup_Form) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/user`, user)
            dispatch({ type: 'setAlerta', payload: { type: 3, msg: data.msg } })
        } catch (err : any) {
            dispatch({ type: 'setAlerta', payload: { type: 1, msg: err.response.data.msg } })
        } finally {
            setTimeout(() => {
                dispatch({ type: 'reset_alert' })
            }, 4000)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                state, 
                dispatch, 
                handleLogin, 
                handleSignUp
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}