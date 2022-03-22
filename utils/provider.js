import { useContext,createContext, useState } from "react";

const initialStates = {
    theme:'light',
    setTheme:()=>{}
}

const MyThemeContext = createContext(initialStates);

export default function MyThemeProvider ({children}) {

    const [theme, setTheme] = useState('light');

    return <MyThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </MyThemeContext.Provider>
}

export const useTheme = () =>{
    return useContext(MyThemeContext)
}