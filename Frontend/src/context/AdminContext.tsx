import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { AdminActions, AdminReducer, AdminState, initialState } from "../reducers/admin-reducer";

type AdminContextProps = {
    state: AdminState
    dispatch: Dispatch<AdminActions>
}

type AdminProviderProps = {
    children: ReactNode
}

export const AdminContext = createContext<AdminContextProps>(null!);

export const AdminProvider = ({ children } : AdminProviderProps) => {
    const [state, dispatch] = useReducer(AdminReducer, initialState)

    return (
        <AdminContext.Provider
            value={{
                state, 
                dispatch
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}
