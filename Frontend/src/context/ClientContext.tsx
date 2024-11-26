import { createContext, Dispatch, ReactNode, useReducer, useEffect } from "react";
import axios from "axios";
import { ClientActions, ClientReducer, ClientState, initialState } from "../reducers/client-reducer";
import { Plans, Services, planResponseSchema, responseSchema } from "../schemas";
import { Plan, Service } from "../types";

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

    /** GET INFORMATION FUNCTIONS */
    const handleGetServices = async() => {
        try {
            const { data: serviceResult } = await axios<Services[]>(`${import.meta.env.VITE_API_URL}/service`)
            const result = responseSchema.parse(serviceResult);
            const services : Service[] = result.services

            dispatch({ type: 'load-services', payload: { services } })
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetPlans = async() => {
        try {
            const { data: planResult } = await axios<Plans[]>(`${import.meta.env.VITE_API_URL}/plan`)
            const result = planResponseSchema.parse(planResult);
            const plans : Plan[] = result.plans

            dispatch({ type: 'load-plans', payload: { plans } })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        handleGetServices()
        handleGetPlans()
    }, [])

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
