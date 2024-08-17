import { createContext, Dispatch, ReactNode, useReducer, FormEvent, useState } from "react"
import { AuthActions, AuthReducer, AuthState, initialState } from "../reducers/auth-reducer";
import { Signup_Form } from "../types";
import axios from "axios";

type AuthContextProps = {
    state: AuthState, 
    dispatch: Dispatch<AuthActions>
    handleLogin: (e: FormEvent<HTMLFormElement>) => Promise<void>
    handleSignUp: (e: FormEvent<HTMLFormElement>) => Promise<void>
    signupForm : Signup_Form
    setSignupForm: Dispatch<React.SetStateAction<Signup_Form>>
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const [signupForm, setSignupForm] = useState<Signup_Form>({
        name: '', 
        last_name: '', 
        email: '', 
        password: '', 
        repeat_password: ''
    })

    const handleLogin = async(e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth`)

            console.log(data)
        } catch (error) {
            
        }
    }
    
    const handleSignUp = async(e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/user`)
            
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                state, 
                dispatch, 
                handleLogin, 
                handleSignUp, 
                signupForm, 
                setSignupForm
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}