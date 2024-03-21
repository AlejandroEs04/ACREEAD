import { createContext, useEffect, useState } from 'react';
import productos from '../data/Productos';

const AppContext = createContext();

const AppProvider = ({children}) => {
    // Page functions
    const [menuSlider, setMenuSlider] = useState(false)

    return (
        <AppContext.Provider
            value={{
                menuSlider, 
                setMenuSlider, 
                productos
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {
    AppProvider
}

export default AppContext;