import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if(!context) {
        throw new Error('useClient must be used within a ClientProvider')
    }

    return context
}