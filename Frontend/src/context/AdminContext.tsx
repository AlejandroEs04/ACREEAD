import { createContext, Dispatch, ReactNode, useEffect, useReducer } from "react";
import { AdminActions, AdminReducer, AdminState, initialState } from "../reducers/admin-reducer";
import axios from "axios";
import { Plans, Services, planResponseSchema, responseSchema } from "../schemas";
import { Plan, Service } from "../types";

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

    const handleGetServices = async() => {
        try {
            const { data: serviceResult } = await axios<Services[]>(`${import.meta.env.VITE_API_URL}/service`)
            console.log(serviceResult)
            const result = responseSchema.parse(serviceResult);
            const services : Service[] = result.services

            dispatch({ type: 'get-services', payload: { services } })
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetPlans = async() => {
        try {
            const { data: planResult } = await axios<Plans[]>(`${import.meta.env.VITE_API_URL}/plan`)
            const result = planResponseSchema.parse(planResult);
            const plans : Plan[] = result.plans

            dispatch({ type: 'get-plans', payload: { plans } })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        handleGetServices()
        handleGetPlans()
    }, [])

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
