import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('Light');
    const toggleTheme=(currTheme)=>{
        if(currTheme==='Light'){
            setTheme('Dark');
        }else{
            setTheme('Light');
        }
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = ()=>useContext(ThemeContext);
