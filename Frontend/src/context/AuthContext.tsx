import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { AuthActions, AuthReducer, AuthState, initialState } from "../reducers/auth-reducer";

type AuthContextProps = {
    state: AuthState, 
    dispatch: Dispatch<AuthActions>
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider
            value={{
                state, 
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}