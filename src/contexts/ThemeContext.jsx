import { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext("light");

export default function ChangeTheme({children}){

    const [theme, toggleTheme] = useTheme();

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

