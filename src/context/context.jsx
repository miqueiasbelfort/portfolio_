import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [lang, setLang] = useState('pt');

    return (
        <AppContext.Provider value={{lang, setLang}}>
            {children}
        </AppContext.Provider>
    )
}
