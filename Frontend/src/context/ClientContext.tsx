import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { ClientActions, ClientReducer, ClientState, initialState } from "../reducers/client-reducer";

type ClientContextProps = {
    state: ClientState
    dispatch: Dispatch<ClientActions>
}

type ClientProviderProps = {
    children: ReactNode
}

export const ClientContext = createContext<ClientContextProps>(null!);

export const ClientProvider = ({ children } : ClientProviderProps) => {
    const [state, dispatch] = useReducer(ClientReducer, initialState)

    return (
        <ClientContext.Provider
            value={{
                state, 
                dispatch
            }}
        >
            {children}
        </ClientContext.Provider>
    )
}
